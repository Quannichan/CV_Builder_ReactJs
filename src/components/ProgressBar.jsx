import { forwardRef } from "react";

const ProgressBar = forwardRef(function ProgressBar({}, ref){
    return(
        <div className="relative flex justify-start items-center w-full h-2 bg-[#c4c4c4] rounded-2xl">
            <div className="absolute bg_base w-[70%] h-2 rounded-2xl transition ease-in-out"></div>
        </div>
    );
})

export default ProgressBar;