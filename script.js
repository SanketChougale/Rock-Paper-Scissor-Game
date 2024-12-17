let userScore = 0;
let compScore = 0;

 const choices = document.querySelectorAll(".choice")
 const score = document.querySelector("#you");
 const score1 = document.querySelector("#com");
 const msg = document.querySelector("#msg");


 choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice= choice.getAttribute("id");
        //console.log("Clicked choice :", userChoice)
        Game (userChoice);
    })
 })

 const generateComChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const userIndex = Math.floor(Math.random()*3);
    return options[userIndex];
 }

 const drawGame = (userChoice, comChoice) => {
    if(userChoice===comChoice)
    {
        msg.innerText = "Game was Draw!";
        msg.style.backgroundColor = "#081b31";

    }
 }

 const showResult = (result, userChoice, comChoice) => {
    if(result)
    {   
        userScore++;
        score.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        score1.innerText = compScore;
        msg.innerText = `You lose! ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
 }


 const Game = (userChoice)=> {
    const comChoice = generateComChoice();

    if(userChoice===comChoice)
    {
        drawGame();
    }else{
        let result = true;
        if(userChoice==="rock")
        {
            result = comChoice === "paper"? false : true;
        }else if(userChoice === "paper")
        {
            result = comChoice === "scissors"? false : true;
        }else{
            result = comChoice ==="rock"? false : true;
        }
        console.log(result);
        showResult (result, userChoice, comChoice);
    }
}
 