import { useEffect, useRef, useState } from "react";
import FilterCheckBox from "../../../../../components/FilterCheckBox";
import InputText from "../../../../../components/InputText";
import Button from "../../../../../components/Button";
import Logo from "../../../../../components/Logo";
import { useNavigate } from "react-router";
import authsv from "../../../services/auth";
import common from "../../../../../utils/common";
import { useDispatch } from "react-redux";
import { addNotification } from "../../../../../redux/NotificationRedux";
import Popupbox from "../../../../../components/PopUpBox";
import { useSearchParams } from "react-router-dom";

function LoginForm(){

    const [redirect, setRedirect] = useState(null);
    const [searchParams] = useSearchParams();
    const checkRedirect = function(){
        const redirect = searchParams.get("redirect");
        if(redirect && redirect !== "" && redirect !== null){
            setRedirect(redirect);
        }
    }

    useEffect(()=>{
        isLogin();
        checkRedirect();
    }, [])

    const showPassref = useRef();
    const passwordRef = useRef();
    const popupPassRef = useRef();

    const dispatch = useDispatch();

    const nav = useNavigate();

    const handleCheckboxChange = function() {
        if(showPassref.current && passwordRef.current){
            passwordRef.current.type = showPassref.current.checked ? "text" : "password";
        }
    }

    const isLogin = function(){
        common.check_login({
            suc: function(d){
                if(d.status === 2000){
                    nav("/account");
                }else{
                    common.ClearLocal();
                }
            },
            err : function(e){
                console.error(e);
                handleNoti("Đã xảy ra lỗi!", 2);
            }
        })
    }

    const handleNoti = (content, type) => {
        dispatch(addNotification({ content: content, second: 5, type: type}));
    };

    const [loginData, setLoginData] = useState({
        email_phone : "",
        pass        : "",
    });

    const [email, setEmail] = useState("")

    const handleChange = function(e){
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeEmail = function(e){
        setEmail(e.target.value);
    }

    // const handleSendOTP = function(){
    //     popupPassRef.current.classList.add("hidden");
    //     if(email && email !== "" && email !== null){
    //         if(!email.includes(".") || !email.includes("@")){
    //             popupPassRef.current.classList.add("hidden");
    //         }else{
    //             handleNoti("Vui lòng nhập đúng format email!", 2);
    //         }
    //     }else{
    //         handleNoti("Vui lòng nhập email của bạn!", 2);
    //     }
    // }

    const handleLogin = async function(){
        loginData.pass = common.Hash(loginData.pass);
        await authsv.login(
            loginData,
            function(d){
                if(d.status === 2000){
                    console.log(d);
                    common.Save_uD(d);
                    handleNoti("Đăng nhập thành công!", 1);
                    redirect ? nav("/"+redirect) : nav("/account");
                }else if(d.status === 2001 && d.msg){
                    handleNoti(d.msg, 2);
                }else if(d.status === 2002){
                    alert("Đã xảy ra lỗi, vui lòng thử lại sau!")
                }
            },
            function(e){
                console.log(e);
                alert("Đã xảy ra lỗi, vui lòng thử lại sau!");
            }
        )
    }

    return(
        <div className="p-10 rounded-2xl w-full h-full">
            <Popupbox
                ref={popupPassRef}
                title="Quên mật khẩu"
                message={
                    <div className="py-5">
                        <InputText onChange={(e)=>handleChangeEmail(e)} inputName="mail_change_pass" InputclassName="bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" LabelclassName="text-[#00000098] peer-placeholder-shown:text-[#00000072]" label="Nhập email" />
                    </div>
                }
                childs={
                    <div className="flex justify-between items-center w-full">
                        <Button
                            className="bg-[white] text-black border-2 border-[#0000006d] px-3 py-1 rounded-lg text-lg hover:bg-[#0000001b] transition-all duration-300"
                            childs="Hủy"
                            click={()=>{
                                popupPassRef.current.classList.add("hidden")
                            }}
                        />
                        <Button
                            className="bg_base text-white px-3 py-1 rounded-lg text-lg hover:bg-[#00000082] transition-all duration-300"
                            childs="Gửi"
                            click={()=>{
                                handleNoti("Chức năng đang trong quá trình phát triển, mong bạn thông cảm!", 1);
                                // handleSendOTP();
                                popupPassRef.current.classList.add("hidden")
                            }}
                        />
                    </div>
                }
            />
            <div className="p-2 w-fit rounded-md">
                <Logo className="bg-white border-0 w-fit cursor-pointer" callBack={()=>nav("/")}/>
            </div>
            <h1 className="text-4xl text-[#000000] pt-7">Đăng nhập</h1>
            <p className="pt-7 px-1 pb-10">
                <p className="text-lg text-[rgba(0,0,0,0.72)]">Nếu bạn chưa có tài khoản,</p>
                <p className="text-lg">Đăng ký <a onClick={()=>nav("/auth/register")} className="cursor-pointer color_base font-bold text-[#00000072] ">tại đây!</a></p>
            </p>
            <div className="flex flex-col gap-5 pb-5">
                <InputText onChange={(e)=>handleChange(e)} inputName="email_phone" InputclassName="bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" LabelclassName="text-[#00000098] peer-placeholder-shown:text-[#00000072]" label="Email hoặc số điện thoại" />
                <InputText onChange={(e)=>handleChange(e)} inputName="pass" type="password" ref={passwordRef} InputclassName="bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" LabelclassName="text-[#00000098] peer-placeholder-shown:text-[#00000072]" label="Mật khẩu" />
            </div>
            <div className="flex justify-start items-center px-1">
                <FilterCheckBox input_name="show_pass_check" ref={showPassref} onChange={handleCheckboxChange} name="Hiển thị mật khẩu" />
            </div>
            <div className="pt-10">
                <Button
                    className="w-full h-12 bg_base text-white rounded-lg text-lg font-bold hover:bg-[#00000082] transition-all duration-300"
                    childs="Đăng nhập"
                    click={()=>handleLogin()}
                />
                <div className="flex items-center px-1 pt-3 justify-end">
                    <p className="cursor-pointer" onClick={()=>popupPassRef.current.classList.remove("hidden")} >Quên mật khẩu?</p>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;