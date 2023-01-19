import React from 'react'
import {TypeAnimation } from "react-type-animation"
import {FaTwitter, FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa"

const Main = () => {
    console.log(window.innerWidth)
  return (
    <div id="main" className='w-full'>
        <div className="homeImage md:h-screen h-screen md:mt-0  flex justify-center   ">
            {
                window.innerWidth < 575 ? 
                (
                    <div className="flex items-end">
                        <img className=" relative -left-[50%] w-[100%] h-auto" src="/bg.png"/>
                    </div>
                ) : ""
            }
        </div>
        
        <div className="homeText w-full h-screen absolute top-0 left-0 ">
            <div className='flex flex-col justify-start items-end h-screen mt-[20rem] md:mt-0 md:pt-[20rem] mx-5 md:mr-[5rem]'>
                <h1 className="text-lg md:text-[2.5rem] font-mono mr-3">My name is Bright</h1>
                <h2 className='text-lg md:pt-[2rem] md:-mr-4 font-mono'> 
                {
                    window.innerWidth > 768 ? (
                        <TypeAnimation
                        sequence={[
                        'Software Engineer', // Types 'One'
                        2000, // Waits 1s
                        'Next Js Wizard', // Deletes 'One' and types 'Two'
                        2000, // Waits 2s
                        'Bioinformatician',
                        2000
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{fontSize: "3.5rem", color: "#171515"}}
                    />
                    ) :
                    (<TypeAnimation
                        sequence={[
                        'Software Engineer', // Types 'One'
                        2000, // Waits 1s
                        'Next Js Wizard', // Deletes 'One' and types 'Two'
                        2000, // Waits 2s
                        'Bioinformatician',
                        2000
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{fontSize: "1.4rem", color: "#171515"}}
                    />)

                }
                    
                </h2>
                <div className="flex h-[20%] md:h-auto md:items-end md:mt-5 mt-[1rem]">
                    <a href="https://twitter.com/babaspace_" className='m-2' target="_blank">
                        <FaTwitter size={20} color="#1DA1F2" className='cursor-pointer' />
                    </a>
                    <a href="https://github.com/cozyCodr" className='m-2' target="_blank">
                        <FaGithub size={20} color="#171515" className='cursor-pointer' />
                    </a>
                    <a href="https://linkedin.com/in/bright-londa" className='m-2' target="_blank">
                        <FaLinkedinIn size={20} color="#0072b1" className='cursor-pointer' />
                    </a>
                    <a href="https://instagram.com/babaspace_" className='m-2' target="_blank">
                        <FaInstagram size={20} color="#d62976" className='cursor-pointer' />
                    </a>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Main