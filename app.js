const express = require("express", () => {
console.log("Successful imported express module");
});
const bp = require("body-parser");




console.log("Hello world");
console.log("Hello, World");

const app = express();

app.use(bp.urlencoded({extended: true}));

app.get("/", (req,res) => {
res.sendFile(__dirname+"/index.html");
});


app.post("/",(req,res) => {
res.sendFile(__dirname+"/res.html");
});



app.post("/back", (req,res) => {
	console.log("going back");
res.sendFile(__dirname+"/index.html");
});


app.listen("3000");
