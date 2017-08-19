import express from 'express';
import {graphDb,tokenSecret} from '../config';
//AUTH
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
//NEO4J DRIVER
const n4j=require('neo4j-driver').v1;
const driver=n4j.driver('bolt://localhost',n4j.auth.basic(graphDb.user,graphDb.password));
const session=driver.session();

const router=express.Router();
const gquery=(query,res)=>{
    session.run(query)
    .then(result=>{
        let posts=[];
        result.records.forEach(record=>{
            let keys=record.keys;
            let values=record._fields;
            let tempObj={};
            for (var i = 0; i < keys.length; i++) {
                let id=keys[i];
                tempObj[id]=values[i];
            }
            posts.push(tempObj);
        });
        res.json({posts});
    })
    .catch(err=>{return err;})
}

router.post('/login',(req,res)=>{
    const {identifier,password}=req.body;
    let cql=`MATCH (u:User) WHERE u.username='${identifier}' OR u.email='${identifier}'`;
    let resCql=session.run(cql);
    console.log(resCql);
    let queryRes=con.query(sql,(err,response,fields)=>{
        if(err) console.error(err);
        if(response.length>0){
            if(bcrypt.compareSync(password,response[0].password)){
                const token=jwt.sign({
                    id: response[0].id,
                    usuario: response[0].usuario,
                    email: response[0].email,
                    initials: initials(response[0].nombre,response[0].apellido),
                    nombre: prettyName(response[0].nombre,response[0].apellido)
                }, tokenSecret.jwtSecret);
                res.json({token,access:true});
            } else {
                res.status(401).json({errors:{form:'Invalid password'},access:false});
            }
        } else {
            res.status(401).json({errors:{form:'Invalid credentials'},access:false});
        }
    });
});

router.post('/auth',(req,res)=>{
    const {identifier,password}=req.body;
    let cql=`MATCH (u:User) WHERE u.username="${identifier}" OR u.email="${identifier}" RETURN u.username as username,u.fname as fname,u.lname as lname,u.psswd as psswd,ID(u) as uid`;
    let authQuery=session.run(cql)
    .then(result=>{
        if(result.records.length>0){
            let hshd_psswd=result.records[0]._fields[3];
            if(bcrypt.compareSync(password,hshd_psswd)) {
                let auth=[];
                result.records.forEach(record=>{
                    let keys=record.keys;
                    let values=record._fields;
                    let tempObj={};
                    for (var i = 0; i < keys.length; i++) {
                        let id=keys[i];
                        tempObj[id]=values[i];
                    }
                    auth.push(tempObj);
                })
                const {uid,username,fname,lname,psswd,email}=auth[0];
                const token=jwt.sign({
                    ...auth[0]
                },tokenSecret.jwtSecret)
                res.json({token,access:true})
            } else {
                res.status(401).json({errors:{form:'Invalid psswd'},access:false});
            }
        } else {
            res.status(401).json({errors:{form:'Invalid credentials'},access:false});
        }
    });
});

router.get('/get-home-posts/:active_user',(req,res)=>{
    let active_user=req.params.active_user;
    let sql=`MATCH (s:User)-[:FOLLOWS]->(u)-[:WROTE]->(p:Post) WHERE ID(s)=${21} RETURN u.username as username,u.first_name as first_name, u.last_name as last_name, u.profile as profile, p.body as text,p.created_date as created_date,p.media as media, ID(p) as pid, ID(s) as uid ORDER BY p.created_date DESC`; // DESC SKIP 0 LIMIT 0`;
    let posts=gquery(sql,res);
});

router.get('/get-user-posts/:uid',(req,res)=>{
    let uid=req.params.uid;
    let sql=`MATCH (n:User)-[r:SHARED|WROTE]->(p:Post) MATCH (u:User)-[:WROTE]->(p) WHERE ID(n)=${21} RETURN u.username as username,u.first_name as first_name, u.last_name as last_name, u.profile as profile, p.body as text,p.created_date as created_date,p.media as media, ID(p) as pid, ID(n) as uid ORDER BY p.created_date DESC`;
    let posts=gquery(sql,res);
});

router.get('/get-user/:username',(req,res)=>{
    let username=req.params.username;
    let sql=`MATCH (u:User) WHERE u.username="${username}" RETURN u.username as username, u.fname as fname, u.lname as lname, u.bod as bod, u.bio as bio, u.created_date as created_date, u.profile as profile, u.cover as cover`;
    console.log(sql);
    let user=gquery(sql,res);
});

router.post('/submit-user-reg',(req,res)=>{
    let {fname,lname,username,password,email,bod}=req.body.data;
    const psswd_hash=bcrypt.hashSync(password,10);
    let cql=`CREATE (u:User {fname:'${fname}',lname:'${lname}',username:'${username}',psswd:'${psswd_hash}',email:'${email}',bod:'${bod}'}) return u`;
    session.run(cql)
    console.log(cql);
});

export default router;
