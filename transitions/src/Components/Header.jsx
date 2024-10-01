import React from 'react'
import img from "../Components/pics/logo.avif"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Navbar '>

 {/*all navbar items plus logo*/}
      <div className='bg-black h-[80px] top-0 w-full fixed z-50'>
      <div className='logo justify-center items-center flex flex-row gap-52 m-3'>
      <div className='h-[50px] w-[50px] mt-1 '>
      <img src={img} alt="" />
      </div>
      <div className='text-white list-none flex flex-row justify-center items-center space-x-10 
      ml-[600px] font-serif text-[14px] hover:cursor-pointer'>
  
      <Link to = '/'><li>Home</li></Link>
      <Link to = '/Menu'><li>Menu</li></Link>
      <Link to  = '/About'><li>About</li></Link>
      <Link><li>Contact</li></Link>
      </div>
      </div>
      </div>

      
      
    </div>
  )
}

export default Header
