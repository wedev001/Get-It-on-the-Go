const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes')
const cookieParser = require('cookie-parser')
const path = require('path')

const app = express();
app.use(cors({
  origin : "https://get-it-on-the-go-a1ad.vercel.app",
  credentials : true
}));
app.use(express.json());
app.use("/api",router);
app.use(cookieParser());
app.use(express.static(path.join(__dirname + './mern_app/build')))
app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname + "./mern_app/build/index.html"))
})

const PORT = 3001 || process.env.PORT;

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Connect to DB");
        console.log("Server is Running");
      })
})
