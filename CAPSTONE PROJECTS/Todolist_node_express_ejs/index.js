import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

//Step1 routing to 2 different todolists
//Step2 add logics to go to different todolists
//Step3 styling

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

let generalList = [];
let workList = [];
let genre = "";


function done(){
    document.querySelector(".todo-li").addEventListener("mousedown", function(){
        console.log("clicked");
    });
}

app.get("/", (req,res) => {
    genre = "General";
        res.render("index.ejs", {todolist:generalList, genre:genre});
});

app.get("/work", (req,res) => {
    genre = "Work";
    res.render("index.ejs", {todolist:workList, genre:genre});
});

app.post("/submit", (req,res) => {
    if (req.body["General"]){
        generalList.push(req.body["General"]);
        res.render("index.ejs", {todolist:generalList, genre:genre});
    } else if (req.body["Work"]){
        workList.push(req.body["Work"]);
        res.render("index.ejs", {todolist:workList, genre:genre});
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
