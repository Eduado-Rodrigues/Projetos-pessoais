document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log('Username: ' + username + ', Password: ' + password);
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;
    console.log('New Username: ' + newUsername + ', New Password: ' + newPassword);
});

document.getElementById('signupLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signupContainer').style.display = 'block';
    document.getElementById('loginContainer').style.display = 'none';
});

document.getElementById('loginLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
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

document.getElementById('signupLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'block';
});