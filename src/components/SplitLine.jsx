/* eslint-disable react/prop-types */
function SplitLine({className}){
    return(
        <div className={`h-[1px] ${className ? className : "bg-[#0000001f] w-full"} `}></div>
    );
}

export default SplitLine;