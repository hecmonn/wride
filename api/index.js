import express from 'express';
import {graphDb} from '../config';

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

router.get('/get-home-posts/:active_user',(req,res)=>{
    let active_user=req.params.active_user;
    let sql=`MATCH (s:User)-[:FOLLOWS]->(u)-[:WROTE]->(p:Post) WHERE ID(s)=${75} RETURN u.username as username,u.first_name as first_name, u.last_name as last_name, u.profile as profile, p.body as text,p.created_date as created_date,p.media as media, ID(p) as pid, ID(s) as uid ORDER BY p.created_date DESC`; // DESC SKIP 0 LIMIT 0`;
    let posts=gquery(sql,res);
});

router.get('/get-user-posts/:uid',(req,res)=>{
    let uid=req.params.uid;
    let sql=`MATCH (n:User)-[r:SHARED|WROTE]->(p:Post) MATCH (u:User)-[:WROTE]->(p) WHERE ID(n)=${75} RETURN u.username as username,u.first_name as first_name, u.last_name as last_name, u.profile as profile, p.body as text,p.created_date as created_date,p.media as media, ID(p) as pid, ID(n) as uid ORDER BY p.created_date DESC`;
    let posts=gquery(sql,res);
});

router.get('/get-user/:username',(req,res)=>{
    let username=req.params.username;
    let sql=`MATCH (u:User) WHERE u.username="${username}" RETURN u.username as username, u.first_name as first_name, u.last_name as last_name, u.bod as bod, u.bio as bio, u.created_date as created_date, u.profile as profile, u.cover as cover`;
    console.log(sql);
    let user=gquery(sql,res);
});
export default router;
