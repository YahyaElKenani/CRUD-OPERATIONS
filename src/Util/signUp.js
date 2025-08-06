import axios from "axios";
export async function signUp (newAccount) { 
    await axios.post('https://api.escuelajs.co/api/v1/users', {
        email: newAccount.email,
        name: newAccount.name,
        password: newAccount.password,
        role: 'customer',
        avatar: newAccount.avatar
    }).then((response) => console.log(response));
    return true;
}