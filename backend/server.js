import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Swayam@2005",
  database: "studDB",
});

app.get('/', (req, res) => {

  const sql = "SELECT * FROM student";

  db.query(sql,(err,result)=>
  {
    if(err)
    {
      return res.json({Message: "Error inside display module on root access."});
    }
    return res.json(result);
  });
});

app.post('/student', (req, res) => {

  const sql = "insert into student(`name`,`email`) values(?)";
  const values=[req.body.name,req.body.email];

  db.query(sql,(err,result)=>
  {
    if(err)
    {
      return res.json(err);
    }
    return res.json(result);
  });
});

app.listen(8081,()=>{
    console.log("Server Listening on port 8081");
});
