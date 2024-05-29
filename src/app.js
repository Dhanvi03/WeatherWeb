const express = require("express");
const path = require("path");
const app= express();
const port = process.env.PORT || 7000;
const hbs = require('hbs');

const static_path = path.join(__dirname, "../public");
const view_path = path.join(__dirname,'../templates/views');
const partials_path = path.join(__dirname, "../templates/partials");

app.set('views',view_path);
app.set('view engine','hbs');
hbs.registerPartials(partials_path);
app.use(express.static(static_path));

app.get("/",(req,res)=>{
    res.render('index');
})

app.get("/about",(req,res)=>{
    res.render('about');
})
app.get("/weather",(req,res)=>{
    res.render('weather');
})
app.get("*",(req,res)=>{
    res.render('404error',{
        errorMsg : 'Oops this page could not find',
    });
})

// ------------------------------------------------------

app.get("/",(req,res)=>{
    res.send("Welcome to weather website...");
})

app.get("/about",(req,res)=>{
    res.send("Welcome to About page...");
})
app.get("/weather",(req,res)=>{
    res.send("Welcome to weather app...");
})
app.get("*",(req,res)=>{
    res.send("Oops page couldn't find ");
})

app.listen(port,()=>{
    console.log(`listening port ${port}`);
})