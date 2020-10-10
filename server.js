const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");
const app = express();
const PORT = process.env.PORT || 8080;
//app middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//midleware for handelbars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//get rout to render the whats in the index file in main.handlbars file also able to inject values when you res.render
//rendering into index to show on main handlebars file
app.get("/",(req, res) =>{
    res.render("index", {name: "Wilmer Rivera Morter"});
});
// test rout/get rout to a web browser api page 
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