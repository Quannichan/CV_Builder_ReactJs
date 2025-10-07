import { useEffect, useRef } from "react";
import SplashLogo from "../components/SplashLogo";

function Splash(){

    const ref_splash = useRef();

    useEffect(()=>{
        spashScreen();
    },[])

    const spashScreen = function(){
        setTimeout(()=>{
            ref_splash.current.style.opacity = 0;
            setTimeout(()=>{
                ref_splash.current.style.display = "none";
            }, 300)
        }, 2000)
    }

    return(
        <div ref={ref_splash} className="z-[100000] fixed bg_base flex justify-center items-center h-screen w-screen transition-opacity ease-in-out opacity-100">
            <SplashLogo/>
        </div>
    );
}

export default Splash;