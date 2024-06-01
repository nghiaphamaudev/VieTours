import { showAlert } from './alert.js';

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
      showAlert(res.data.status, 'Đăng nhập thành công !');
      window.setTimeout(() => {
        location.assign('/about');
      }, 1500);
    }
  } catch (error) {
    showAlert(error.response.data.status, error.response.data.message);
  }
};

const signup = async (fullName, email, password, passwordConfirm) => {
  try {
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
    if (res.data.status === 'success') {
      showAlert(res.data.status, 'Đăng kí thành công !');
    }
  } catch (error) {
    showAlert(error.response.data.status, error.response.data.message);
  }
};

export { login, signup };
