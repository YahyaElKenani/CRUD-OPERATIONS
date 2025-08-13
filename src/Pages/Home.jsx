import Navbar from "../Components/Navbar"

const Home = () => {
  
  return (
    <div className='flex p-10 h-[100vh] max-md:flex-col max-md:items-center max-md:justify-center max-md:h-[fit-content] max-md:gap-8'>
        { /*start home section one*/ }
      <Navbar />
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