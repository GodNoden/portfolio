import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="shadow dark:bg-dark">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023 Noe Quezada
                    . All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        Build With
                        <span className="heart-icon">
                            ❤️</span>
                        by <Link href="https://github.com/GodNoden" className="mr-4 hover:underline md:mr-6" target={'_blank'}>
                            GodNoden
                        </Link>
                    </li>
                    <li>
                        <Link href="https://nextjs.org/" className="mr-4 hover:underline md:mr-6" target={'_blank'}>Next</Link>
                    </li>
                    <li>
                        <Link href="https://drive.google.com/file/d/1NNnzi44_cZFUeCIVqfJUDRGpg4S5lzwJ/view?usp=drive_link" className="hover:underline" target={'_blank'}>Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer