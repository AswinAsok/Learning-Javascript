var User = function(firstname, courseCount){
    this.firstname = firstname;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`CourseCount is : ${this.courseCount}`);
    };
};

User.prototype.getFirstname = function(){
    console.log(`Your Firstname is : ${this.firstname}`);
}

var Aswin = new User("Aswin", 2)
Aswin.getCourseCount();
Aswin.getFirstname();

// console.log(Aswin);

var Sam = new User("Sam", 1)
Sam.getCourseCount()
Sam.getFirstname();

// console.log(Sam);