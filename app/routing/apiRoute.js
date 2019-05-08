var path = require("path");
var friends = require("../../app/data/friends");
var express = require("express");
var app = express();


//routing the apiRoutes with app.get and app.post functions

module.exports = function (app) {
    app.get("/survey", function (rec, res) {
        res.sendFile(path.join(__dirname + "/../questions/survey.html"));
    });

    app.post('/api/friends', function (req, res) {
        //variable's for user's response
        var userData = req.body;
        //total difference starts at 0
        varDifference = 0;
        var totalDifference = [];
        //for loop the stored data for friends
        for (var i = 0; i < friends.length - 1; i++) {
            console.log(friends[i].name);
            varDifference = 0;
            //to loop through all questions and sum total
            for (var j = 0; j < 10; j++) {
                varDifference += Math.abs(friends[i].scores[j] - varFriends.scores[j]);
            }
            // each total difference, for each potential friend, is pushed into the varDifferences array 
            varDifferences.push(totalDifference);
            // total difference is reset back to zero
            totalDifference = 0;
            
        }
        // The push method use to save user's data to the database
        friends.push(userData);

        res.json(bestMatch);

    });
    
};

