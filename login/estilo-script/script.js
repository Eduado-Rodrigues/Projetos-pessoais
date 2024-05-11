document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log('Username: ' + username + ', Password: ' + password);
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Login realizado com sucesso!",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
            popup: 'swal2-center',
        }
    });
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;
    console.log('New Username: ' + newUsername + ', New Password: ' + newPassword);
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Registrado com sucesso!",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
            popup: 'swal2-center',
        }
    });
});

document.getElementById('signupLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginContainer').classList.add('fade-out');
    document.getElementById('signupContainer').classList.add('fade-in');
    setTimeout(function() {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('signupContainer').style.display = 'block';
        document.getElementById('loginContainer').classList.remove('fade-out');
        document.getElementById('signupContainer').classList.remove('fade-in');
    }, 500); // Tempo da animação em milissegundos
});

document.getElementById('loginLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signupContainer').classList.add('fade-out');
    document.getElementById('loginContainer').classList.add('fade-in');
    setTimeout(function() {
        document.getElementById('signupContainer').style.display = 'none';
        document.getElementById('loginContainer').style.display = 'block';
        document.getElementById('signupContainer').classList.remove('fade-out');
        document.getElementById('loginContainer').classList.remove('fade-in');
    }, 500); 
});

let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

document.getElementById('newPassword').addEventListener('input', function() {
    let password = this.value;
    let strength = 0;

    if (password.length > 3) {
        if (password.match(regExpWeak)) {
            strength += 1;
        }
        if (password.match(regExpMedium)) {
            strength += 1;
        }
        if (password.match(regExpStrong)) {
            strength += 1;
        }

        if (strength == 1) {
            document.getElementById('strength').innerText = 'Senha Fraca';
            document.getElementById('strength').style.color = 'red';
        } else if (strength == 2) {
            document.getElementById('strength').innerText = 'Senha Média';
            document.getElementById('strength').style.color = 'orange';
        } else {
            document.getElementById('strength').innerText = 'Senha Forte';
            document.getElementById('strength').style.color = 'green';
        }
    } else {
        document.getElementById('strength').innerText = 'Senha Muito Curta';
        document.getElementById('strength').style.color = 'gray';
    }
});

document.getElementById('forgotPasswordButton').addEventListener('click', function() {
    Swal.fire({
        position: "center",
        icon: "info",
        title: "Recuperação de senha",
        text: "Em breve você receberá um e-mail com instruções para redefinir sua senha.",
        showConfirmButton: false,
        timer: 3000
    });
});

const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

togglePassword.addEventListener('click', function() {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
    this.classList.toggle('fa-eye');
});