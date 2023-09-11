
  const scriptURL = 'https://script.google.com/macros/s/AKfycbymBL7Ler7gdnj3D7IZirSl8i8VkiVxz-Use5qJ74MeFFb82EmCg0smeF4T_WrozEe6/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg');
  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank You For Subscribing!";
        setTimeout(function(){
            msg.innerHTML = "";
        }, 3000);
        form.reset(); 
        })
      .catch(error => console.error('Error!', error.message))
  });