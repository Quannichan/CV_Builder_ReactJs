/* eslint-disable react/prop-types */
export default function LinearContainer({className, components, from_to}){
    return(
    <div className={`bg-gradient-to-r ${from_to} ${className ? className : ""}`}>
        {components}
    </div>  
    );
}