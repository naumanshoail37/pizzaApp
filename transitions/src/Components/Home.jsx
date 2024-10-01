import React from 'react'
import img1 from '../Components/pics/bgpic.jpg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from './Button'


function Home() {
  return (
    <motion.div
    
    initial={{opacity:0 , width:0}}
    animate={{opacity:1 , width:'100%'}}
    transition={{duration:0.2}}
    exit={{opacity:0}}

    
    >
      {/*pizza picture on background*/}


      <div className='background picture '> 

      
      <img src={img1} alt="" className='h-[750px] w-full object-cover' />
      

      <div className='absolute top-0 right-[500px] w-full h-full flex flex-col justify-center text-start items-center'>

     <h1 className='text-white font-semibold text-[60px] font-serif'>Pedro's Pizzeria</h1>
     <h1 className='text-white font-normal text-[30px] font-serif ml-[-230px]' >Pizza to fit any taste</h1>

   <Button/>


      </div>

      </div>
    </motion.div>
  )
}

export default Home
