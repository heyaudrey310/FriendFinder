var path = require("path");

module.exports = function(app)   {
    app.get("/survey", function(rec, res){
        res.sendFile(path.join(__dirname + "/../questions/survey.html"));
    });

    //go back to home page if no route matches
    app.use("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/../questions/home.html"));
    });
};

