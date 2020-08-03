
var user = {
    firstName : "Aswin",
    lastName : "Asok",
    role : "Student",
    age : 17,
    hasFacebook : true,
    courseList : [],
    buyCourse: function(courseName){
        this.courseList.push(courseName)
    },
    getcourseCount: function() {
        return `${this.firstName} is enrolled in a total of ${this.courseList.length} courses`
    },
    getinfo: function () {
        return `
         Name : ${this.firstName} 
         Role : ${this.role} 
         Age : ${this.age} 
         Logged In From Facebook : ${this.hasFacebook}
         No of Course Purchased : ${this.getcourseCount()}`
    }
};

var courseList = true;
user.buyCourse("Cyber Security");
user.buyCourse("Web Development");
user.buyCourse("Python Programming");
user.buyCourse("Machine Learning");
console.log(user.getinfo());

