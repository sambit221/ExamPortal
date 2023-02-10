const mongoose = require("mongoose");
var path = require("path");

// const DBURL="mongodb+srv://Sambit221:sambit@cluster0.qna13ih.mongodb.net/students?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
// const username = "Sambit221";
// const password = "sambit";
// const cluster = "cluster0";
// const dbname = "students";

mongoose.connect("mongodb+srv://Sambit221:sambit@cluster0.qna13ih.mongodb.net/students?retryWrites=true&w=majority", { // useCreatendex: true, useFindAndModify: false, 
   useNewUrlParser: true, 
   useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
});


// mongoose
//   .connect(
//     `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => {
//     console.log("successfully connected to database");
//   })
//   .catch((err) => {
//     console.log("couldn't connect to database " + err);
//   });

// mongodb+srv://Sambit221:<password>@cluster0.rwwnwd1.mongodb.net/test
// mongoose.connect("mongodb://localhost:27017/students-api", { // useCreatendex: true, useFindAndModify: false,
// mongoose.connect(DBURL, {
//    useNewUrlParser: true,
//    useUnifiedTopology: true
// })
// .then(()=>{
//     console.log("successfully connected to database");
// })
// .catch((err)=>{
//     console.log("couldn't connect to database "+err);
// });
