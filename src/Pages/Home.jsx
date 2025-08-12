
import Logo from '../assets/logo.jpg';


const Home = () => {

  return (
    <div className='flex p-10 h-[100vh] max-md:flex-col max-md:items-center max-md:justify-center max-md:h-[fit-content] max-md:gap-8'>
        { /*start home section one*/ }
<section className='w-[15%]'>
<div className='line flex flex-col items-center'>
<h3 className='uppercase font-bold text-xl flex items-center justify-center'>crud operation</h3>
<img src={Logo} className='w-[200px] h-[200px]'/>
<h3 className='font-bold text-xl'>Admin</h3>
<h4 className='text-orange-400'>admin</h4>
<div className='relative flex items-center justify-center flex-col gap-2 w-[100%] pt-22 '>
<div className='flex gap-4 w-[100%] p-2 cursor-pointer hover:bg-orange-100 '>
<i className="fa fa-home" style={{fontSize : '27px'}}></i>
    <h3>Home</h3>
</div>
<div className='flex gap-4 w-[100%] cursor-pointer p-2 hover:bg-orange-100 '>
     <i className='far fa-list-alt' style={{fontSize : '27px'}}></i>

    <h3>Products</h3>
</div>
<div className='flex gap-4 w-[100%] p-2 cursor-pointer hover:bg-orange-100 '>
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
                { /*end home section one*/ }
                 { /*start home section two*/ }
<section className='w-[85%] border-[1px] border-gray-100'>

<div className='h-[5vh] flex justify-end items-end'>
<input type='text' placeholder='   search in products...' className='border-[1px] border-gray-300 w-80 h-full' />
</div>
<div className='bg-gray-50 p-12 h-[90vh] grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-12'>
<div className='w-64 h-44 rounded-xl bg-sky-100 relative p-6 text-sky-300 '>
<i className='fas fa-th cursor-pointer' style={{fontSize : '27px'}}></i>
<h4 className='cursor-pointer'>Products</h4>
<span className='absolute bottom-0 right-0 p-4 text-black'>51</span>
</div>
<div className='w-64 h-44 rounded-xl bg-gray-100 relative p-6'>
  <i className='cursor-pointer fas fa-user-edit' style={{fontSize : '27px'}}></i>
<h4 className='cursor-pointer'>Users</h4>
<span className='absolute bottom-0 right-0 p-4'>6</span>
</div>
<div className='w-64 h-44 rounded-xl bg-orange-100 relative p-6 text-orange-500'>
  <i className='cursor-pointer fas fa-user-alt' style={{fontSize : '27px'}}></i>
<h4 className='cursor-pointer'>Customer</h4>
<span className='absolute bottom-0 right-0 p-4 text-black'>1</span>
</div>
<div className='w-64 h-44 rounded-xl bg-yellow-500 relative p-6 text-white'>
  <i className='cursor-pointer fas fa-id-badge' style={{fontSize : '27px'}}></i>
<h4 className='cursor-pointer'>Admin</h4>
<span className='absolute bottom-0 right-0 p-4 text-black'>1</span>
</div>
</div>
</section>
                { /*end home section two*/ }
    </div>
  )
}

export default Home