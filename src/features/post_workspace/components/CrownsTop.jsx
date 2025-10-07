/* eslint-disable react/prop-types */
import { FaCrown } from "react-icons/fa";

export default function CrownsTop({childs, Crowns=0, className}){

    const GenCrown = function(num){
        const crs = []
        for(var i = 0; i< num; i++){
            crs.push(<FaCrown className="text-yellow-500 text-[13px]" />);
        }
        return crs
    }

    return(
        <div className={`relative ${className} flex justify-center items-center`}>
            {childs}
            <div className="absolute top-[-10px] right-[-10px] bg-white p-1 rounded-full flex items-center justify-center gap-1 animate-pulse">
                {
                    GenCrown(Crowns).map((d)=>{
                        return d;
                    })
                }
            </div>
        </div>
    )
}