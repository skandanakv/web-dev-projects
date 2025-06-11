import express from 'express';

const app=express();
 const port= 3000;

 app.get("/",(req,res)=>{
   const today=new Date();
   const day=today.getDay();

   let dayType="";
   if(day===0 || day===6){
       dayType="the weekend";
       advice="enjoy your day";
   }

    res.render("index.ejs", {
        dayType: "a weekday", 
        advice: "its time to work Hard", 
    });
 })



 app.listen(port,()=>{
    console.log(`server running on port ${port}`);
 })