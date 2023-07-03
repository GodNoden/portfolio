import Image from 'next/image'
import React from 'react'
import Cards from './Cards'

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center '>Skills</h2>
            <Cards />
            {/* <div className='w-auto h-auto relative flex items-center justify-center rounded-xl border border-black'>
                Programming Languages:
                <Image src={"/images/js.png"} alt='JavaScript' width={100} height={100} className='grayscale hover:grayscale-0' /> JavaScript
                <Image src={"/images/java.png"} alt='Java' width={75} height={75} className='grayscale hover:grayscale-0' /> Java
                <Image src={"/images/python.png"} alt='Python' width={100} height={100} className='grayscale hover:grayscale-0' /> Python
                <Image src={"/images/php.png"} alt='PHP' width={100} height={100} className='grayscale hover:grayscale-0' /> PHP
            </div>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full'>
                Frameworks:
                <Image src={"/images/react.png"} alt='React' width={100} height={100} className='grayscale hover:grayscale-0' /> React
                <Image src={"/images/springboot.png"} alt='Spring Boot' width={100} height={100} className='grayscale hover:grayscale-0' /> Spring Boot
                <Image src={"/images/laravel.png"} alt='Laravel' width={100} height={100} className='grayscale hover:grayscale-0' /> Laravel
            </div>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full'>
                DB's:
                <Image src={"/images/mysql.png"} alt='MySQL' width={100} height={100} className='grayscale hover:grayscale-0' /> MySQL
                <Image src={"/images/mongodb1.png"} alt='MongoDB' width={100} height={100} className='grayscale hover:grayscale-0' /> MongoDB
            </div>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full'>
                Platforms:
                <Image src={"/images/ubuntu.png"} alt='Ubuntu/Linux' width={100} height={100} className='grayscale hover:grayscale-0' /> Ubuntu/Linux
                <Image src={"/images/windows.png"} alt='Windows' width={100} height={100} className='grayscale hover:grayscale-0' /> Windows
            </div> */}
        </>
    )
}

export default Skills