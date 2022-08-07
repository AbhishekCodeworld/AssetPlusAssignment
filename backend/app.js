const express = require('express')
var mongoose = require('mongoose');
const app = express()
const port = 8000
const cors = require('cors')
const postroutes = require("./routes/post/index.js");

const connect = async () => {
    try{
        await mongoose.connect("mongodb+srv://Abhishek1234:12345@cluster0.3sms48a.mongodb.net/ContentManagement?retryWrites=true&w=majority");
        console.log("Connected to MongoDB");
    }catch(error){
        throw error;
    }
};
//mongoose.connect();

app.use(cors());

//app.use(require("./routes"));
app.use(express.json())
app.use(postroutes);

app.listen(port, () => {
    connect();
    console.log(`Listening on port: ${port}`)
})

process.on('SIGINT', async function () {
    await mongoose.disconnect();
    process.exit(0)
});