/*
Define a function that can answer the role of a user,\.
A user can be on the following roles:
admin - with all access
subadmin - with access to create/delete courses
testprep - with access to create/delete test
user - consume all content
other - trial user.

Input: getUserRole(name,role)
*/


var get_user_role = function (name,role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;

        case "subadmin":
            return `${name} is sub-admin with access to delete and create courses`;          
            
        case "testprep":
            return `${name} is the testprep with access to delele/create test`;

        case "user":
            return `${name} is a user to consume content`;
                
        default:
            return `${name} is a trial user`;
    }
}

console.log(get_user_role("Aswin","testprep")); 

var getRole = get_user_role("Raj","user");
console.log(getRole);
