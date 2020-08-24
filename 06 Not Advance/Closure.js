// function init(){
//     var firstname = "Aswin"
//     console.log("I am init");

//     function sayFirstname(){
//         console.log(firstname);
//     }
//     return sayFirstname;
// }

// var value = init();

// value();


function doAddition(x){
    return function(y){
        return x+y;
        }
}

var add5 = doAddition(4);
console.log(add5(5));

console.log(doAddition(8)(4));

