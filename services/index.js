import { login, signup } from './authService.js';

const loginForm = document.querySelector('.form--login');
const signupForm = document.querySelector('.form--signup');

//Process Login

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}

//Process signUp
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    signup(fullName, email, password, passwordConfirm);
  });
}
