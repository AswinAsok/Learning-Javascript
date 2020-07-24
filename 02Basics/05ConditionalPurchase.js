var is_Logged_In = true;
var is_email_vaerifed = false;
var card_info = true;

// if (is_Logged_In){
//     console.log("Logged In Success")
//     if(is_email_vaerifed){
//         console.log("Email Verify Success")
//         if(card_info){
//             console.log("You can Make a purschase")
//         }
//     }
// }

if (is_Logged_In && is_email_vaerifed && card_info){
    console.log("You Can Make a Purchase")
} else {
    console.log("You Are Not Allowed to do this")
}