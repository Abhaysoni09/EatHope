const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
const path=require("path");

const app = express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',   
  password: 'Soni@12345',
  database: 'EatHope'
});
app.post('/submit-Food', (req, res) => {
  const { name, contact, email, address, food_type, quantity, pickup_time, Additional_notes } = req.body;

  const sql = 'INSERT INTO FoodDonations (name, contact, email, address, food_type, quantity, pickup_time, Additional_notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [name, contact, email, address, food_type, quantity, pickup_time, Additional_notes], (err, result) => {
    if(err) throw err;
    res.redirect('/ConfermationMessage.html');
  });
});
app.post('/signup',async(req,res)=>{
  const { username , email , password} = req.body;
  const hashedpassword = await bcrypt.hash(password,10);
  const sql = 'insert into Users(username,email,password) values(?,?,?)';
  db.query(sql, [username, email, hashedpassword], (err, result) => {
  if (err) {
    return res.send("<script>alert('Email Already Signed up!'); window.location.href='/index.html';</script>");
  }
  res.send("<script>alert('Signup Successful!'); window.location.href='/index.html';</script>");
});
});
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});


// let arr=[];
app.get("/Users",(req,res)=>{
  let q="SELECT * FROM Users";

    db.query(q,(err,result)=>{
      if(err) throw err;
// arr.push(result);
res.render("user.ejs",{arr});
    });
  

});