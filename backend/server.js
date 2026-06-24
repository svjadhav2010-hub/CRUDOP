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

app.get('/read/:id', (req, res) => {

  const sql = "select * from student where id=?";
  const id=req.params.id;

  db.query(sql,[id],(err,result)=>
  {
    if(err)
    {
      return res.json({ Message: "Error inside read module on root access.(inside server.js)" });
    }
    return res.json(result);
  });

});

app.put('/update/:id', (req, res) => {

  const sql = "update student set `name`=?,`email`=? where id=?";
  const id=req.params.id;
  const values=[req.body.name,req.body.email];

  db.query(sql,[req.body.name,req.body.email,id],(err,result)=>
  {
    if(err)
    {
      return res.json({ Message: "Error inside update module on root access.(inside server.js)" });
    }
    return res.json(result);
  });

});

app.delete('/delete/:id', (req, res) => {

  const sql = "delete from student where id=?";
  const id=req.params.id;

  db.query(sql,[id],(err,result)=>
  {
    if(err)
    {
      return res.json({ Message: "Error inside delete module on root access.(inside server.js)" });
    }
    return res.json(result);
  });

});

app.listen(8081,()=>{
    console.log("Server Listening on port 8081");
});
