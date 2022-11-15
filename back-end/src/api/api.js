import express from 'express';
import { login,register } from '../module/auth/auth.controller.js';
// import { classss } from '../Controllers/class.js';
const api = express.Router();
api.post('/auth/login',login);
api.post('/auth/register',register);
// api.put('/');
// api.delete('/');
export default api;