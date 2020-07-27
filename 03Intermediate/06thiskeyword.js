console.log(this);

var game = `"this" is called This keyword`

function sayName(){
    var kword = "this";
    console.log(kword);
    console.log(this);
}

sayName();