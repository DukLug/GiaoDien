
//#region JAVASCRIPT FUNDAMENTALS - PART 1
console.log("//======JAVASCRIPT FUNDAMENTALS - PART 1======//")
//coding challenge 1
function calculateBMI(mass, height){
    return mass/(height*height);
}
console.log('===Coding challenge 1===')
console.log('Marks weights ' + 78 + 'kg and is ' + 1.69 + 'm tall. BMI: ' + calculateBMI(78, 1.69).toFixed(2) + " || " + 'John weights ' + 92 + 'kg and is ' + 1.95 + 'm tall. BMI: ' + calculateBMI(92, 1.95).toFixed(2))
console.log('Marks weights ' + 95 + 'kg and is ' + 1.88 + 'm tall. BMI: ' + calculateBMI(95, 1.88).toFixed(2) + " || " + 'John weights ' + 85 + 'kg and is ' + 1.76 + 'm tall. BMI: ' + calculateBMI(85, 1.76).toFixed(2))

//coding challenge 2
function compareBMI(name1, bmi1, name2, bmi2){
    if(bmi1 <= bmi2){
        return name1 + "'s BMI (" + bmi1.toFixed(1) + ") is higher than " + name2 + "'s (" + bmi2.toFixed(1) + ")!"
    }
    return name2 + "'s BMI (" + bmi2.toFixed(1) + ") is higher than " + name1 + "'s (" + bmi1.toFixed(1) + ")!"
}
console.log('===Coding challenge 2===')
console.log(compareBMI('Mark', calculateBMI(78, 1.69), 'John', calculateBMI(92, 1.95)))
console.log(compareBMI('Mark', calculateBMI(95, 1.88), 'John', calculateBMI(85, 1.76)))

//coding challenge 3
function challenge3(team1Name, team1Scores, team2Name, team2Scores){
    const team1AverageScore = (team1Scores[0] + team1Scores[1] + team1Scores[2])/3
    const team2AverageScore = (team2Scores[0] + team2Scores[1] + team2Scores[2])/3

    if(team1AverageScore == team2AverageScore){
        if(availableTeam(team1Scores) && availableTeam(team2Scores)){
            return ("The trophy's result is draw");
        }
    }
    if(team1AverageScore > team2AverageScore){
        if(availableTeam(team1Scores)){
            return (team1Name + " won the trophy");
        }
    }
    if(availableTeam(team2Scores)){
        return (team2Name + " won the trophy");
    }
    return ("No one won the trophy");
    
}

function availableTeam(teamScores){
    if((teamScores[0] >= 0) || (teamScores[0] >= 0) || (teamScores[0] >= 0)){
        return true;
    }
    return false;
}

console.log("===Coding challenge 3===")
console.log("Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 || " + challenge3("Dolphins", [96, 108, 89], "Koalas", [88, 91, 110]));
console.log("Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 || " + challenge3("Dolphins", [97, 112, 101], "Koalas", [109, 95, 123]));
console.log("Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 || " + challenge3("Dolphins", [97, 112, 101], "Koalas", [109, 95, 106]));

//coding challenge 4
function billAndTipCalculator(bill){
    if(bill < 50 || bill > 300){
        console.log("The bill was " + bill + ", the tip was " + bill * 0.2 + ", and the total value " + bill*1.2);
        return;
    }
    console.log("The bill was " + bill + ", the tip was " + bill * 0.15 + ", and the total value " + bill*1.15);
    return;
}

console.log("===Coding challenge 4===")
billAndTipCalculator(275)
//#endregion

//#region JAVASCRIPT FUNDAMENTALS - PART 2
console.log("//======JAVASCRIPT FUNDAMENTALS - PART 2======//")

//coding challenge 1
function checkWinner(team1Name, team1Scores, team2Name, team2Scores){
    const team1AverageScore = (team1Scores[0] + team1Scores[1] + team1Scores[2])/3
    const team2AverageScore = (team2Scores[0] + team2Scores[1] + team2Scores[2])/3

    if(team1AverageScore == team2AverageScore){
        if(availableTeam(team1Scores) && availableTeam(team2Scores)){
            return ("The trophy's result is draw");
        }
    }
    if(team1AverageScore > team2AverageScore){
        if(availableTeam(team1Scores)){
            return (team1Name + " won the trophy");
        }
    }
    if(availableTeam(team2Scores)){
        return (team2Name + " won the trophy");
    }
    return ("No one won the trophy");
    
}

//#endregion