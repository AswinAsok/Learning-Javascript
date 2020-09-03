var User = {
    name: "",
    getUserName : function(){
        console.log(`User Name is  : ${this.name}`)
    },
}; 

var aswin = Object.create(User);
console.log(aswin);
aswin.name = "Aswin Asok"
aswin.getUserName();


var Sam = Object.create(User, {
    name: {value : "Sammy"},
    courseCount: {value : 3}
})
 

Sam.getUserName();