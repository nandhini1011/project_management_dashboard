//importing dependencies
const express = require("express");

//setting up express app
const app =express();

const bodyParser = require("body-parser");

//Define port
const PORT = 8080

const mongoose = require("mongoose");

const CONNECT_STR = "mongodb+srv://nandhiniponnusamy1999:fIsmyd1CRNyP6ucF@cluster0.tskng.mongodb.net/mdb_project_management_dashboard?retryWrites=true&w=majority&appName=Cluster0";

app.use((req, res, next) => {
    console.log(req.path , req.method);
    next();
})

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


//importing Router
const dashboardRoutes = require('./routes/dashboardRoutes.js');

app.use("/dashboard",dashboardRoutes);

app.listen(PORT, () => {
    console.log(`Dashboard => listening to ${PORT}`);
});

mongoose.connect(CONNECT_STR).then(() => {
    console.log("Hurry! Connected to database!!!");
}).catch((error) => {
    console.log(error);
});