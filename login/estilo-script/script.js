document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log('Email: ' + email + ', Password: ' + password);
    document.getElementById('email').value = ''; 
    document.getElementById('password').value = ''; 
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
    var newEmail = document.getElementById('newEmail').value;
    var newPassword = document.getElementById('newPassword').value;
    var strength = 0;

    if (newPassword.length > 3) {
        if (newPassword.match(regExpWeak)) {
            strength += 1;
        }
        if (newPassword.match(regExpMedium)) {
            strength += 1;
        }
        if (newPassword.match(regExpStrong)) {
            strength += 1;
        }

        if (strength >= 3) { 
            console.log('New Email: ' + newEmail + ', New Password: ' + newPassword);
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
            document.getElementById('newEmail').value = ''; 
            document.getElementById('newPassword').value = ''; 
        } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Senha fraca",
                text: "Por favor, escolha uma senha mais forte.",
                showConfirmButton: false,
                timer: 3000,
                customClass: {
                    popup: 'swal2-center',
                }
            });
        }
    } else {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Senha muito curta",
            text: "A senha deve ter pelo menos 4 caracteres.",
            showConfirmButton: false,
            timer: 3000,
            customClass: {
                popup: 'swal2-center',
            }
        });
    }
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
    }, 500);
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
    const type = password.getAttribute('type') === 'password' ? 'password' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
    this.classList.toggle('fa-eye');
});

const toggleNewPassword = document.getElementById('toggleNewPassword');
const newPassword = document.getElementById('newPassword');

toggleNewPassword.addEventListener('click', function() {
    const type = newPassword.getAttribute('type') === 'password' ? 'password' : 'password';
    newPassword.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
    this.classList.toggle('fa-eye');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log('Email: ' + email + ', Password: ' + password);
    simulateSuccessAnimation();
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var newEmail = document.getElementById('newEmail').value;
    var newPassword = document.getElementById('newPassword').value;
    console.log('New Email: ' + newEmail + ', New Password: ' + newPassword);
    checkPasswordStrength(); 
});

function simulateSuccessAnimation() {
    console.log('Simulating success animation...');
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
}

function checkPasswordStrength() {
    let password = document.getElementById('newPassword').value;
    let strength = 0;

    if (password.length > 3) {
        if (password.match(/[a-z]/)) {
            strength += 1;
        }
        if (password.match(/\d+/)) {
            strength += 1;
        }
        if (password.match(/[!@#$%^&*?_~\-()]/)) {
            strength += 1;
        }

        if (strength == 1) {
            console.log('Password is weak.');
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Senha fraca",
                text: "Por favor, escolha uma senha mais forte.",
                showConfirmButton: false,
                timer: 3000,
                customClass: {
                    popup: 'swal2-center',
                }
            });
        }
    }
}