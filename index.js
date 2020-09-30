const express=require('express');
const port=8000;

const app=express();


app.listen(port,function(err){
    if(err){
        console.log(`err in runnig the server ${err}`)

    }

    console.log(`Yup my Express  Server is running on Port:`,port);
})

