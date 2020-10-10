const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/api/config",(req, res) => {
    res.json({
        success:true,
    });
});

app.listen(PORT,() =>{
    console.log(`server is runinin on http://localhost:${PORT}`)
}
)
// const connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "morter706",
//   database: "",
// });