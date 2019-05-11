var path = require("path");
var friends = require("../data/friends");
var express = require("express");
var app = express();


//routing the apiRoutes with app.get and app.post functions

module.exports = function(app) {
      app.get("/api/friends", function(req, res) {
      res.json(friends);
    });
  
    // API POST Requests
   
    app.post("/api/friends", function(req, res) {
      // loop through all of the options
      var bestMatch = {
        name: "",
        photo: "",
        friendDifference: Infinity
      };
  
      // results of user's survey questions and then PARSE.
      var userData = req.body;
      var userScores = userData.scores;
  
      //global variable
      var totalDifference;
  
      // for loop through all the friend possibilities in the database.
      for (var i = 0; i < friends.length; i++) {
        var currentFriend = friends[i];
        totalDifference = 0;
  
        console.log(currentFriend.name);
  
        // then for loop through all the scores of each friend
        for (var j = 0; j < currentFriend.scores.length; j++) {
          var currentFriendScore = currentFriend.scores[j];
          var currentUserScore = userScores[j];
  
          // then calculate the difference between the scores and sum them into the totalDifference
          totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
        }
  
        // If the sum of differences is less then the differences of the current "best match"
        if (totalDifference <= bestMatch.friendDifference) {
          // Reset the bestMatch to be the new friend.
          bestMatch.name = currentFriend.name;
          bestMatch.photo = currentFriend.photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
  
      //save the user's data to the database.
      friends.push(userData);
  
      // Return a JSON with the user's bestMatch. 
      res.json(bestMatch);
    });
  };
  