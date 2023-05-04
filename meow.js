let logo = document.getElementById('loggo')
let lc = document.getElementsByClassName('logo')

const logoColor = () => {
 const randomColor = Math.floor(Math.random()*16777215).toString(16);
   logo.style.color = '#' + randomColor;

};

logo.addEventListener("click", logoColor) 
