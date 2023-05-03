let logo = document.getElementById('loggo')
let lc = document.getElementsByClassName('logo')

const logoColor = () => {
   if (logo.style.color === 'gold') {
      logo.style.color = 'white';
   } else {
      logo.style.color = 'gold'
   }

};

logo.addEventListener("click", logoColor) 