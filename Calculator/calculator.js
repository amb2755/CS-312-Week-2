const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
//This is sening a request to express through its node server
//The also it using bodyparse to use html
//The path request to handel the directory 
//The fs Command is to connect the file to js
const app = express();
//this command starts the exrpess 
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    console.log("Received request for /");
    res.sendFile(path.join(__dirname, "index.html"), function (err) {
        if (err) {
            console.error("Error sending file:", err);
        } else {
            console.log("File sent successfully");
        }
    });
});
//This Handles the route request
app.get("/bmicalculator", function (req, res) {
    console.log("Received request for /bmicalculator");
    const filePath = "C:/Users/abust/OneDrive/Transcribed Files/Desktop/CS-312 Summer Course/Calculator/bmiCalculator.html";
    console.log("Attempting to send file:", filePath);

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error("File does not exist:", filePath);
            res.status(404).send("File not found");
        } else {
            console.log("File exists:", filePath);
            res.sendFile(filePath, function (err) {
                if (err) {
                    console.error("Error sending file:", err);
                } else {
                    console.log("File sent successfully");
                }
            });
        }
    });
});
//Also Handles all the errors if files can not be 
app.post("/bmicalculator", (req, res) => {
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2; // Example calculation
    res.send("The result of the calculation is " + result);
});
//Here is where the port 3000 is being used to dislay the website
app.listen(3000, function () {
    console.log("Server is running on port 3000.");
});

