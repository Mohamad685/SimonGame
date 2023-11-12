const red= document.querySelector('#red')
const blue= document.querySelector('#blue')
const yellow= document.querySelector('#yellow')
const green= document.querySelector('#green')

const colors=["red","green","yellow","blue"]

const redSound= document.querySelector('#sound1')
const blueSound= document.querySelector('#sound3')
const greenSound= document.querySelector('#sound2')
const yellowSound= document.querySelector('#sound4')
const headChange= document.getElementById("level-title")

const colorSound = {
    red : redSound,
    blue: blueSound,
    yellow: yellowSound,
    green:greenSound,
}

const autoSequence=[]
const userSequence=[]

let level=0
let gameBegin= false

// //Functions section
function userInputChecking(userlevel){
    if (userSequence[userSequence.length - 1] === autoSequence[userSequence.length - 1]) {
        if (userSequence.length === autoSequence.length) {
            console.log("User has completed their sequence")
            setTimeout(function() {
            autoSequencing()
            }, 1000)
            userSequence.length = 0        
    }
    }else{ 
        gameOver()
        restartGame()
    }   
}

function gameOver(){
    const overSound =document.querySelector('#sound5')
    overSound.play()
    document.getElementsByTagName('body')[0].classList.add('game-over')
    document.querySelector('h1').textContent ="Game Over, Press Any Key to Restart"
    setTimeout(function(){
        document.getElementsByTagName('body')[0].classList.remove('game-over')
    }, 300)
    document.querySelector('h1').textContent ="Game Over, Press Any Key to Restart"
}

// function to make an auto random sequence of colors
function autoSequencing(){
    level = level + 1
    const autoColor = colors[Math.floor(Math.random() * colors.length)]
    autoSequence.push(autoColor)
    console.log(autoSequence)
    var button = document.getElementById(autoColor)
    flashAddition(button, autoColor)
    playColorSound(autoColor)
    animatePress(autoColor)
    headChange.textContent = "level =" + level
    
}

// function to flash for the colored boxes
function flashAddition(button, autoColor){
    button.classList.add('flash')
    setTimeout(function () {
        button.classList.remove('flash')
      }, 300)
    }

// function to play sounds on colors
function playColorSound(autoColor) {
    const audio = colorSound[autoColor]
    audio.play()
    }

// function to take the clicked input from the user with its voice
function userChoice(e) {
    const userColor = e.target.id
    userSequence.push(userColor)
    console.log(userSequence) 
    playColorSound(userColor)
    animatePress(userColor)
    userInputChecking(userSequence)
}

function animatePress(color) {
    const button = document.getElementById(color)
        button.classList.add('pressed')
        setTimeout(function () {
            button.classList.remove('pressed')}, 100)
}

function restartGame(){
    autoSequence.length=0
    userSequence.length=0
    level=0
    gameBegin= false

}

document.addEventListener("click",function(e){
    if (!gameBegin){
        autoSequencing()
        gameBegin=true
        headChange.textContent = "level =" + level
    }
})


red.addEventListener('click', userChoice)
blue.addEventListener('click', userChoice)
yellow.addEventListener('click', userChoice)
green.addEventListener('click', userChoice)








