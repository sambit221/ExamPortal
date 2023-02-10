const express = require("express");
require("./db/conn");
var path = require("path");
var bodyParser = require("body-parser");
const Student = require("./models/students");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/", (req,res)=>{
//     res.send("hey from the server");
// });

// Route to add a new user
// app.post("/studentsData", async (req,res)=>{
// const {username, emailId, phoneNo}=req.body;
// console.log(username);

// console.log(req.body);
// res.json({message: req.body});
// const user = new Student(req.body);
// console.log("got it")
// console.log(user)
// res.json({message: req.body});

// try {
//   await user.save();
//   res.send(user);
// } catch (e) {
//   res.status(500).send(e);
// }

// user.save().then(()=>{
//     res.status(201).send(user);
// }).catch((e)=>{
//     res.status(400).send(e);
// })
// res.send({ message: 'User added successfully' });
// });

app.post("/students", (req, res) => {
  console.log(req.body);
  // let x = JSON.parse(JSON.stringify(req.body));
  const name = req.body.name;
  const mail = req.body.email;
  const phone = req.body.phone;
  const student = new Student();
  student.name = name;
  student.email = mail;
  student.phone = phone;
  console.log("got it");
  console.log(student.save());
  student
    .save()
    .then(() => {
      //res.status(201).send(user);
      // return;
      res.send("Data received.");
      console.log("done");
    })
    .catch((e) => {
      console.error(e, "catch block");
      res.status(400).send(e);
      // return;
    });
});

// Route to retrieve all users
// app.get('/users', async (req, res) => {
//     const users = await userModel.find({});

//   try { res.send(users);}
//   catch (e) {res.status(500).send(e);}
// });

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server started on port ${port}`);
});
