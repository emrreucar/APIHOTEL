const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db = require("./config/db.js");

// diğer sayfalarda da kullanabilmek için
dotenv.config();

// yukarıda import ettiğimiz şeyleri kullanalım.
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());


// database'imizi import edelim.
db();


const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});
