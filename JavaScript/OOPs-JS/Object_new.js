function multiply5 (num){
    return num*5;
}
multiply5.power = 2;
// console.log(multiply5(5));
// console.log(multiply5.power);
// console.log(multiply5.prototype);

function createUser(username , score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
    console.log(this.score)
}

createUser.prototype.printme = function(){
    console.log(`The Price is ${this.score}`)
}


const chai = new createUser("chai", 10);
const tea = new  createUser("Tea", 20);

tea.printme();
chai.increment();