/* eslint-disable react/prop-types */
function FeatureTag({icon, title, descript}){
    return(
        <div className="w-full flex justify-center items-start h-full">
            <div className="w-fit h-full flex flex-col items-start rounded-lg bg-[#F9FAFB] p-8 gap-4">
                {icon}
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-[#4B5563] text-md w-78">{descript}</p>
            </div>
        </div>

    );
}

export default FeatureTag;