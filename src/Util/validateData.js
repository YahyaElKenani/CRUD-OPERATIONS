import axios from "axios";
import { showToast } from "./showToast";

export async function validateData({type, name, email, password, confirmPassword}) {
    if (type === 'SIGN_UP') {
        if (!name) {
            showToast('ERROR', 'Name is required');
            return false;
        }

        if (!email) {
            showToast('ERROR', 'Email is required');
            return false;
        }

        if (!password) {
            showToast('ERROR', 'Password is required');
            return false;
        }

        if (!confirmPassword) {
            showToast('ERROR', 'Please confirm your password');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast('ERROR', 'Invalid email format');
            return false;
        }

        if (password.length < 6) {
            showToast('ERROR', 'Password is too short');
            return false;
        }

        if (password !== confirmPassword) {
            showToast('ERROR', 'Password and confirmation do not match');
            return false;
        }

    return true;
    }
    if (type === 'LOG_IN') { 
        if (!email || !password) { 
            showToast('ERROR', "Email and Password are required");
            return false;
        }
        try { 
            await axios.post('https://api.escuelajs.co/api/v1/auth/login', {email, password});
            return true;
        } catch (error) { 
            console.warn(error);
            return false;
        }
    }
    return false; 
}
