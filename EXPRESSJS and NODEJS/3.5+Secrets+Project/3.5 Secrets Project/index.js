//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 4000;
const _dirname = dirname(fileURLToPath(import.meta.url));
var password = "";

app.use(bodyParser.urlencoded({extended:true}));

function checkPassword(req,res,next){
password = req.body["password"];
next();
}

app.use(checkPassword);


app.get("/", (req,res) => {
    res.sendFile(_dirname + "/public/index.html");
})

app.post("/check", (req,res) => {
    if (password === "ILoveProgramming")
    {
        res.sendFile(_dirname + "/public/secret.html");
    }
    else {
        res.redirect("/");
    }
    
})

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
})
