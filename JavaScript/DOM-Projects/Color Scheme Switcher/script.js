const buttons = document.querySelectorAll('.button')
const bd = document.querySelector('body')

buttons.forEach(function (button) {
  console.log(button)
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    /*
    if(e.target.id === 'grey'){
      bd.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white')
    {
      bd.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue')
    {
      bd.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow')
    {
      bd.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'red')
    {
      bd.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'green')
    {
      bd.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'orange')
    {
      bd.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'crimson')
    {
      bd.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'skyblue')
    {
      bd.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'aqua')
    {
      bd.style.backgroundColor = e.target.id
    }
      */

    switch (e.target.id) {
      case 'grey':
        bd.style.background = 'grey'
        break;
      case 'blueviolet':
        bd.style.background = 'blueviolet'
        break;
      case 'blue':
        bd.style.background = 'blue'
        break;
      case 'yellow':
        bd.style.background = 'yellow'
        break;
      case 'red':
        bd.style.background = 'red'
        break;
      case 'green':
        bd.style.background = 'green'
        break;
      case 'orange':
        bd.style.background = 'orange'
        break;
      case 'crimson':
        bd.style.background = 'crimson'
        break;
      case 'skyblue':
        bd.style.background = 'skyblue'
        break;
      case 'aqua':
        bd.style.background = 'aqua'
        break;
    
      default:
        break;
    }
  })
});