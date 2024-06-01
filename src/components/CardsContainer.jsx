import React, { useState } from 'react';

const CardsContainer = () => {
    const [activeTab, setActiveTab] = useState('languages');
    const [dropDown1, setDropDown1] = useState(false);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='justify-center flex pb-20'>
            <div className="w-[80rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-light dark:border-gray-700">
                <div className="sm:hidden">
                    <label htmlFor="tabs" className="sr-only">Select tab</label>
                    <select id="tabs" className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Languages</option>
                        <option>Frameworks</option>
                        <option>DB's</option>
                        <option>Platforms</option>
                    </select>
                </div>
                <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                    <li className="w-full">
                        <button id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true" className="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-light dark:hover:bg-white text-dark"
                            onClick={() => handleTabClick('languages')}>
                            Languages
                        </button>
                    </li>
                    <li className="w-full">
                        <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false" className="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-light dark:hover:bg-white text-dark"
                            onClick={() => handleTabClick('frameworks')}>
                            Frameworks
                        </button>
                    </li>
                    <li className="w-full">
                        <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false" className="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-light dark:hover:bg-white text-dark"
                            onClick={() => handleTabClick('dbs')}>
                            DB's
                        </button>
                    </li>
                    <li className="w-full">
                        <button id="faq-tab" data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="false" className="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-light dark:hover:bg-white text-dark"
                            onClick={() => handleTabClick('platforms')}>
                            Platforms
                        </button>
                    </li>
                </ul>

                <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
                    <div className={`${activeTab === 'languages' ? 'p-4 bg-white rounded-lg flex justify-evenly md:p-8 dark:bg-light' : 'hidden'}`} id="languages" role="tabpanel" aria-labelledby="languages-tab">

                        <div className="w-[12rem] relative inline-flex items-center justify-center p-1 rounded-lg overflow-hidden group bg-gradient-to-br from-pink-300 to-yellow-500 group-hover:from-yellow-300 group-hover:to-pink-300 hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-yellow-100 dark:focus:ring-yellow-400 ">
                            <div className="w-auto h-[17rem] justify-center flex flex-col px-10 py-5 items-center transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                <img className="w-auto h-auto mb-3 rounded-2xl shadow-lg grayscale hover:grayscale-0" src="/images/js.png" alt="JS" />
                                <h5 className="mb-1 text-xl font-medium text-white group-hover:text-dark">JavaScript</h5>
                            </div>
                        </div>

                        <div className="w-[12rem] relative inline-flex items-center justify-center p-1 rounded-lg overflow-hidden group bg-gradient-to-br from-orange-500 to-blue-900 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-blue-800">
                            <div className="w-auto h-[17rem] flex flex-col px-10 py-5 items-center transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                <img className="w-[10rem] h-[10rem] mb-3 rounded-2xl grayscale hover:grayscale-0" src="/images/java.png" alt="Java" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white group-hover:text-dark">Java</h5>
                            </div>
                        </div>

                        <div className="w-[12rem] relative inline-flex items-center justify-center p-1 rounded-lg overflow-hidden group bg-gradient-to-br from-yellow-300 to-sky-600 group-hover:from- group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <div className="w-auto h-[17rem] justify-center flex flex-col px-10 py-5 items-center transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                <img className="w-auto h-auto mb-3 grayscale hover:grayscale-0" src="/images/python.png" alt="Python" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white group-hover:text-dark">Python</h5>
                            </div>
                        </div>

                        <div className="w-[12rem] relative inline-flex items-center justify-center p-1 rounded-lg overflow-hidden group bg-gradient-to-br from-slate-300 via-indigo-400 to-slate-600 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <div className="w-auto h-[17rem] flex flex-col justify-center px-10 py-5 items-center transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                <img className="w-[800px] h-[900px]-auto mb-3 grayscale hover:grayscale-0" src="/images/php.png" alt="PHP" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white group-hover:text-dark">PHP</h5>
                            </div>
                        </div>

                    </div>

                    <div className={`${activeTab === 'frameworks' ? 'p-4 bg-white rounded-lg md:p-8 flex justify-evenly dark:bg-light' : 'hidden'}`} id="frameworks" role="tabpanel" aria-labelledby="frameworks-tab">

                        <div className="w-[12rem] relative inline-flex items-center justify-center p-1 rounded-lg overflow-hidden group bg-gradient-to-br from-lime-900 to-gray-700 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <div className="w-auto h-[17rem] flex flex-col justify-center px-10 py-5 items-center transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                <img className="w-[800px] h-[900px]-auto mb-3 grayscale hover:grayscale-0" src="/images/springboot.png" alt="Spring Boot" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center group-hover:text-dark">Spring Boot</h5>
                            </div>
                        </div>

                        <div className="w-[12rem] relative inline-flex items-center justify-center p-1 rounded-lg overflow-hidden group bg-gradient-to-br from-sky-700 to-sky-950 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <div className="w-auto h-[17rem] flex flex-col justify-center px-10 py-5 items-center transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                <img className="w-[1920px] h-[1080px]-auto mb-3 grayscale hover:grayscale-0" src="/images/react.png" alt="React" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white group-hover:text-dark">React</h5>
                            </div>
                        </div>

                        <div className="w-[12rem] relative inline-flex items-center justify-center p-1 rounded-lg overflow-hidden group bg-gradient-to-br from-red-600 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <div className="w-auto h-[17rem] flex flex-col justify-center px-10 py-5 items-center transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                <img className="w-[1920px] h-[1080px]-auto mb-3 grayscale hover:grayscale-0" src="/images/laravel.png" alt="Laravel" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white group-hover:text-dark">Laravel</h5>
                            </div>
                        </div>

                        <div className="w-[12rem] relative inline-flex items-center justify-center p-1 rounded-lg overflow-hidden group bg-gradient-to-br from-green-600 to-gray-700 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <div className="w-auto h-[17rem] flex flex-col justify-center px-10 py-5 items-center transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                <img className="w-[1920px] h-[1080px]-auto mb-3 grayscale hover:grayscale-0" src="/images/expressjs1.png" alt="ExpressJS" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white group-hover:text-dark">ExpressJS</h5>
                            </div>
                        </div>


                    </div>
                    <div className={`${activeTab === 'dbs' ? 'p-4 bg-white rounded-lg md:p-8 dark:bg-light flex justify-evenly' : 'hidden'}`} id="dbs" role="tabpanel" aria-labelledby="dbs-tab">

                        <div className="w-[12rem] relative inline-flex items-center justify-center p-1 rounded-lg overflow-hidden group bg-gradient-to-br from-blue-900 to-yellow-700 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <div className="w-auto h-[17rem] flex flex-col justify-center px-10 py-5 items-center transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                <img className="w-[1920px] h-[1080px]-auto mb-3 grayscale hover:grayscale-0" src="/images/mysql.png" alt="mysql" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white group-hover:text-dark">MySQL</h5>
                            </div>
                        </div>

                        <div className="w-[12rem] relative inline-flex items-center justify-center p-1 rounded-lg overflow-hidden group bg-gradient-to-br from-green-700 to-gray-700 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <div className="w-auto h-[17rem] flex flex-col justify-center px-10 py-5 items-center transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                <img className="w-[1920px] h-[1080px]-auto mb-3 grayscale hover:grayscale-0" src="/images/mongodb1.png" alt="mongodb" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white group-hover:text-dark">MongoDB</h5>
                            </div>
                        </div>

                    </div>

                    <div className={`${activeTab === 'platforms' ? 'p-4 bg-white rounded-lg md:p-8 dark:bg-light flex justify-evenly' : 'hidden'}`} id="platforms" role="tabpanel" aria-labelledby="platforms-tab">

                        <div className="w-[12rem] relative inline-flex items-center justify-center p-1 rounded-lg overflow-hidden group bg-gradient-to-br from-orange-800 to-gray-700 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <div className="w-auto h-[17rem] flex flex-col justify-center px-10 py-5 items-center transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                <img className="w-[1920px] h-[1080px]-auto mb-3 grayscale hover:grayscale-0" src="/images/Ubuntu2004LTS.png" alt="ubuntu" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center group-hover:text-dark">Ubuntu Linux</h5>
                            </div>
                        </div>

                        <div className="w-[12rem] relative inline-flex items-center justify-center p-1 rounded-lg overflow-hidden group bg-gradient-to-br from-blue-900 to-gray-700 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <div className="w-auto h-[17rem] flex flex-col justify-center px-10 py-5 items-center transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                <img className="w-[1920px] h-[1080px]-auto mb-3 grayscale hover:grayscale-0" src="/images/windows.png" alt="windows" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white group-hover:text-dark">Windows</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default CardsContainer

