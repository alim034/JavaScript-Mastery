// object literals 

const user = {
    username: "Alim",
    email: "alimmohammad034@gmail.com",
    phoneNo: "9370150313",

    getUserDetails: function(){
        // console.log("Get data from the Databases")
        // console.log(`UserName of the User is ${this.username}`);
        //console.log(this) // this keyword refer for the current context. to refer the data from the objects.
    }
}

// console.log(user.phoneNo)
// console.log(user.getUserDetails());


function user_detail(username, loginCount, isLoggedin){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin;

    return this
}

const userOne = new  user_detail("alim", 15, true);
 const userTwo = new user_detail("asma", 30, false);

console.log(userOne);
console.log(userTwo);
