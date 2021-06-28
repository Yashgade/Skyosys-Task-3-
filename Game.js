var userscore=0;
var computerscore=0;
const Userscore=document.getElementById("user-score");
const Computerscore=document.getElementById("computer-score");
const scoreboard_div=document.querySelector(".score-board");
const Result=document.querySelector(".result >p");
const Stone=document.getElementById("stone");
const Paper=document.getElementById("paper");
const Scissors=document.getElementById("scissors");

function getcomputerChoice(){
    const choices=['stone','paper','scissors'];
    randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber]
}
function win(userc,computerc){
    userscore++;
    Userscore.innerHTML=userscore;
    Computerscore.innerHTML=computerscore;
    Result.innerHTML=userc+"(User)" +" beats  " + computerc +"(Computer)"+".You Win! ";
    document.getElementById(userc).classList.add('green-glow');
    setTimeout(function(){document.getElementById(userc).classList.remove('green-glow')},1000);
}
function lose(userc,computerc){
    computerscore++;
    Userscore.innerHTML=userscore;
    Computerscore.innerHTML=computerscore;
    Result.innerHTML=userc+"(User)" +" loses to " + computerc +"(Computer)"+".You Lost! ";
    document.getElementById(userc).classList.add('red-glow');
    setTimeout(function(){document.getElementById(userc).classList.remove('red-glow')},1000);
}
function draw(userc,computerc){
    Result.innerHTML=userc+"(User)" +" equals " + computerc +"(Computer)"+" .It's a Tie ! ";
    document.getElementById(userc).classList.add('gray-glow');
    setTimeout(function(){document.getElementById(userc).classList.remove('gray-glow')},1000);
}

function game(userChoice){
    const computerChoice=getcomputerChoice();
    switch (userChoice+computerChoice){
        case "stonescissors":
        case "paperstone":
        case "scissorspaper":
            win(userChoice,computerChoice);
        break;

        case "scissorsstone":
        case "stonepaper":
        case "paperscissors":
            lose(userChoice,computerChoice);
        break;

        case "stonestone":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice,computerChoice);
        break;
    }
}

function main(){
    Stone.addEventListener('click',function(){
        game("stone");
    })
    Paper.addEventListener('click',function(){
        game("paper");
    })
    Scissors.addEventListener('click',function(){
        game("scissors");
    })

}

main();