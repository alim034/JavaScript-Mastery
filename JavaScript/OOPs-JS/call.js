function setUserName(username){
    this.username = username
    console.log("Function Called Successfully!!!")
}


function createUser(username , email , phone){
      setUserName.call(this , username)

      this.email = email;
      this.phone = phone;
}

const alim = new createUser("alim", "somethin@gmail.com", "9370150313");
console.log(alim)