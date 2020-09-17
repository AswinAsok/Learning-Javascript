
//Variable
var isFlipped = false;
var firstCard = null 
var secondCard = null
let count = 0;
let score = 0

let cards = document.querySelectorAll('.card');
console.log(cards);

cards.forEach((card) => card.addEventListener("click" ,flip))

function flip(){

    if(firstCard==null || secondCard==null){

        this.classList.add("flip")
        if(!isFlipped){
            isFlipped = true;
            firstCard = this
        }
        else{
            secondCard = this
            console.log(firstCard);
            console.log(secondCard);
            checkIt()
        }
    }
        

}

function checkIt(){
    if (firstCard.dataset.image === secondCard.dataset.image)
        success()
    else
        fail()
}

function success(){
    firstCard.removeEventListener('click', flip)
    secondCard.removeEventListener('click', flip)
    count++;
    score+=5;
    document.getElementById("score").innerHTML = `Score: ${score}`;
    checkwinner();
    reset();
}

function fail(){
    setTimeout(()=>{
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")
        score-=1;
        document.getElementById("score").innerHTML = `Score: ${score}`;
        reset();
    },750)
}

 
function reset(){
    isFlipped = false;
    firstCard = null;
    secondCard = null
    filpping = false;
}


(function shuffle(){
    cards.forEach((card)=>{
        var index = Math.floor(Math.random()*16)
        card.style.order = index; 
    })
})();

function checkwinner(){
    if(count == 8){
        document.getElementById("score").innerHTML = `${name} is true a Genius`;
    }

}

const name = window.prompt("Name Please: ")