/* eslint-disable react/prop-types */
import { forwardRef } from "react";

const TagInfo = forwardRef(function TagInfo({bottom, title, content, click, className}, ref){
    return(
        <div className={`${className ? className : ""} ${bottom ? " pb-2 w-fit " : " w-fit "}`} ref={ref} onClick={click}>
            <h1 className="text-md text-[#0000006f]">{title}</h1>
            <p className="text-lg text-wrap w-60">{content}</p>
        </div>
    );
})

export default TagInfo;