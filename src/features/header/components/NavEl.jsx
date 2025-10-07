/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function NavEl({pathName, name}){

    const [current, setCurrent] = useState(false);
    const nav = useNavigate();

    useEffect(()=>{
        try{
            const path = location.pathname;
            if(pathName === path){
                setCurrent(true);
            }else{
                setCurrent(false);
            }
        }catch(err){
            setCurrent(false);
           console.log(err);
        }
    }, [location.pathname]);

    return(
        <li className={`${current ? "color_base font-semibold" : "text-[#4b556388]"} text-sm cursor-pointer transition ease-in-out`} onClick={()=>nav(pathName)}>
            {name}
        </li>
    )
}

export default NavEl;