import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database.");
});

// READ ALL (Home Page)
app.get('/read', (req, res) => {
  const sql = "SELECT * FROM student";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ Message: "Error fetching students." });
    return res.json(result);
  });
});

// READ record by ID
app.get('/read/:id', (req, res) => {
  const sql = "SELECT * FROM student WHERE id=?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ Message: "Error fetching student." });
    return res.json(result);
  });
});

// CREATE
app.post('/student', (req, res) => {
  const sql = "INSERT INTO student(`name`, `email`) VALUES(?)";
  const values = [req.body.name, req.body.email];
  db.query(sql, [values], (err, result) => {  //  [values] array is used to pass the values as a single parameter to the query
    if (err) return res.status(500).json({ Message: "Error inserting student." });
    return res.json(result);
  });
});

// UPDATE
app.put('/update/:id', (req, res) => {
  const sql = "UPDATE student SET `name`=?, `email`=? WHERE id=?";
  const id = req.params.id;
  const name = req.body.name;
  const email = req.body.email;
  db.query(sql, [name, email, id], (err, result) => {
    if (err) return res.status(500).json({ Message: "Error updating student." });
    return res.json(result);
  });
});

// DELETE
app.delete('/delete/:id', (req, res) => {
  const sql = "DELETE FROM student WHERE id=?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ Message: "Error deleting student." });
    return res.json(result);
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});