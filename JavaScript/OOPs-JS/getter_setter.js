class user{
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    get password(){
        return `${this._password}ghghg`;
    }
    set password( value){
        this._password  = value
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email( value){
        this._email  = value
    }

    get username(){
        return this._username.toUpperCase();
    }
    set username( value){
        this._username  = value
    }
}

const alim = new user("alim", "s@yaho.ai", "alimer");
console.log(alim.password);
console.log(alim.username);
console.log(alim.email);