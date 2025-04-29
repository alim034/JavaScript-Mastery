const accountID = 12233242;  // This value not changeble becase ,const keyword is used
let account_owner_name = "Mohammad Alim"; // This value Changble 
var account_owner_emailID = "alimmohammad034@gmail.com"; // This value Changble
account_balance = 1000000;   // This value Changble
let account_owner_state;


// accountID = 1545464 --> Not Possible , show an error becase of datatype or keyword

account_owner_name = "MD ALIM";
account_owner_emailID = "alimmohammad1917@gamil.com";
account_balance = 50000000;

console.log(accountID); // console.log --> used for printing the value or statements..
console.log(account_owner_name);
console.log(account_owner_emailID);
console.log(account_balance);

console.log(account_owner_state) /* When we only Declare the variable not assign
                                any value and try to print those variable then it printed "Undefined" because not defined type..*/



console.table([accountID, account_owner_name, 
                account_owner_emailID, account_balance]); // console.table ---> is used to print the multiple value at a time , no need to write console.log again and agian..


/* 
    Prefer Not to use the "var"
    because of issue in block scope and function scope....
*/

/* 
    Prefer to use the "const" and "let" maximum time
    const ---> used for constant value..
    let ---> used for all value , those value not constant in the program..
*/ 