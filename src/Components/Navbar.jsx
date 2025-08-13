import Logo from '../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    return ( 
        <section className='w-[15%]'>
            <div className='line flex flex-col items-center'>
            <h3 className='uppercase font-bold text-xl flex items-center justify-center'>crud operation</h3>
            <img src={Logo} className='w-[200px] h-[200px]'/>
            <h3 className='font-bold text-xl'>Admin</h3>
            <h4 className='text-orange-400'>admin</h4>
            <div className='relative flex items-center justify-center flex-col gap-2 w-[100%] pt-22 '>
            <div className='flex gap-4 w-[100%] p-2 cursor-pointer hover:bg-orange-100 ' onClick={() => navigate('/home')}>
            <i className="fa fa-home" style={{fontSize : '27px'}}></i>
                <h3>Home</h3>
            </div>
            <div className='flex gap-4 w-[100%] cursor-pointer p-2 hover:bg-orange-100 ' onClick={() => navigate('/products')}>
                <i className='far fa-list-alt' style={{fontSize : '27px'}}></i>

                <h3>Products</h3>
            </div>
            <div className='flex gap-4 w-[100%] p-2 cursor-pointer hover:bg-orange-100 ' onClick={() => navigate('/users')}>
                <i className='fas fa-users' style={{fontSize : '27px'}}></i>
                <h3>Users</h3>
            </div>
            <div className='flex  gap-4 w-[100%] pt-10 cursor-pointer text-orange-300'>
            <i class="fa fa-sign-out" style={{fontSize : '27px'}} ></i>
                <h3 className=''>LOGOUT</h3>
            </div>
            </div>

            </div>
        </section>
    )
}