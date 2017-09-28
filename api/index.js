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
    let sql=`MATCH (s:User)-[:FOLLOWS]->(b)-[:WROTE]->(p:Post) WHERE ID(s)=${active_user} RETURN b.username as username,b.fname as first_name,b.lname as last_name,b.profile as profile,p.body as text,p.created_date as created_date,p.media as media, ID(p) as pid,p.title as title, ID(s) as uid ORDER BY p.created_date DESC`;
    let posts=gquery(sql,res);
});

router.get('/get-user-posts/:uid',(req,res)=>{
    let {uid}=req.params;
    let sql=`MATCH (u:User)-[:WROTE]->(p) WHERE u.username='${uid}' RETURN u.username as username,u.fname as first_name, u.lname as last_name, u.profile as profile, p.body as text,p.created_date as created_date,p.media as media, ID(p) as pid, p.title as title,ID(u) as uid ORDER BY p.created_date DESC`;
    let posts=gquery(sql,res);
});

router.get('/get-user/:username',(req,res)=>{
    let username=req.params.username;
    let sql=`MATCH (u:User) WHERE u.username="${username}" RETURN u.username as username, u.fname as fname, u.lname as lname, u.bod as bod, u.bio as bio, u.created_date as created_date, u.profile as profile, u.cover as cover`;
    let user=gquery(sql,res);
});

router.post('/submit-user-reg',(req,res)=>{
    let {fname,lname,username,password,email,bod}=req.body.data;
    const psswd_hash=bcrypt.hashSync(password,10);
    let cql=`CREATE (u:User {fname:'${fname}',lname:'${lname}',username:'${username}',psswd:'${psswd_hash}',email:'${email}',bod:'${bod}'}) return u`;
    session.run(cql)
    console.log(cql);
});
router.post('/submit-post',(req,res)=>{
    console.log(req.body)
    let {body,title,uid}=req.body.data;
    let cql=`MATCH (a:User) WHERE ID(a)=${uid} CREATE (a)-[r:WROTE]->(b:Post {title:'${title}',body:'${body}',created_date: TIMESTAMP()})`;
        session.run(cql);
});

router.post('/following',(req,res)=>{
    let {au_username,username}=req.body.data;
    let cql=`MATCH (a:User)<-[r:FOLLOWS]-(b:User) WHERE a.username='${username}' AND b.username='${au_username}' RETURN r`;
    gquery(cql,res)
})

router.post('/un-follow',(req,res)=>{
    let {following,au_username,username}=req.body.data;
    console.log(req.body.data)
    let cql=`MATCH (a:User),(b:User) WHERE a.username='${au_username}' AND b.username='${username}' CREATE (a)-[r:FOLLOWS {created_date:TIMESTAMP()}]->(b) RETURN r`;
    if(following) cql=`MATCH (a:User)-[r:FOLLOWS]->(b:User) WHERE a.username='${au_username}' AND b.username='${username}' DELETE r`;
    gquery(cql,res)
})

export default router;
