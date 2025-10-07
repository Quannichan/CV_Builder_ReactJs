import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import common from "../../../utils/common";
import vnpayService from "../../../services/vnpay";
import Success from "../layouts/childs/Success";
import Error from "../layouts/childs/Error";
import Pending from "../layouts/childs/Pending";
import { Helmet } from "react-helmet";

export default function Payment(){

    const [searchParams] = useSearchParams();
    const [isLogin, setisLogin] = useState(false);
    const [idPayment, setIdPayment] = useState(null);
    const [payment, setPayment] = useState({});

    const nav = useNavigate();

    const getParam = () => {
        const orderId = searchParams.get("id");
        setIdPayment(orderId);
    }

    useEffect(()=>{
        checkisLogin();
    }, []);

    useEffect(()=>{
        if(idPayment){
            getPayment();
        }
    }, [idPayment])

    useEffect(()=>{
        if(isLogin){
            getParam();
        }
    }, [isLogin]);

    const getPayment = function(){
        vnpayService.get(
            idPayment,
            function(d){
                if(d.status === 2000){
                    if(d.type === "redirect"){
                        setPayment(d.data);
                        setTimeout(()=>{
                            window.location.href = d.data.url
                        }, 1000);
                    }else{
                        setPayment(d.data);
                    }
                }else{
                    nav("/");
                }
            },
            function(e){
                console.error(e);
                nav("/");
            }
        )
    }

    const checkisLogin = function(){
        common.check_login({
            suc: function(d){
                if(d.status === 2000){
                    setisLogin(true);
                }else{
                    common.ClearLocal();
                    nav("/");
                }
            },
            err : function(e){
                console.error(e);
                common.ClearLocal();
                nav("/");
            }
        })
    }

    return(
        <>
            <Helmet>
                <title>CV Builder | Thanh toán</title>
            </Helmet>
            {
                payment.status === 2 
                ?
                <Error payment={payment}/>
                :
                    payment.status === 1
                    ?
                    <Success payment={payment}/>
                    :
                    payment.status === 0
                    ?
                        <Pending/>
                    : 
                    <div className="w-full flex flex-col items-center justify-center h-150 px-5 gap-3">
                        <h1 className="text-2xl font-semibold">Giao dịch không tồn tại</h1>
                    </div>
            }
        </>
    );
}