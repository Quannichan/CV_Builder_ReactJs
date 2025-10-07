import { forwardRef } from "react";

/* eslint-disable react/prop-types */
const Popupbox = forwardRef(function Popupbox({title, message, childs}, ref){
    return(
        <div className="w-screen top-0 left-0 h-screen flex justify-center items-center backdrop-brightness-75 fixed z-[1000] hidden" ref={ref}>
            <div
            role="alert"
            className="w-full mx-auto max-w-lg rounded-lg border-stone bg-stone-100 p-4 sm:p-6 lg:p-8 shadow-2xl "
            >
                <div className="flex items-center gap-4">
                    <p className="font-medium sm:text-lg text-black">{title}</p>
                </div>

                <p className="mt-4 text-gray-600">
                    {message}
                </p>

                <div className="mt-6 sm:flex sm:gap-4">
                    {childs}
                </div>
            </div>
        </div>
    );
})

export default Popupbox;