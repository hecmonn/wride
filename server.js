import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import bodyParser from 'body-parser';
import {serverConfig} from './config';

import apiRouter from './api';

const app=express();

//sass config
app.use(sassMiddleware({
    src: path.join(__dirname,'src/sass'),
    dest: path.join(__dirname,'public/static/css'),
    intendedSyntax: true,
    debug: false,
    outputStyle: 'compressed',
    prefix: '/css'
}));

app.use(express.static(path.join(__dirname,'public/static')));
app.use(bodyParser.json());
app .use('/api',apiRouter);
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
})
app.use((req,res)=>{
    res.status(404).json({
        errors:{
            global:"Still working on it"
        }
    });
});
const server=app.listen(serverConfig.port,()=>{
    let port=serverConfig.port;
    let host=serverConfig.host;
    console.log('Express server running %s:%s',host,port);
});
