const { test, expect } = require('@playwright/test');
const { resolveObjectURL } = require('buffer');
const { listenerCount } = require('process');

// function isAnagram(Silent, Listen) {
//     // Convert both strings to lowercase and sort them
//     const str1 = Silent;
//     const str2 = Listen
//     return str1 === str2;
// }

//  test("test the anagram", async()=>{

//     if(isAnagram("Listen", "Silent")){

//     expect(await isAnagram("Silent", "Listen")).toBeTruthy();
//     console.log("It is an anagram");
//     }

//     else{
//         console.log("It is not an anagram");
//     }
//  })

//    
// Test the functionality of plaindrome

//   test("test the functionality of panildrome" , async({})=>{
   
//      const palindrome=("madam" , "hello")
//      return str===palindrome.split().reverse().join()

//      expect(str("madam").true());


//   })

// how do you reverse a string 

// test("test the fundtionaloty of reverse string" , async({page})=>{

//      function reversestr (str){

//      return str.split('').reverse().join('');
//      }
//      console.log(reversestr("Hello"))
     


// })

//Test the fundtionality without spiiting
// test("test the fundtionaloty of reverse string without splitting" , async({page})=>{
// function reversestr (stri){
//  let revsaved ="";

//   for(let i = stri.length-1; i >=0; i--){

//    revsaved +=stri[i]

    
//    }

//    return revsaved;
// }
//    console.log(reversestr("Hello"))
   


// })

// // Test the functionality in the correct order which is now in reverse order

// test("Test the functionality in the correct order which is now in reverse order" , async({page})=>{

// function correctreverse(stringcorrect){

//    let correctrevesefixed="";

//    for(let i=stringcorrect.length-1; i >=0; i--){

//       correctrevesefixed +=stringcorrect[i]
//    }

//       return correctrevesefixed;

// }
//   console.log(correctreverse("luhsnA"))
// })



// class Anshul{

//    constructor(page){
//       this.page=page;
//    };


   // Mthod for reverse string
//     correctreverse(string){

//     //  return string.split('').reverse().join('');
//       return string.split('').reverse().join('');

      

     

//    }
// }
//    test("test the functionality" , async({page})=>{

//       const rev=new Anshul(page);
//       const revresult=rev.correctreverse("luhsna");
//       console.log("result is"+ revresult)

//       expect(revresult).toBe("anshul")
   
//   });


  class Anargra{

  constructor(page){
   this.page=page;
  }


    rearrane(listen , silent){
     
      const str1=listen.toLowerCase().split('').sort().join();
      
      const str2=silent.toLowerCase().split('').sort().join();

      return str1===str2;


    }


  }

test("test the functionality" , async({page})=>{



const renameans=new Anargra(page);
const rensamesaved=renameans.rearrane("listen" , "silent");
console.log("both wards are anamgram"+rensamesaved);
expect(rensamesaved).toBe(true);


})


class palindrome{
 constructor(page){
   this.page=page;

 }

 plaindomeone(recer , madam){

   const pone=recer.split('').reverse().join('') && madam.split('').reverse().join('');
   //const ptwo=madam.split('').reverse().join('');

   const word1=recer && madam;
   


   return word1;
  
   

 }

}

test("test the functionality of plaindrom" , async({page})=>{

   const plaindomereverse=new palindrome(page);

   const plaindromesave=plaindomereverse.plaindomeone("recer" , "madam");
   
   console.log("wrords are plaindrome" + plaindromesave)
   expect(plaindromesave).toBeTruthy();
   
      
    

})

test("test the functionality of login", async({page})=>{

const yahoo= new yahoo(page);
const yahooopen= await page.yahoo("www.yahoo.com");
await page.goto("www.yahoo.com");
console.log("yahoo page open successfully" + yahooopen);
expect(yahooopen).tobeTruthy();
})



