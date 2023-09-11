

let password = document.getElementById('password');
let eyeIcon = document.getElementById('eyeIcon');

eyeIcon.onclick = function() {
    if(password.type == "password") {
        password.type = "text";
        eyeIcon.src = "images/eye-open.png";
    }
    else {
        password.type = "password";
        eyeIcon.src = "images/eye-close.png";
    }
} 