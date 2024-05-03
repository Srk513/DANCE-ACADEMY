const express = require("express");
const path = require("path");
const app=express();
const mongoose = require('mongoose');
const port=8000;

//database connection
mongoose.connect('mongodb://127.0.0.1:27017/DanceWebsite',{useNewUrlParser: true});
const bodyparser=require("body-parser");

//define schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  desc: String
});
var Contact = mongoose.model('Contact', contactSchema);

const registerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});
var Register = mongoose.model('Register', registerSchema);

const loginSchema = new mongoose.Schema({
  email: String,
  password: String
});
var Login = mongoose.model('Login', loginSchema);

//EXPRESS SPECIFIC STUFF
// app.use(express.static('static', options))
app.use('/static',express.static('static'))      //for serving static files
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine', 'pug')                  //set the template engin as pug
app.set('views',path.join(__dirname, 'views'))//set the views directory


//ENDPOINTS

app.get("/",(req,res)=>{
    const params={};
    res.status(200).render('home.pug',params);
  });

  app.get("/contact",(req,res)=>{
    const params={};
    res.status(200).render('contact.pug',params);
  });

  app.get("/login",(req,res)=>{
    const params={};
    res.status(200).render('login.pug',params);
  });
  app.get("/register",(req,res)=>{
    const params={};
    res.status(200).render('register.pug',params);
  });

  app.get("/classinfo",(req,res)=>{
    const params={};
    res.status(200).render('classinfo.pug',params);
  });
  
  app.post("/contact",(req,res)=>{
    var myData=new Contact(req.body);
    myData.save().then(()=>{
      res.send("This item has been saved to the datatbase")
    }).catch(()=>{
      res.status(400).send("item was not saved to the database")
    });
    //res.status(200).render('contact.pug');
  });

  app.post("/register",(req,res)=>{
    var myData=new Register(req.body);
    myData.save().then(()=>{
      res.send("You have register successfully....")
    }).catch(()=>{
      res.status(400).send("Registration failed...")
    });
    //res.status(200).render('contact.pug');
  });
  // app.post("/login",(req,res)=>{
  //   var myData=new Login(req.body);
  //   myData.save().then(()=>{
  //     res.send("You have Login successfully....")
  //   }).catch(()=>{
  //     res.status(400).send("Login failed...")
  //   });
  // });
  
  
  app.post("/login",(req,res)=>{
    var myData=new Login(req.body);
    myData.save().then(()=>{
      app.get("/myaccount",(req,res)=>{
        const params={};
        res.status(200).render('myaccount.pug',params);
      });
    }).catch(()=>{
      res.status(400).send("Login failed...")
    });
  });
  
  



//start server
  app.listen(port,()=>{
    console.log(`the application started successfully on port ${port}`)
});
