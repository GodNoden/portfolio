import React from 'react'
import { CircularText } from './Icons.'
import Link from 'next/link'

const WebText = () => {
    return (
        <div className='fixed right-4 bottom-14 flex items-center justify-center overflow-hidden'>
            <div className='w-80 h-auto flex items-center justify-center relative'>
                <Link href="mailto:noe2000@live.com.mx" target={"_blank"}>
                    <div class="parent">
                        <img src="images/title.png" alt="" className="image1 animate-reverse-spin drop-shadow-sm" />
                        <img src="images/www.png" alt="" className="image2 animate-spin-slow drop-shadow-lg" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default WebText