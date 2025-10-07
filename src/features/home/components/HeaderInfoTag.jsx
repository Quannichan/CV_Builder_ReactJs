/* eslint-disable react/prop-types */
function HeaderInfoTag({content, desc}){
    return(
        <div className="flex flex-col items-center justify-start gap-0">
            <h3 className="font-semibold text-xl">{content}</h3>
            <p className="text-[#4B5563] text-[12px]">{desc}</p>
        </div>
    );
}

export default HeaderInfoTag;