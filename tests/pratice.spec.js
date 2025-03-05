// // const {chromium}=require('playwright');
// // const { test , expect } = require('playwright/test');
// // const playwrightConfig = require('./playwright.config');

 
// //     // test("launch the browser" , async ({})=>{

// //     //     const browser= chromium.launch()
// //     //    const page =(await browser).newPage();
// //     //    await page.goto("https://www.google.com/")
// //     //    console.log(await page.title());
// //     //    await (await browser).close();
    

// //     // })

// //     //take a screen Shot

// // //     await page.screenshot({path: 'screenshot.png'})
// // //     await page.screenshot({path : 'fullscreenshot.png' , fullpage: true})

// // //     this.bowserimage="defined xpath"
// // //     this.iagepath=" image of thepath.png"

// // //     async uploadimage()
// // //     if(!this.filepath) throw new error('filepath not found');
// // //     await page.setinputfile(this.bowserimage , this.iagepath);

// // //  PWDEBUG=1 npx playwright test for bedbugging..PWDEBUG

// // //  await page.pause() for pause the page where operation it is.

// // module.exports={
// // project :[

// // {name: 'chromium', use :{browsername : 'chromium'}}

// // ]
// // }


// // module.exports={

// //     projects:[

// //         {name: 'chromium' , use:{browsername: 'chromium'}}
// //     ]



// // }

// // // Launch the browser
// // const {chromium} = require('playwright')
// // const{test , expect} = require('@playwright/test')
// //  const browser= chromium.launch();
// //  const page= await page.browser.newpage();
// //  await page.goto("www.google.com");
// //  console.log("google chrome is launch")

// //  //take the screen shot
// //  class screenshot{
// //     constructor (page){;
// //     this.page();
// //     this.browseimage='xpath of browse button';
// //     this.pathofimage='image of path'
// // }

// // async browseimage(){
// // await this.page.click(this.browseimage , this.pathofimage)

// // }
// //  }

// //  const image= new screenshot(page);
// //  await image.browseimage();

// //  //Screenshot image
// //  await page.screenshot({path: screenshot.png})
// //  //screenshot of full page
// //  await page.screenshot({path: 'fullscreenshot.png' , fullpage: true})

// //  //inproject config : 
// //  module.exports={
// //   Project:[
    
// //        {name: 'chromium' , use: {browsername: 'chromium'}}

// //   ]
// // }


// // launch the browser chrome
// const{chromium}=require('playwright');
// const{test , expect}=require('@playwright/test');
// const { Interface } = require('readline');
// const browser=new chrome.launch();
// await page.browser.newpage();
// await page.goto("www.google.com");
// console.launch("google chrome is launch");

// // define the method and call this method in our code
// class callmethod{
//     constructor(page){
//         this.page=page;
//         this.browseimage="xpath of the browser image";
//         this.imagepath="image of the path"
//     }

//     async browserimage(){
//         await this.page.click(this.browserimage , this.imagepath)

//     }

//     async screenshot(){
//         await this.page.screenshot({path: 'screenshot.png'})
//         await this.page.screenshot({path:'fullscreenshot.png' , fullpage:true})
    

//   // set the viewport size
//      await page.setviewportsize({weight : 1536 , height: 864})  // this set your page to specific resolution
//      // we can define in the project config file
//         module.exports[{

//             project:[
//                 {name:'chromium' , use: {browsername:'chromium'}}
//             ]
//         }


//         ]
//     }
// }

//   // switching Iframe
//   await page.locator("xpath").locator("submitbutton").click();
  
        




  