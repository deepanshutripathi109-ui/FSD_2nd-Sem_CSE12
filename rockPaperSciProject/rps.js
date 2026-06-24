let userScore=0;
let compScore=0;
let userSorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}
const gameDraw=()=>{
    msg.innerText="Game was draw! Play again.";
    msg.style.backgroundColor="#081b31"
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userSorePara.innerText=userScore;
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`you lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame =(userChoice)=>{
   
    const compChoice=genCompChoice();
    

    if(userChoice===compChoice){
        gameDraw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper //scissor
            userWin=compChoice==="scissor"?true:false;
        }else if(userChoice==="paper"){
            //rock // scissor
            userWin=compChoice==="scissor"?false:true;
        }else{
            //rock //paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})