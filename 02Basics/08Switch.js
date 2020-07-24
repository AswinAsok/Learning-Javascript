var user = "testprep"

switch (user) {
    case "admin":
        console.log("You Get Full Access")
        // break;
    case "subadmin":
        console.log("gets access to delete and create couses")
        // break;
    case "testprep":
        console.log("get access to delete and create tests")
         //break;
    case "user":
        console.log("gets access to consume the content")
        // break;

    default:
        console.log("Trial User")
        // break;
}