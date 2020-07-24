// var email = false;
// var facebook = false;
// var goggle = false;

// if (email || facebook || goggle){
//     console.log("Login Successful")
// }else {
//     console.log("Access Denied")
// }

var email = false;
var google =true;
var facebook = false;
var check = false

if(email){
    console.log("Login Success")
    check = true;
}

if(google){
    console.log("Login Succes")
    check = true;
}

if(facebook){
    console.log("Login Success")
    check = true
}

if(! check){
    console.log("Access Denied")
}