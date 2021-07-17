// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const axios = require('axios');

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

axios.defaults.baseURL = NEXT_PUBLIC_API_URL;


export default axios;