$(document).ready(function() {

    var friendsData = require("./friends");

    $("#submitBtn").on("click", function(){
    	var q1 = $("#select1").val();
    	var q2 = $("#select2").val();
    	var q3 = $("#select3").val();
    	var q4 = $("#select4").val();
    	var q5 = $("#select5").val();
    	var q6 = $("#select6").val();
    	var q7 = $("#select7").val();
    	var q8 = $("#select8").val();
    	var q9 = $("#select9").val();
    	var q10 = $("#select10").val();
    	var userChoices = [];
    	userChoices.push(parseInt(q1), parseInt(q2), parseInt(q3), parseInt(q4), parseInt(q5), parseInt(q6), parseInt(q7), parseInt(q8), parseInt(q9),parseInt(q10));
    	console.log(answer);
    });

    var b = user.length * 4 + 1;
    //keep track of current user
    var current;

// iterate through friends array
for (var i = 0; i < friendsData.length; i++){
    // grab current friend score
    friendScore = friendsData[i].scores;
    // create our initial number
    var a = 0;
    // grab the individual numbers of friends and user
    for (var j = 0; j < friendScore; i++){
        var currentScore = friendScore[j];
        // compare current score to user's individual score
        var u = userChoices[j];
        //compare scores
        var diff = Math.abs(currentScore - u);
        //add up score diffs
        a += diff;
        //if current friend is closer to user
        // set him as our new best friend
        if (a < b){
            current = friendsData[i];
            b = a;
        }
    }
}

console.log(current);








});
