import React from 'react'
import {TypeAnimation } from "react-type-animation"
import {FaTwitter, FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa"

const Main = () => {
  return (
    <div id="main"className='bg-gradient-to-r from-indigo-500 to-blue-500'>
        <img className="md:h-screen mx-auto" src="/public/bg.png" />
        <div className="w-full h-screen absolute top-0 left-0 bg-white/60">
            <div className='flex flex-col justify-center items-center h-screen'>
                <h1 className="text-lg font-black">Im Bright Londa</h1>
                <h2 className='text-lg font-black'> 
                    <TypeAnimation
                        sequence={[
                        'a Software Engineer', // Types 'One'
                        2000, // Waits 1s
                        'Next Js Wizard', // Deletes 'One' and types 'Two'
                        2000, // Waits 2s
                        'Bioinformatician',
                        2000
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '2rem' }}
                    />
                </h2>
                <div className="flex m-10 h-[30%] md:h-auto items-end">
                    <a href="https://twitter.com/babaspace_" target="_blank">
                        <FaTwitter size={20} className='m-2 cursor-pointer' />
                    </a>
                    <a href="https://github.com/cozyCodr" target="_blank">
                        <FaGithub size={20} className='m-2' cursor-pointer />
                    </a>
                    <a href="https://linkedin.com/in/bright-londa" target="_blank">
                        <FaLinkedinIn size={20} className='m-2' cursor-pointer />
                    </a>
                    <a href="https://instagram.com/babaspace_" target="_blank">
                        <FaInstagram size={20} className='m-2' cursor-pointer />
                    </a>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Main