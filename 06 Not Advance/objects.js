var User = function(firstname, courseCount){
    this.firstname = firstname;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`CourseCount is : ${this.courseCount}`);
    };
};

var Aswin = new User("Aswin", 2)

console.log(Aswin);

var Sam = new User("Sam", 1)

console.log(Sam);