   //You are given a string, whose size is stored in a variable with the name N. 
   //The string is stored in a variable with the name str
   //Print Yes, if the string is a palindrome, else print No


    let N = 5;
    let str = "malam"

     let bag="";
    
    
     for (i=str.length-1; i>=0; i--) {
        
        bag=bag+str[i];
     }
     
     if(bag == str) {

     console.log("Yes")
     }
     else {
     console.log("No")
     }
 