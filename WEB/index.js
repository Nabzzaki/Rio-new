const express = require("express")
const exphbs = require("express-handlebars");
const app = express()
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("public"));
app.engine("hbs", exphbs.engine({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: "views/layouts"
}));
app.set("view engine", "hbs");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render("home")
})

const PORT = process.env.PORT || 1210;
app.listen(PORT, () => {
    console.log("==========================================")
    console.log(`localhost:${PORT}`)
    console.log("==========================================")
})

