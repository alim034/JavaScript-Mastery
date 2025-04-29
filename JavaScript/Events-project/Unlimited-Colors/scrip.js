//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let interval_id;
startchanging = function(){
    if(!interval_id) {
      interval_id =  setInterval(changeme,1000)
    }
  
    function changeme(){
      document.body.style.backgroundColor = randomColor()
    }
}

stopchanging = function(){
  clearInterval(interval_id)
  interval_id = null
}

document.querySelector('#start').addEventListener('click', startchanging);
document.querySelector('#stop').addEventListener('click', stopchanging);
