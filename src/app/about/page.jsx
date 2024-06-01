'use client'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../../public/NoeQuezada.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null)

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { ref, once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])


    return <span ref={ref}></span>
}

const AboutPage = () => {
    return (
        <div className='page-container'>
            <Head>
                <title>NQ | About Page</title>
                <meta name='description' content='any description' />
            </Head>
            <main className='flex flex-col items-center justify-center w-full'>
                <Layout className='pt-16 '>
                    <AnimatedText text="Passion Fuels Purpose!" className='mb-16' />
                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='flex flex-col items-start justify-start col-span-3 pl-20'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>
                                Biography
                            </h2>
                            <p className='font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, illo quidem? Odit maxime eius debitis totam quidem rerum saepe laudantium quasi nisi mollitia optio sapiente, vitae error repellendus ipsum iure facere necessitatibus accusantium repellat? Sunt, hic vero corruptimmodi, neque quae.</p>
                            <p className='my-4 font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, illo quidem? Odit maxime eius debitis totam quidem rerum saepe laudantium quasi nisi mollitia optio sapiente, vitae error repellendus ipsum iure facere necessitatibus accusantium repellat? Sunt, hic vero corrupti id quibusdam ab, totam dicta non atque, quod fuga ad ducimus. Sapiente autem quisquam neque hic laboriosam error </p>
                            <p className='font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, illo quidem? Odit maxime eius debitis totam quidem rerum saepe laudantium quasi nisi mollitia optio sapiente, vitae error repellendus ipsum iure facere necessitatibus accusantium repellat? Sunt, hic vero corrupti id quibusdam ab, totam dicta non atque, quod fuga ad ducimus. Sapiente autem quisquam neque hic laboriosam error cum voluptates ab, asperiores </p>
                        </div>
                        <div className='relative col-span-3 p-8 border-2 border-solid h-max rounded-2xl border-dark bg-light bottom-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                            <Image className='w-full h-auto rounded-2xl pb' src={profilePic} alt='Noe Quezada' />
                        </div>

                        <div className='flex flex-col items-end justify-between col-span-2 pb-8 pr-8'>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block font-bold text-7xl '>
                                    <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 '>satisfied clients</h2>
                            </div>



                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block font-bold text-7xl '>
                                    <AnimatedNumbers value={40} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 '>projects completed</h2>
                            </div>



                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block font-bold text-7xl '>
                                    <AnimatedNumbers value={1} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 '>Years of experience</h2>
                            </div>
                        </div>

                    </div>
                    <Skills />
                    <Experience />
                </Layout>
            </main>
        </div>
    )
}

export default AboutPage