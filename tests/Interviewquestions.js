const { throwDeprecation } = require("process");

test("test the fundtionaloty of reverse string" , async({page})=>{

     function reversestr (str){

     return str.split('').reverse().join('');
     }
     console.log(reversestr("Hello"))
     


})

//reverse always used with an array and here with function name reversestr we pass with the paramenter 
//because when we use split then array Comes and after that only we use reverse.

//function reversestr (str)
// reversestr is a function name and str is a parameter and when we pass a value in a parameter then it become as an argument.