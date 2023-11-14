const colors=["red","green","yellow","blue"]

let autoSequence=[]
let userSequence=[]

let level=0
let gameBegin= false

// //Functions section


//function that checks the input of the user 
function userInputChecking(userlevel){
    if (userSequence[userSequence.length - 1] === autoSequence[userSequence.length - 1]) {  //checking the last input by user is right 
        if (userSequence.length === autoSequence.length) { //checking if the user inputed the same number of colors
            console.log("User has completed their sequence")
            setTimeout(function() {
            autoSequencing()
            }, 1000)
            userSequence.length = 0
    }
    }else{ 
        playColorSound('wrong')
        
        document.querySelector("h1").textContent="Game Over, Press Any Key to Restart"
        document.body.classList.add('game-over')
        setTimeout(function(){
            document.body.classList.remove('game-over')  
        }, 300)

        restartGame()
    }
}


//function to restart the game
function restartGame(){
    
    autoSequence=[]
    userSequence=[]
    level= 0
    gameBegin= false
}


// function to make an auto random sequence of colors
function autoSequencing(){
    
    level = level + 1
    let autoColor = colors[Math.floor(Math.random() * colors.length)]
    autoSequence.push(autoColor)
    console.log(autoSequence)
    let button = document.querySelector("#"+ autoColor)
    flashAddition(button, autoColor)
    playColorSound(autoColor)
    animatePress(autoColor)
    document.getElementById('level-title').textContent = "level =" + " " + level
    userSequence=[]
}

// function to flash for the colored boxes
function flashAddition(button, autoColor){
    button.classList.add('flash')
    setTimeout(function () {
        button.classList.remove('flash')
      }, 300)
    }

// function to play sounds on colors https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984
function playColorSound(sound) {
    let audio =new Audio("./sounds/"+ sound + ".mp3") 
    audio.play()
    }

// function to take the clicked input from the user with its voice
document.querySelectorAll('.btn').forEach(
    button => {
        button.addEventListener("click",  (e) =>{
            let userChoice= e.target.id
            userSequence.push(userChoice)
            playColorSound(userChoice)
            animatePress(userChoice)
            userInputChecking(userChoice)
        })
    
    })

//function to add animation to the color when pressed
    function animatePress(autoColor) {
    const button = document.querySelector("#" + autoColor)
        button.classList.add('pressed')
        setTimeout(function () {
            button.classList.remove('pressed')}, 100)
}



// Event listener to the keypress 
document.addEventListener("keydown",(e) => {
    if (!gameBegin){ 

        gameBegin=true
        autoSequencing()
    }
    else if(autoSequence.length === userSequence.length){
        
        autoSequencing()
    }
})