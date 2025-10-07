/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function Success({content, second}){

    const [visible, setVisible] = useState(true);
    
    useEffect(()=>{
        setTimeout(()=>{
            setVisible(false);
        }, second*1000);
    }, [])
    

    return(
        <>
            {
                visible && (
                    <>
                        <div
                            role="alert"
                            className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-green-200 dark:hover:bg-green-800 transform hover:scale-105"
                        >
                            <svg
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-5 w-5 flex-shrink-0 mr-2 text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                strokeWidth="2"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                            ></path>
                            </svg>
                            <div className="w-2"></div>
                            <p className="text-[13px] font-semibold">{content}</p>
                        </div>
                        <div className="h-1"></div>
                    </>
                )
            }
        </>
    );
}

export default Success;