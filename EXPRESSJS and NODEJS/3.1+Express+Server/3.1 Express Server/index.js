import express from "express";
import {dirname } from "body-parser";
import { fileURLToPath} from "path";
import morgan from "morgan";
const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(morgan("tiny"));

app.get("/", (req,res) => {
  
  res.sendFile(_dirname + "/public/index.html")
});

app.post("/submit", (req,res) => {
  console.log(req.body);
})

app.get("/about", (req,res) => {
  res.send("<h1>About Me</h1>");
  
});

app.get("/contact", (req,res) => {
  res.send("<h1>Contact</h1>");

});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
