import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useRef } from 'react'
import profilePic from '../../../public/NoeQuezada.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

const AnimatedNumber = ({ value }) => {
    const ref = useRef(null)

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView({ref}); 

    return <span ref={ref}></span>
}

const AboutPage = () => {
    return (
        <div className='page-container'>
            <Head>
                <title>NQ | About Page</title>
                <meta name='description' content='any description' />
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16 '>
                    <AnimatedText text="Passion Fuels Purpose!" className='mb-16' />
                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start pl-20'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>
                                Biography
                            </h2>
                            <p className='font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, illo quidem? Odit maxime eius debitis totam quidem rerum saepe laudantium quasi nisi mollitia optio sapiente, vitae error repellendus ipsum iure facere necessitatibus accusantium repellat? Sunt, hic vero corruptimmodi, neque quae.</p>
                            <p className='font-medium my-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, illo quidem? Odit maxime eius debitis totam quidem rerum saepe laudantium quasi nisi mollitia optio sapiente, vitae error repellendus ipsum iure facere necessitatibus accusantium repellat? Sunt, hic vero corrupti id quibusdam ab, totam dicta non atque, quod fuga ad ducimus. Sapiente autem quisquam neque hic laboriosam error </p>
                            <p className='font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, illo quidem? Odit maxime eius debitis totam quidem rerum saepe laudantium quasi nisi mollitia optio sapiente, vitae error repellendus ipsum iure facere necessitatibus accusantium repellat? Sunt, hic vero corrupti id quibusdam ab, totam dicta non atque, quod fuga ad ducimus. Sapiente autem quisquam neque hic laboriosam error cum voluptates ab, asperiores </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 bottom-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                            <Image className='w-full h-auto rounded-2xl pb' src={profilePic} alt='Noe Quezada' />
                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-between pr-8 pb-8'>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold '>
                                    50+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 '>satisfied clients</h2>
                            </div>



                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold '>
                                    40+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 '>projects completed</h2>
                            </div>



                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold '>
                                    4+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 '>Years of experience</h2>
                            </div>
                        </div>

                    </div>
                </Layout>
            </main>
        </div>
    )
}

export default AboutPage