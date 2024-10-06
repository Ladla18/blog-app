const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser= require("body-parser")
const Device = require("./models/deviceSchema")
const cors = require("cors")
main().then(()=>{
    console.log("Mongo db connected")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/blog');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
app.use(cors())
app.use(bodyParser.json())
app.post('/devices', async (req, res) => {
    try {
      console.log(req.body)
      const newDevice = new Device(req.body);
      const savedDevice = await newDevice.save();
      res.status(201).json(savedDevice);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });



app.listen(5000,()=>{
    console.log(`Server is running on http://localhost:5000`)
})