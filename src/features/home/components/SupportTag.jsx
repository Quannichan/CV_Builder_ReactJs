/* eslint-disable react/prop-types */
import Button from "../../../components/Button";

export default function SupportTag({icon, title, descript, text, btnColor, bg}) {
    return(
        <div className={`flex flex-col items-center gap-4 ${bg} rounded-xl py-7 px-8`}>
            {icon}
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="text-center w-80 text-[#4B5563]">{descript}</p>
            <Button
                className={`px-8 py-3 text-md rounded-md text-white ${btnColor}`}
                childs={text}
            />
        </div>
    );
}