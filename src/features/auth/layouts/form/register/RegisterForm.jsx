import { useEffect, useRef, useState } from "react";
import Button from "../../../../../components/Button";
import FilterCheckBox from "../../../../../components/FilterCheckBox";
import InputText from "../../../../../components/InputText";
import Logo from "../../../../../components/Logo";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import authsv from "../../../services/auth";
import common from "../../../../../utils/common";
import { addNotification } from "../../../../../redux/NotificationRedux";

function RegisterForm() {

    const showPassref = useRef();
    const passwordRef = useRef();
    const repasswordRef = useRef();

    const dispatch = useDispatch();

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

    useEffect(()=>{
        isLogin();
    }, [])
    
    const handleNoti = (content, type) => {
        dispatch(addNotification({ content: content, second: 5, type: type}));
    };

    const nav = useNavigate();

    const handleCheckboxChange = function() {
        if(showPassref.current && passwordRef.current && repasswordRef.current){
            passwordRef.current.type = showPassref.current.checked ? "text" : "password";
            repasswordRef.current.type = showPassref.current.checked ? "text" : "password";
        }
    }

    const [registerData, setRegisterData] = useState({
        name        : "",
        mail        : "",
        phone       : "",
        pass        : "",
        repass      : "",
    });

    const handleChange = function(e){
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = async function(){
        if(registerData.name.length < 7){
            handleNoti("Tên người dùng quá ngắn!", 2);
            return;
        }
        if(registerData.name.length > 20){
            handleNoti("Tên người dùng quá dài!", 2);
            return;
        }
        if(!registerData.mail.includes("@") || !registerData.mail.includes(".")){
            handleNoti("Hãy kiểm tra lại email!", 2);
            return;
        }
        if(registerData.phone.length < 10 || registerData.phone.length > 11){
            handleNoti("Hãy kiểm tra lại số điện thoại!", 2);
            return;
        }
        if(registerData.pass.length < 8){
            handleNoti("Mật khẩu của quá ngắn", 2);
            return;
        }
        if(registerData.repass !== registerData.pass){
            handleNoti("Mật khẩu xác nhận chưa đúng!", 2);
            return;
        }
        
        // delete registerData.repass;
        await authsv.register(
            {
                ...registerData,
                pass: common.Hash(registerData.pass)
            },
            function(d){
                if(d.status === 2000){
                    console.log(d);
                    common.Save_uD(d);
                    handleNoti("Đăng ký tài khoản thành công!", 1);
                    nav("/account");
                }else if(d.status === 2001 && d.msg){
                    handleNoti(d.msg, 2);
                }else if(d.status === 2002){
                    handleNoti("Đã xảy ra lỗi, vui lòng thử lại sau!", 2);
                }else{
                    handleNoti("Đã xảy ra lỗi, vui lòng thử lại sau!", 2);
                }
            },
            function(e){
                console.log(e);
                handleNoti("Đã xảy ra lỗi, vui lòng thử lại sau!", 2);
            }
        )
    }

    return (
        <div className="p-10 rounded-2xl w-full h-full">
            <div className="p-2 w-fit rounded-md">
                <Logo className="bg-white border-0 w-fit cursor-pointer" callBack={()=>nav("/")}/>
            </div>
            <h1 className="text-4xl text-[#000000] pt-7">Đăng ký</h1>
            <p className="pt-7 px-1 pb-10">
                <p className="text-lg text-[rgba(0,0,0,0.72)]">Nếu bạn đã có tài khoản,</p>
                <p className="text-lg">Đăng nhập <a onClick={()=>nav("/auth/login")} className="cursor-pointer color_base font-bold text-[#00000072] ">tại đây!</a></p>
            </p>
            <div className="flex flex-col gap-5 pb-5">
                <InputText onChange={(e)=>handleChange(e)} inputName="name" InputclassName="bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" LabelclassName="text-[#00000098] peer-placeholder-shown:text-[#00000072]" label="Tên người dùng" />
                <InputText onChange={(e)=>handleChange(e)} inputName="mail" InputclassName="bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" LabelclassName="text-[#00000098] peer-placeholder-shown:text-[#00000072]" label="Email" />
                <InputText onChange={(e)=>handleChange(e)} inputName="phone" InputclassName="bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" LabelclassName="text-[#00000098] peer-placeholder-shown:text-[#00000072]" label="Số điện thoại" />
                <InputText onChange={(e)=>handleChange(e)} inputName="pass" type="password" ref={passwordRef} InputclassName="bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" LabelclassName="text-[#00000098] peer-placeholder-shown:text-[#00000072]" label="Mật khẩu" />
                <InputText onChange={(e)=>handleChange(e)} inputName="repass" type="password" ref={repasswordRef} InputclassName="bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" LabelclassName="text-[#00000098] peer-placeholder-shown:text-[#00000072]" label="Nhập lại mật khẩu" />
            </div>
            <div className="flex justify-start items-center px-1 pb-2">
                <FilterCheckBox input_name="show_pass_check" ref={showPassref} onChange={handleCheckboxChange} name="Hiển thị mật khẩu" />
            </div>
            <div className="pt-3">
                <Button
                    className="w-full h-12 bg_base text-white rounded-lg text-lg font-bold hover:bg-[#00000082] transition-all duration-300"
                    childs="Đăng ký"
                    click={()=>handleRegister()}
                />
            </div>
        </div>
    );
}

export default RegisterForm;