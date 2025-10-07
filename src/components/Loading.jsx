/* eslint-disable react/prop-types */
function Loading({className, spinClassName}){
    return(
        <div className={`text-center ${className}`}>
            <div className={`w-5 h-5 border-4 border-dashed rounded-full animate-spin border-blue-500 mx-auto ${spinClassName}`}></div>
        </div>
    );
}

export default Loading;