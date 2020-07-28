;

var states = new Array("Kerala", "Tamilnadu", "Assam", "Delhi");
states[0] = "Mumbai";


var user = ["Aswin", "aswinasokofficial@gmail.com", 3, 34, true];
user.pop();
user.pop();
// console.log(user);

user.unshift("NEW VALUE");
// console.log(user);

user.shift()
// console.log(user);
console.log(user);
console.log(user.indexOf("newwe"));


console.log(Array.from(user[1]));