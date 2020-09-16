class User{

    constructor(name, email){
        this.name = name;
        this.email = email
    }
    courseList = [];

    getInfo(){
        return {
            name: this.name,
            email: this.email
        };
    }
    enrollCourse(name){
        this.courseList.push(name)
    }
    getCourseList(){
        return this.courseList
    }

    login(){
        return "You are logged in";
    }

}

class SubAdmin extends User{
    constructor(name,email){
        super(name,email);
    }
    getAdminInfo(){
        return "I am SubAdmin"
    }
    login(){
        return "Login for admin only"
    }
}

module.exports = User;

const tom = new SubAdmin("Tom","Tom@tom.com");

console.log(tom.getAdminInfo());
console.log(tom.login()); //Static method cannot be called via derived class
console.log(tom.getInfo());