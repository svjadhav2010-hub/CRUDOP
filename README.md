--------------------------------------------------------------------------------------------------
STEP I: Create a folder named : 'CRUDOP'
--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------
STEP II: Create a React js project inside the root folder using following command:

~$ cd CRUDOP
~$ npx create-react-app frontend
--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------
STEP III: Create a folder named backend in the root folder
--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------
STEP IV: Go into the backend folder 
~$ cd backend
~backend $ npm init -y (to create package.json file)
~backend $ npm install express mysql cors nodemon (to install various required packages)
--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------
STEP V: Add or Update following code in package.json file

"start" : "nodemon server.js"
"type" : "module"
--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------
STEP VI: Write following code in server.js 

'''code
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
'''

~backend $ npm start 
--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------
STEP VII: Go to frontend folder and install following packages

~frontend $ npm install axios bootstrap react-router-dom
--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------
STEP VIII: Run server

~frontend $ npm start
--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------
STEP IX: Open mysql

~$ sudo mysql -u root -p
~$  mysql > show databases;
    mysql > create database studDB;
    mysql > use studDB;
    mysql > show tables;
    mysql > create table student(id int primary key auto_increment, name varchar(30), email varchar(30));
    mysql > desc student;
    mysql > select * from student;

--------------------------------------------------------------------------------------------------
