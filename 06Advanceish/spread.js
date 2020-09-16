// var returnedValue = Math.max(2, 1, 5, 8, 9, 0)
// console.log(returnedValue);

// var myObj = {}

// Object.assign(myObj, {a:1, b:2, c:3}, {z:9, y:8,x: 7})
// console.log(myObj);

function sumOne(a ,b ){
    return a+b;
}

var myA = [5, 4]
// console.log(sumOne(...myA));//This is actually spread operator

function sumTwo(a,b, ...args){
    console.log(args);
    let sum = 0
    let multi = a*b
    for (const arg of args) {
        sum += arg
        
    }
    return [sum,multi]
}
console.log(sumTwo(2,3,1,1,1));