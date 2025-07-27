const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(express.static(path.join(__dirname, "sql")));

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port, function(){
    console.log(`Server running at Port: ${port}`);
});

// SQL
const mysql = require("mysql2");
require("dotenv").config();
const server_host = process.env.SERVER_HOST;
const server_user = process.env.SERVER_USER;
const server_password = process.env.SERVER_PASSWORD;

let con = mysql.createConnection({
    host: server_host,
    user: server_user,
    password: server_password,
    database: "ausgabe"
});

con.connect((err)=>{
    if(err){
        console.log(err);
    }
});