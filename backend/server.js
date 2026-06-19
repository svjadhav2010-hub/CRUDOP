import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(cors());
app.listen(8081,()=>{
    console.log("Server Listening...");
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Swayam@123",
  database: "crudop",
});