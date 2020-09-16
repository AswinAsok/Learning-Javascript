const User = require("./06classes")


const Aswin = new User("Aswin", "aswinasokofficial@lco.com")

Aswin.enrollCourse("Mern Bootcamp")
Aswin.enrollCourse("React Bootcamp")
console.log(Aswin.getCourseList());


const tom = new Sub