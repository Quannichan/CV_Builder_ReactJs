/* eslint-disable react/prop-types */
export default function QuestionBox({q, a}){
    return(
        <div className="text-lg bg-white px-6 py-7 w-full rounded-lg shadow-[0px_2px_5px_#0000001A] flex flex-col gap-2">
            <p className="font-semibold">{q}</p>
            {a ? <p className="text-[#4B5563]">{a}</p> : <></>}
        </div>
    )
}