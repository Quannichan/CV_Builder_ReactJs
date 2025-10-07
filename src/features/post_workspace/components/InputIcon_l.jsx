import FilterCheckBox from "../../../components/FilterCheckBox";

/* eslint-disable react/prop-types */
export default function InputIconL({icon: Icon, text, show, name, change, color, ico=null}){
    return(
        <span className="text-white flex items-center justify-start gap-2">
            {
                !show 
                ? 
                <del className="text-white opacity-50 flex items-center justify-start gap-2">
                    <div className="p-2 rounded-full outline-none bg-white"><Icon className={`${ico ? ico == "black" ? "text-black" : ico === "white" ? "text-white" : ico === "green" ? "text-green-700" : ico ? ico : "color_base" : "color_base"} text-xl`}/></div>
                    <input className={`text-xl text-left overflow-x-visible w-full ${color ? color === "black" ? "text-black" : color === "white" ? "text-white" : color ? color : "color_base" : "color_base"} `} name={name} onChange={(e)=>change.value(e)} value={text}/>
                </del> 
                : 
                <>
                    <div className="p-2 rounded-full bg-white"><Icon className={`${ico ? ico === "black" ? "text-black" : ico === "white" ? "text-white" : ico === "green" ? "text-green-700" : ico ? ico : "color_base" : "color_base"} text-xl`}/></div>
                    <input className={`text-xl text-left overflow-x-visible w-full ${color ? color === "black" ? "text-black" :  color === "white" ? "text-white" : color ? color : "color_base" : "color_base"} `} name={name} onChange={(e)=>change.value(e)} value={text}/>
                </>
            }
            <FilterCheckBox onClick={(e)=>change.show(e)} input_name={name} isChecked={show} />
        </span>
    )
}