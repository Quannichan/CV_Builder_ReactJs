import { useEffect } from "react";
import $ from "jquery";

/* eslint-disable react/prop-types */
function AuthImages({image}) {
    var index = 0;

    useEffect(()=>{
        handleScroll();
    },[])

    function handleScroll() {
        setInterval(()=>{
            handleImageLoad();
        }, 5000)
    }

    function handleImageLoad() {
        if(index === 0){
            handleChangeImg(index, index+1);
        }else{
            handleChangeImg(index-1, index);
        }
        
        if(index === image.length){
            index = 0;
            handleChangeImg(image.length, index);
        }else{
            index+=1;
        }
    }

    function handleChangeImg(prv, nxt){
        $(`.${nxt}_img_auth`).removeClass("opacity-0");
        $(`.${nxt}_img_auth`).addClass("opacity-100");
        $(`.${prv}_img_auth`).removeClass("opacity-100");
        $(`.${prv}_img_auth`).addClass("opacity-0");
    }

    return (
        <div className="flex relative items-center h-screen w-full">
            {image.map((img, i) => (
                <img
                key={i}
                src={img}
                alt=""
                className={`absolute left-0 w-full h-screen rounded-lg border-0 shadow-lg object-cover transition-opacity ease-in-out duration-1000 ${i}_img_auth ${i === 0 ? "opacity-100" : "opacity-0"}` }
                />
            ))}
        </div>
    );
}

export default AuthImages;