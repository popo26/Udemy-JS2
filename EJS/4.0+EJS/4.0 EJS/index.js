import express from "express";

const app = express();
const port = 3000;


app.get("/", (req,res) => {
 const d = new Date();
 let day = d.getDay();
 
if (day === 0 || day === 6){
    res.render("solution.ejs", {dayType: "weekend", advice: "it's time to have fun", day:d, dayNum: day});
}
else {
    
    res.render("solution.ejs", {dayType: "weekday", advice: "it's time to work hard", day:d, dayNum: day})

}
})

app.listen(port,() => {
    console.log(`Listening on port ${port}`);
});