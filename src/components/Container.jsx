/* eslint-disable react/prop-types */
function Container({header, descript, content}){
    return(
        <div className="py-15 bg-transparent">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-semibold text-center">{header}</h1>
                <div className="h-4"></div>
                <p className="text-center text-[#4B5563] text-lg">{descript}</p>
            </div>
            <div className="h-13"></div>
            {content}
        </div>
    )
}

export default Container;