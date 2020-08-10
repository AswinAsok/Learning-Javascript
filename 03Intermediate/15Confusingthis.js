console.log(this);

var user = {
    firstname: "Aswin",
    coursecount: 0,
    getCourseCount: function(){
        console.log("LINE 7",this);
        function sayHello(){
            console.log("Hello");
            console.log("Line 10",this);
        }
        sayHello();
    }
    
};

user.getCourseCount();

// function sayHello(){
//     console.log("Hello");
// }

