import axios from 'axios';

export const login = async (email, password) => {
  console.log('hello');
  try {
    console.log(email, password);
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
