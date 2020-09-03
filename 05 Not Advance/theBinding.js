const aswin = {
    firstname : "Aswin",
    lastname : "Asok",
    role : "Admin",
    coursecount : 3,
    getInfo : function(){
        console.log(`
        Firstname is ${this.firstname}
        Lastname is ${this.firstname}
        His role is ${this.role}
        and he is studying is ${this.coursecount} course
        `);
    }
}

const dj = {
    fistname : "Rock",
    lastname : "dj",
    role : "Sub-admin",
    coursecount: 4,
}

// aswin.getInfo();
// dj.getInfo();

// var djinfo = aswin.getInfo.bind(dj); //Just a reference is given, We have to manually call it!!
// djinfo();

aswin.getInfo.call(dj); //No reference is give and automatically Called