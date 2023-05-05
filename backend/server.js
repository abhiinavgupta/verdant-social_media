const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const { readdirSync } = require("fs");
const app = express();


app.use(express.json());
app.use(cors());

readdirSync("./routes").map((r => app.use("/", require("./routes/" + r))));


app.get("/", function(req,res){
    res.send("hello");
});

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser : true,
})
.then(() => console.log("database connected."))
.catch((err) => console.log("error connection", err));


const PORT = process.env.PORT || 8000; 

app.listen(PORT, () => (
    console.log("server is listening")
));
 