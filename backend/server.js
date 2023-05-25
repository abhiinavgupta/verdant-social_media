const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
dotenv.config();


const app = express();
dotenv.config();

app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Set-Cookie: cross-site-cookie=whatever; SameSite=None; Secure");
    next();
  });

  const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
  }

app.use(cors(corsOptions));


app.use(fileUpload({
    useTempFiles: true,
  }));
  

readdirSync("./routes").map((r => app.use("/", require("./routes/" + r))));


app.get("/", function(req,res){
    res.send("hello");
});

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser : true,
})
.then(() => console.log("database connected."))
.catch((err) => console.log("error connection", err));


const PORT = process.env.PORT || 8000; 

app.listen(PORT, () => (
    console.log("server is listening")
));
 