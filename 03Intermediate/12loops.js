// for(i = 1;i <= 10;i++){
//     console.log(`Print ${i}`);
// }


const myStates = [
    "Kerala",
    "Tamilnadu",
    "Karnataka",
    1974,
    "Uttar Pradesh",
    "Delhi",
    "Assam"
];

for(i = 0 ; i < myStates.length ; i++){
    if(typeof myStates[i] !== "string") break;
    console.log(myStates[i]);
}
