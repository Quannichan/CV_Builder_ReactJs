import { IoDocumentText } from "react-icons/io5";
import { useNavigate } from "react-router";

// eslint-disable-next-line react/prop-types
function Logo({className, iconClassName, nameClassName, callBack}){

    return(
        <div onClick={()=>callBack()} className={`cursor-pointer flex items-center justify-center gap-2 ${className ? className : "border-2 border-white pl-3 py-1 rounded-lg"}`}>
            <IoDocumentText className={`${iconClassName ? iconClassName : "text-white bg_base p-2"} text-4xl rounded-lg`}/>
            <p className={`${nameClassName ? nameClassName : "text-black"} text-md font-bold`}>CV Builder</p>
        </div>
    );
}

export default Logo;