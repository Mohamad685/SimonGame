const red= document.querySelector('#red')
const blue= document.querySelector('#blue')
const yellow= document.querySelector('#yellow')
const green= document.querySelector('#green')
const colors=["red","green","yellow","blue"]
const redSound= document.querySelector('#sound1')
const blueSound= document.querySelector('#sound3')
const greenSound= document.querySelector('#sound2')
const yellowSound= document.querySelector('#sound4')
const colorSound = {
    red : redSound,
    blue: blueSound,
    yellow: yellowSound,
    green:greenSound,
}
const autoSequence=[]
const userSequence=[]
const BeginButton= document.querySelector("body")
const level=0
const bodyClick=document.getElementById('level-title')



//Functions section
// function to make an auto random sequence of colors
function autoSequencing(){
    const autoColor = colors[Math.floor(Math.random() * colors.length)]
    autoSequence.push(autoColor)
    console.log(autoSequence)
    var button = document.getElementById(autoColor)
    flashAddition(button, autoColor)
    playColorSound(autoColor)
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
}



bodyClick.addEventListener("click",function(){autoSequencing()})
red.addEventListener('click', userChoice)
blue.addEventListener('click', userChoice)
yellow.addEventListener('click', userChoice)
green.addEventListener('click', userChoice)








