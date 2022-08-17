//step:1
document.getElementById('btn-submit').addEventListener('click', function () {
    //step: 2 get the email address inside the email input field
    const emailfield = document.getElementById('user-email');
    const email = emailfield.value;
    //step: 3 get passwordss
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password);

    //step: 4 verify email and password
    if (email === 'jitopu@gmail.com' && password === '191-15-2753') {
        window.location.href = "bank.html";
    }
    else {
        alert('Sorry! Your password is wrong')
    }

})