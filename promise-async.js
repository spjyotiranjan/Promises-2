const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies


   // Progression 2: using setTimeout() - use 1000 units for time parameter


//Progression 3: Create a function to creat cookies and create an object of Promise.


    // Progression 4: adding two parameters and using setTimeout() - use 2000 units for time parameter

      
      // Progression 5: handling errors and adding new cookie to the list


      
      
      
//----------------------------------------------------------------------------------------------------------------------------------//

// Progression 1: create a function to get all the cookies
function getCookies() {
   // Progression 2: using setTimeout() -- use 1000 units for time parameter
   setTimeout(() => {
     let output = ""
     cookies.forEach((e)=>{
        output += `<li>${e.name}</li>`
    })
    document.body.innerHTML = output
  }, 1000);
}
getCookies()

//Progression 3: Create a function to creat cookies and create an object of Promise.
function createCookie(newCookie) {
   return new Promise((resolve,reject)=>{
    // Progression 4: adding two parameters and using setTimeout() -- use 2000 units for time parameter
    setTimeout(() => {
      // Progression 5: handling errors and adding new cookie to the list
      let initialLenOfCookie = cookies.length
      cookies.push(newCookie)
      
      if (cookies.length >initialLenOfCookie) {
         resolve("OK")
      } else {
         reject("There is no Cookie")
      }
   }, 2000);
})
}

// Progression 6: call function using `.then`
// createCookie(newCookie)
// .then((res)=> {
//    console.log(res);
//    getCookies()
// })
// .catch(err=> console.log(err))      


// Progression 7: creating a new async function

async function AsyncFunction(){
   try{
      let data = await createCookie(newCookie)
      if(data == "OK"){
         getCookies()
      }
   }catch(err){
      console.error(err);
   }
}

// calling the new async function
AsyncFunction()