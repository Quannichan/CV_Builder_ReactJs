/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet";
import HeaderLayout from "../layouts/HomeLayouts_childs/HeaderLayout";
import HomeMainLayout from "../layouts/HomeLayouts_childs/HomeMainlayout";
import { useEffect, useRef } from "react";

function Home(){

    const layoutRef = useRef();
    
    useEffect(() => {
        setTimeout(() => {
            layoutRef.current.classList.remove("opacity-0");
        },10);
    }, [])
    

    return(
        <>
            <Helmet><title>CV Builder | Trang chủ</title></Helmet>
            <div className="w-screen opacity-0 transition-opacity ease-in-out" ref={layoutRef}>
                <HeaderLayout/>
                <HomeMainLayout/>
            </div>
        </>
    );
}

export default Home;