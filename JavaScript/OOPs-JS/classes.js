// classes

class user {
    constructor(username , email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    
    encryptedpassword(){
          return `${this.password}abc`
    }

    changeUsername(){
          return `${this.username.toUpperCase()}`
    }
          
}


const alim = new user("alim","alimmohammad034@gmail.com","12344555");

console.log(alim.encryptedpassword());
console.log(alim.changeUsername());



// behind the scene

function user(username, email, password){
  this.username = username;
  this.email = email;
  this.password = password
}

User.prototype.encryptPassword = function(){
  return `${this.password}abc`
}
User.prototype.changeUsername = function(){
  return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
