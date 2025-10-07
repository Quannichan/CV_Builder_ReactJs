/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../../../../components/Button";
import InputText from "../../../../components/InputText";
import Acc from "../../services/account";
import common from "../../../../utils/common";
import { useDispatch } from "react-redux";
import { addNotification } from "../../../../redux/NotificationRedux";

function AccountChangePass({callBack}){

    const dispatch = useDispatch();
    const handleNoti = (content, type) => {
        dispatch(addNotification({ content: content, second: 5, type: type}));
    };

    const [pass, setPass] = useState(
        {
            newPass: "",
            oldPass: ""
        }
    );

    const handleChange = function(e){
        setPass({
            ...pass,
            [e.target.name] : e.target.value
        })
    }

    const handleSend = function(){
        if(pass.oldPass === "" || pass.oldPass.length === null){
            handleNoti("Hãy nhập mật khẩu hiện tại!", 2);
            return;
        }

        if(pass.newPass === "" || pass.newPass.length === null){
            handleNoti("Hãy nhập mật khẩu mới!", 2);
            return;
        }

        pass.newPass = common.Hash(pass.newPass)
        pass.oldPass = common.Hash(pass.oldPass)

        Acc.changePass(
            {
                id : common.UID,
                ...pass
            },
            function(d){
                if(d.status === 2000){
                    handleNoti("Đổi mật khẩu thành công!", 1);
                    setPass({
                        newPass: "",
                        oldPass: ""
                    });
                    callBack();
                }else if(d.status === 2003){
                    handleNoti("Mật khẩu hiện tại sai, hãy thử lại!", 2);
                }else{
                    handleNoti("Không thể thay đổi mật khẩu!", 2);
                }
            },
            function(e){
                console.log(e);
                handleNoti("Đã xảy ra lỗi!", 2);
            }
        )
    }

    return(
        <div className="px-5 py-5 w-full">
            <h1 className="color_base text-2xl pb-5 ">Đổi mật khẩu</h1>
            <div className="bg-[#ededed] p-5 rounded-lg">
                <div className="flex justify-center items-start gap-5 pb-5">
                    <InputText onChange={(e)=>handleChange(e)} type="password" value={pass.oldPass} inputName="oldPass" InputclassName="bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" LabelclassName="text-[#00000098] peer-placeholder-shown:text-[#00000072]" label="Mật khẩu hiện tại" />
                </div>
                <div className="flex justify-center items-start gap-5 pb-5">
                    <InputText onChange={(e)=>handleChange(e)} type="password" value={pass.newPass} inputName="newPass" InputclassName="bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" LabelclassName="text-[#00000098] peer-placeholder-shown:text-[#00000072]" label="Mật khẩu mới" />
                </div>
                <div className="flex justify-end items-center gap-5 pt-5">
                    <Button
                        className="bg_base px-3 py-2 rounded-3xl text-white transition ease-in-out hover:shadow-2xl"
                        childs="Xác nhận"
                        click={()=>handleSend()}
                    />
                </div>
            </div>
        </div>
    )

}

export default AccountChangePass;