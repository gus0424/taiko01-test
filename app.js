const express = require("express", () => {
console.log("Successful imported express module");
});
console.log("Hello world");
console.log("Hello, World");

const app = epress();

app.get("/", (req,res) => {
res.sendFile("index.html");
})
