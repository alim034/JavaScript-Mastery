// creating the promises
/*
const promises_one = new Promise(function(resolve, reject){
    // Do an asyn task
    // DB calls , crypography , networking
    setTimeout(function(){
      console.log('Aysnc Task is Completed!!')
      resolve()
    } , 1000)
})


// consumed promises
promises_one.then(function(){
  console.log("Promise Consumed!!!!!!!!")
})
*/

// we can also create a promise as following
/*
new Promise(function(resolve , reject){
  setTimeout(function(){
    console.log("Second Promises is created!!!!");
    resolve();
  },1000)
}).then(function(){
  console.log("Second Promise is Resolved!!!!!!")
})
*/


// data consumption , passing the parameters to the resolve and get data in the then function using the resolve and then.......

/*
const promises_three = new Promise(function(resolve , reject){
  setTimeout(function(){
    console.log("Third Promise is Created Successfully!!");
    resolve({username: "alim", phone: '9370150313'});
  },1000)
})

promises_three.then(function(user){
    console.log("Third promise resolved")
    console.log(user);
})
*/

/*
const promise_four = new Promise(function(resolve, reject){
  setTimeout(function(){
      let error = true;
      if(!error){
        resolve({username:'alim', password:'12345', email:'someting@gamil.com'})
      } else {
        reject('ERROR: Something Went Wrong!!')
      }
  },1000)
})

// chaining in promises...
promise_four.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("The Promise Either Completed or Failed")
})
*/    

/*
const promise_five = new Promise(function(resolve, reject){
  setTimeout(function(){
      let error = false;
      if(!error){
        resolve({username:'javascirpt', password:'12345', email:'someting@gamil.com'})
      } else {
        reject('ERROR: JS Went Wrong!!')
      }
  },1000)
})

// consumed the promises using the async method

async function cunsume_promise_five() {
      try {
        const response = await promise_five
        console.log(response);
      } catch (error) {
          console.log(error)
      }
}

cunsume_promise_five()
*/

/*
async function getAllUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data)
      } catch (error) {
          console.log("ERROR: " , error);
      }
}

getAllUsers()

*/

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
}) 
.catch((error) => {
    console.log(error)
})