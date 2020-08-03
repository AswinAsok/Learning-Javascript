var user = {
    firstName : "Aswin",
    lastName : "Asok",
    role : "Student",
    age : 17,
    hasFacebook : true
}

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.age);
user.age +=1;
console.log(user.age);

console.table(user)