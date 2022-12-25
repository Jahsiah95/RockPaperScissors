let human = 0
let computer = 0
console.log("Game on!")

function match(){
    for(i = 1; i <= 5; i++){
        const n = Math.random()
        const prompt = prompt("Choose your weapon!").toUpperCase();
        const u = prompt.toUpperCase();
        if(u == "ROCK" || "PAPER" || "SCISSORS"){
            let output = cpuChoice(n, u)            
            if(output == "win"){
            console.log(human += 1, computer)
            } else if(output == "loss"){
            console.log(human, computer += 1)
            } else if(output == "tie"){
            console.log(human, computer)
            }
        } else{
            console.log("Invalid input. retry.")
            i -= 1
        }
    }
    if(i = 5 && human > computer){
        console.log("Congrats on the win!")
    } else if(i = 5 && human < computer){
        console.log("Better luck next time.")
    } else if(i = 5 && human == computer){
        console.log("Evenly matched! Good battle.")
    }
}

function cpuChoice(n, u){
    if(n < 1/3 && u == "ROCK"){
        console.log("Rock on! It's a tie!")
        return "tie"
    } else if(n < 1/3 && u == "PAPER"){
        console.log("It's a wrap! Good win!")
        return "win"
    } else if(n < 1/3 && u == "SCISSORS"){
        console.log("Ouch. You've been rocked!")
        return "loss"
    } else if(2/3 > n > 1/3 && u == "ROCK"){
        console.log("Damn. You've been wrapped!")
        return "loss"
    } else if(2/3 > n > 1/3 && u == "PAPER"){
        console.log("Oh sheets! It's a draw.")
        return "tie"
    } else if(2/3 > n > 1/3 && u == "SCISSORS"){
        console.log("I like ya cut g! Good win!")
        return "win"
    } else if(n > 2/3 && u == "ROCK"){
        console.log("Rock smash! Victory!")
        return "win"
    } else if(n > 2/3 && u == "PAPER"){
        console.log("Stitches! You've been cut!")
        return "loss"
    } else if(n > 2/3 && u == "SCISSORS"){
        console.log("Scissor sisters. Dance again!")
        return "tie"
    }
}


match()
