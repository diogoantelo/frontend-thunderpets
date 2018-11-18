import Http from './http';

const getToken = login => Http.get('/oauth/token', {
  params: {
    grant_type: 'password',
    username: login.email,
    password: login.password,
  },
  auth: {
    username: process.env.VUE_APP_CLIENT_ID,
    password: process.env.VUE_APP_SECRET_ID,
  },
});

export default {
  getToken,
};
