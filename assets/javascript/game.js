
var goalNumber = (Math.floor(Math.random() * 102) + 19);  
document.querySelector("#goalNumber").innerHTML = goalNumber;

var totalScore = 0;
var gamesWon = 0;
var gamesLost = 0;

var setValues = [];

var crystal1 = Math.floor(Math.random() * 12) + 1;
    setValues.push(crystal1);
    
var crystal2 = Math.floor(Math.random() * 12) + 1;
    setValues.push(crystal2);

var crystal3 = Math.floor(Math.random() * 12) + 1;
    setValues.push(crystal3);

var crystal4 = Math.floor(Math.random() * 12) + 1;
    setValues.push(crystal4);

console.log("Goal Number: ", goalNumber);
console.log("Crystal 1: ", crystal1);
console.log("Crystal 2: ", crystal2);
console.log("Crystal 3: ", crystal3);
console.log("Crystal 4: ", crystal4);
console.log("Set Values: ", setValues);
console.log("Total Score: ", totalScore);
console.log("Games Won: ", gamesWon);
console.log("Games Lost: ", gamesLost);

$(".crystal1").on("click", function(){
    totalScore += crystal1;
    updateScore();
})

$(".crystal2").on("click", function(){
    totalScore += crystal2;
    updateScore();
})

$(".crystal3").on("click", function(){
    totalScore += crystal3;
    updateScore();
})

$(".crystal4").on("click", function(){
    totalScore += crystal4;
    updateScore();
})

function updateScore (){
    document.querySelector("#goalNumber").innerHTML = goalNumber;
    document.querySelector("#totalScore").innerHTML = totalScore;

    if (totalScore === goalNumber && totalScore > 0 ) {
    gamesWon++;
    document.querySelector("#Wins").innerHTML = gamesWon;
    setTimeout(function(){
        alert("You win!");
        setTimeout(function(){
            goalNumber = (Math.floor(Math.random() * 102) + 19);
            setValues = [];
            crystal1 = Math.floor(Math.random() * 12) + 1;
            setValues.push(crystal1);
            crystal2 = Math.floor(Math.random() * 12) + 1;
            setValues.push(crystal2);
            crystal3 = Math.floor(Math.random() * 12) + 1;
            setValues.push(crystal3);
            crystal4 = Math.floor(Math.random() * 12) + 1;
            setValues.push(crystal4);  
            totalScore = 0;
            document.querySelector("#totalScore").innerHTML = totalScore;
            document.querySelector("#goalNumber").innerHTML = goalNumber;  
        }, 100)

    }, 100);
    
    
    } else if (totalScore > goalNumber) {
    gamesLost++;
    document.querySelector("#Losses").innerHTML = gamesLost;
    setTimeout(function(){
        alert("You lost. Ngo mercy.");
        setTimeout(function(){
            goalNumber = (Math.floor(Math.random() * 102) + 19);
            setValues = [];
            crystal1 = Math.floor(Math.random() * 12) + 1;
            setValues.push(crystal1);
            crystal2 = Math.floor(Math.random() * 12) + 1;
            setValues.push(crystal2);
            crystal3 = Math.floor(Math.random() * 12) + 1;
            setValues.push(crystal3);
            crystal4 = Math.floor(Math.random() * 12) + 1;
            setValues.push(crystal4);    
            totalScore = 0;  
            document.querySelector("#totalScore").innerHTML = totalScore;
            document.querySelector("#goalNumber").innerHTML = goalNumber;  
            }, 100)
        }, 100);
    }
}