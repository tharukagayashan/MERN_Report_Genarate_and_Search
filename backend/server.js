const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = 5000 || process.env.PORT;

const DB_URL = process.env.DB_URL; 

mongoose.connect(DB_URL,{

}).then(()=>{
    console.log("DB Connection is success!!!")
}).catch((err)=>{
    console.log(err);
})

let user = require("./routes/users.js");
app.use("/user",user);

app.listen(PORT,(()=>{
    console.log(`App runnng on port ${PORT}`);
}))