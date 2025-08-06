import { useState } from "react";
import Input from "../Components/Input";
import { FaRegEye } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { validateData } from "../Util/validateData";
import { FaRegEyeSlash } from "react-icons/fa";
import { Bounce, ToastContainer } from "react-toastify";
import { showToast } from "../Util/showToast";
import { useNavigate } from "react-router-dom";
import { signUp } from "../Util/signUp";
import { motion as Motion } from 'framer-motion'
import { MdInsertPhoto } from "react-icons/md";
export default function Form({type}) { 
    const [newAccount, setNewAccount] = useState({name: '', email: 'admin@mail.com', password: 'admin123', avatar: ''});
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();
    const togglePassword = () => { 
        setShowPassword((prevState) => !prevState)
    }
    const toggleConfirmPassword = () => { 
        setShowConfirmPassword((prevState) => !prevState);
    }
    const handleSubmit = async (e) => { 
            e.preventDefault();
            if (type === 'SIGN_UP') { 
                const isValid = await validateData({
                    type: 'SIGN_UP', 
                    name: newAccount.name, 
                    email: newAccount.email, 
                    password: newAccount.password, 
                    confirmPassword: confirmPassword
                })
                if (isValid === true) { 
                    const success = await signUp(newAccount); 
                    if (success === true) { 
                        showToast("SUCCESS", "Signed up successfully");
                    } else { 
                        showToast("ERROR", "Sign up failed");
                    }
                }
            } else { 
                const isValid = await validateData({type: 'LOG_IN', name: '', email: newAccount.email, password: newAccount.password, confirmPassword: ''})
                if (isValid) { 
                    showToast("SUCCESS", "logged in");
                } else { 
                    showToast('ERROR', 'Error logging in');
                }
            }
            
    }
    return ( 
        <div className="form-container bg-gradient-to-r from-orange-400 to-orange-300 w-full flex flex-col gap-4">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
                />
            <Motion.form 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            onSubmit={handleSubmit} className="md:w-1/4 w-70 min-w-fit flex flex-col gap-5 md:px-8 md:py-16 p-4 shadow-xl rounded-2xl bg-gray-50">
                <div className="gap-2 flex flex-col">
                    <div className="font-bold text-center md:text-5xl text-2xl form-title border-s-6 border-s-amber-400">CRUD OPERATIONS</div>
                    <div className="md:text-2xl text-lg font-bold text-center mb-1">{type === 'SIGN_UP' ? 'SIGN UP' : 'LOG IN'}</div>
                </div> 
                { 
                    type === 'SIGN_UP' && 
                    <Input icon={<FaRegUserCircle className="text-2xl"/>} type={'text'} placeholder={'Enter your name'} 
                    onChange={(e) => setNewAccount((prevState) => ({...prevState, name: e.target.value}))} label={'Username'} initialValue={''}/>
                }
                <Input icon={<MdOutlineEmail className="text-2xl"/>} type={'email'} placeholder={'Enter your email'}
                onChange={(e) => setNewAccount((prevState) => ({...prevState, email: e.target.value}))} label={'Email'}
                initialValue={type === 'SIGN_UP' ? '' : newAccount.email}
                />
                <Input icon={
                    showPassword ? 
                    <FaRegEyeSlash onClick={togglePassword} />
                    :
                    <FaRegEye onClick={togglePassword} />
                }
                    
                type={showPassword ? 'text' : 'password'} placeholder={'Enter your password'} initialValue={type === 'SIGN_UP' ? '' : newAccount.password}
                onChange={(e) => setNewAccount((prevState) => ({...prevState, password: e.target.value}))} label={'Password'}/>
                {
                    type === 'SIGN_UP' && 
                    <Input icon={
                        showConfirmPassword ? 
                        <FaRegEyeSlash onClick={toggleConfirmPassword} />
                        :
                        <FaRegEye onClick={toggleConfirmPassword} />
                    }
                        
                    type={showConfirmPassword ? 'text' : 'password'} placeholder={'Confirm your password'}
                    onChange={(e) => setConfirmPassword(e.target.value)} label={'Confirm Password'} initialValue={''}/>
                }
                { 
                    type === 'SIGN_UP' &&
                    <Input icon={<MdInsertPhoto />} type={'text'} placeholder={'Enter avatar URL'} 
                    onChange={(e) => setNewAccount((prevState) => ({...prevState, avatar: e.target.value}))}
                    label={'Add avatar'} initialValue={''}
                    /> 
                }
                <button className="bg-orange-400 self-center w-full text-gray-50 text-lg h-10 rounded-lg hover:opacity-75 transition-all
                duration-300 cursor-pointer">{type === 'SIGN_UP' ? 'SIGN UP' : 'LOG IN'}</button>
            <p onClick={() => type === 'SIGN_UP' ? navigate('login') : navigate('/') }
            className="text-center underline text-orange-400 cursor-pointer hover:opacity-75">
                {type === 'SIGN_UP' ? 'Already have an account? Log in here' : 'Doesnt have an account? Sign up here'}
                </p>
            </Motion.form>
        </div>
    )
}