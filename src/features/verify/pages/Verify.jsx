import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Success from "../layouts/childs/Success";
import Caution from "../layouts/childs/Caution";
import { Helmet } from "react-helmet";
import Error from "../layouts/childs/Error";
import verifyService from "../services/verify";

export default function Payment(){

    const [searchParams] = useSearchParams();
    const [isVerify, setIsVerify] = useState(0);
    const divRef = useRef();

    const getParam = () => {
        const vt = `${searchParams.get("vt")}`;
        const id = `${searchParams.get("i")}`;
        const mail = `${searchParams.get("m")}`;
        if(vt && id && mail){
            if(isNaN(id)){
                setVisible(true);
                return
            }
            CheckVerify(id, mail, vt);
        }else{
            setVisible(true);
        }
    }

    const setVisible = function(show){
        if(show){divRef.current.classList.remove("hidden")}else{divRef.current.classList.add("hidden")}
    }

    useEffect(()=>{
        getParam();
    }, []);

    const CheckVerify = function(id, mail, veriTok){
        verifyService.Checkverify(
            id*1, mail, veriTok,
            function(d){
                if(d.status === 2000){
                    setIsVerify(1);
                }else{
                    setIsVerify(2);
                }
                setVisible(true);
            },
            function(e){
                console.log(e);
                setIsVerify(0);
                setVisible(true);
            }
        )
    }

    return(
        <>
            <Helmet>
                <title>CV Builder | Xác thực tài khoản</title>
            </Helmet>
            <div ref={divRef} className="hidden">
                {
                    isVerify == 0
                    ?
                    <Caution/>
                    :
                    isVerify == 1
                        ?
                        <Success/>
                        :
                        <Error/>
                }
            </div>
        </>
    );
}