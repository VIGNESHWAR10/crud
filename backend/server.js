const express = require("express");
const cors = require("cors");
require('dotenv').config();
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
    // host: "172.18.0.2",
    // user: "root",
    // port: 30010,
    // password: "mypa55w0rd",
    // database: "crud"
})

app.get("/", (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.post("/create", (req, res) => {
    const sql = "INSERT INTO student (`ID`,`Name`, `Email`) VALUES (?)";
    const values = [
        req.body.id,
        req.body.name,
        req.body.email
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.put("/update/:ID", (req, res) => {
    const sql = "UPDATE student SET `Name` = ?, `Email` = ? WHERE ID = ?";
    const values = [
        req.body.name,
        req.body.email
    ]
    const id = req.params.ID
    db.query(sql, [...values, id], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.delete("/student/:ID", (req, res) => {
    const sql = "DELETE FROM student WHERE ID = ?";

    const id = req.params.ID
    db.query(sql, [id], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log("listening");
})