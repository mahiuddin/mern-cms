// library function
import express from "express";
import models from "./models/index.js";
import mongoose from "mongoose";
import User from "./models/user.js";

const port = 3000;
const app = express();

app.use(express.json());

const log = (msg)=>{
    console.log(msg);
}

// connection string
const url ="mongodb://localhost:27017/cmsDB";
const option ={};
const conn = ()=>{
    mongoose.connect(url,option,(err,db)=>{
        if(err){
            console.log(err);
        }
        else log("database connected successfully");
    });
};

conn();

app.get('/',(req,res)=>{
    res.send("hello world"+req.query.name);
})

app.post('/',(req,res)=>{
    const body = req.body;
    const user = new models.User({username: body.username, createdat: new Date()});
    user.save().then((saveduser)=>{
        res.status(201).send("User saved id " + saveduser._id);
    }).catch((error)=>{
        res.status(500).send(error);
    });
    
})

app.listen(port, ()=>{
   console.log("listen to port number" + port);
})

log(models);