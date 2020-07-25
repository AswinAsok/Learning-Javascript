 var name = "Aswin"; //Big Guy and his Candy.

 console.log("Line NUmber 3" , name);

 function sayName(){ //Middle Guy
     var name  = "Mr. A" //Middle Guy's Candy
     console.log("Line Number 7",name);

     sayNameTwo();
     function sayNameTwo(){ //Small Guy
        var name = "Mr.AA"; //Small Guy's Candy
         console.log("Line NUmber 12",name);
     }
 }


 
 sayName();