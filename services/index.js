const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    if (res.data.status === 'success') {
      window.setTimeout(() => {
        location.assign('/about');
      }, 1500);
    }
  } catch (error) {
    console.log(error);
  }
};

const signup = async (fullName, email, password, passwordConfirm) => {
  try {
    console.log(fullName, email, password, passwordConfirm);
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/v1/users/signup',
      data: {
        fullName,
        email,
        password,
        passwordConfirm,
      },
    });
    if (res.data.status === ' success') {
      console.log(res.data);
    }
  } catch (error) {
    console.log(error);
  }
};

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
