var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;

setInterval(() => {
    if (count<1000){
        // if(count==999){
        //     followers.innerText = "Follwers on Instagram";
        // }
        count++;
        counter.innerText = count;
    }
    
},1);

setTimeout(() => {
    followers.innerText = "Follwers on Instagram"
},4000);