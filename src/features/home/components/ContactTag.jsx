/* eslint-disable react/prop-types */
export default function ContactTag({icon, title, info}){
    return(
        <div className="flex flex-col items-center gap-3">
            {icon}
            <h1 className="text-md font-semibold">{title}</h1>
            <p className="text-center text-sm w-80 text-[#4B5563]">{info}</p>
        </div>
    );
}