// for loop


for (let i = 0; i <= 10; i++) {
  const element = i;
  //console.log(element);
}

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (i === 5) {
    //console.log("5 is best Number");
  }
  //console.log(element);
}
  

// Nested Looping in for
for (let i = 1; i <= 10; i++) {
    //console.log(`The Outer loop value is ${i}`)
  for (let j = 1; j <= 10; j++) {
    //console.log(i + "*" + j + "=" + i*j);
  }
}


let my_arr = ["batman","superman","flash","thor"];
//console.log(my_arr.length);

for (let i = 0; i < my_arr.length; i++) {
  const element = my_arr[i];
  //console.log(element)
}

// break and continue

for (let i = 1; i < 20; i++) {
  if (i === 5) {
    //console.log("Dectected.....");
    break;
  }
  //console.log(`The Value of i is ${i}`)
}


for (let i = 1; i < 20; i++) {
  if (i === 5) {
    console.log("Dectected.....");
    continue;
  }
  console.log(`The Value of i is ${i}`)
}