import React from 'react'
import Header from './Header'
import img from '../Components/pics/Aboutpic.jpg'
import { motion } from 'framer-motion'

function About() {
    return (
        <motion.div className='Header'
        
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        
        
        >

            <Header />


            <div className='flex flex-col'>
                <img src={img} alt="" className='w-full h-[800px]' />
                <div className='text-center mt-10 items-center justify-center '>
                <h1 className='text-[50px] font-bold font-serif'>About Us</h1>
                <div className='items-center justify-center flex'>
                <h1 className='text-[14px] font-bold font-serif w-[800px]  '>Lorem ipsum dolor, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores distinctio adipisci aliquam est. Velit dolor similique debitis voluptate. Aliquid nemo expedita eligendi beatae suscipit ea nostrum quod rerum iure quasi. sit amet consectetur adipisicing elit. Consequuntur blanditiis laudantium id voluptatibus sed dolor corrupti repellat consequatur rerum alias, mollitia explicabo placeat aut natus quasi. Aut eos id fuga.</h1>
                </div>
                </div>
            </div>

        </motion.div>
    )
}

export default About
