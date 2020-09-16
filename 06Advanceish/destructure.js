// const user = ["Aswin", 1 ,"user"]
// var role = user[2];
// var name = user[0];

// var[name, coursecount, role] = ["Aswin", 1, "user"]

// console.log(role);

const MyUser = {
    name: "Aswin",
    courseCount: 1,
    role: "User"
}

console.log(MyUser.courseCount);

const {name, courseCount, role} = MyUser;
console.log(courseCount);