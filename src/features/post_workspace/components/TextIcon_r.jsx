/* eslint-disable react/prop-types */
export default function TextIconR({icon: Icon, text, show, isPNG, color, ico}){
    return(
        <>
            {
                show
                ?
                <span className="text-white flex items-center justify-start gap-2">
                    <div className={`text-xl ${color ? color === "black" ? "text-black" : color === "white" ? "text-white" : color ? color : "color_base" : "color_base"}`} style={{"marginBottom": isPNG ? "" : "22px"}}>{text}</div>
                    <p className="p-2 rounded-full bg-white"><Icon className={`${ico ? ico == "black" ? "text-black" : ico === "white" ? "text-white" : ico === "green" ? "text-green-700" : ico ? ico : "color_base" : "color_base"} text-xl`}/></p>
                </span>
                :
                <></>
            }
        </>
    )
}