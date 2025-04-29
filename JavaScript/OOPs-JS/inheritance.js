class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
      console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username , emailid , password){
          super(username);
          this.emailid = emailid;
          this.password = password;
    }

    addcourse(){
        console.log(`The Course Added by ${this.username}`)
    }
}

const alim = new Teacher("Alim","some@gmail.com","arear");
// alim.logMe()
// alim.addcourse();

const asma = new User("Asma","asma@gmail.com","afddf");
// asma.logMe();
// asma.addcourse();

// console.log(alim instanceof Teacher);
console.log(User === Teacher);
