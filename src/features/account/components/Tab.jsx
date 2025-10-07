/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

function Tab({content, path}){

    const nav = useNavigate();
    const [isCur, setCurrent] = useState();

    const location = useLocation();

    useEffect(()=>{
        try{
            var param = location.search.split("?")[1].split("=")[1];
            if(param === undefined || param === null){
                nav("/account?page=preview");
            }
            if(param === path){
                setCurrent(true);
            }else{
                setCurrent(false);
            }
        }catch(err){
            console.error(err);
            nav("/account?page=preview");
        }
    }, [location.search, path]);

    const click = function(){
        nav(`?page=${path}`);
    }

    return(
        <div className={`px-3 py-2 transition ease-in-out text-shadow-2xs rounded-t-xl ${isCur ? "color_base bg-[#e8e8e8] shadow-2xl scale-105" : "text-[#00000035]"}`} onClick={()=>click()}>
            <p className="text-[13px] sm:text-sm md:text-md lg:text-sm xl:text-md text-center">
                {content}
            </p>
        </div>
    );
}

export default Tab;