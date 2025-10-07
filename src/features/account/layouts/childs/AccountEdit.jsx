/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import InputSelect from "../../../../components/InputSelect";
import InputText from "../../../../components/InputText";
import Button from "../../../../components/Button";
import { useDispatch } from "react-redux";
import { addNotification } from "../../../../redux/NotificationRedux";
import Acc from "../../services/account";
import InputTextArea from "../../../../components/InputTextArea";
import InputDate from "../../../../components/InputDate";
import common from "../../../../utils/common";

function AccountEdit({user = null, callback}){

    var [files, setFiles] = useState([]);

    const [userData, setUserData] = useState({
        id: 0,
        name : "",
        phone : "",
        mail: "",
        job: "",
        sex : 0,
        address : "",
        descript : "",
        portfolio : "",
        twitter : "",
        reddit : "",
        github : "",
        facebook : "",
        linked : "",
        birthdate: null
    });

    const dispatch = useDispatch();

    const handleNoti = (content, type) => {
        dispatch(addNotification({ content: content, second: 5, type: type}));
    };

    const handleChange = function(e){
        if(e.target.name === "descript"){
            if(e.target.value){
                if(e.target.value.length <= 500){
                    setUserData({
                        ...userData,
                        [e.target.name]: e.target.value
                    });
                }
            }else{
                setUserData({
                    ...userData,
                    [e.target.name]: e.target.value
                });
            }
        }else if(e.target.name === "address"){
            if(e.target.value){
                if(e.target.value.length <= 35){
                    setUserData({
                        ...userData,
                        [e.target.name]: e.target.value
                    });
                }
            }else{
                setUserData({
                    ...userData,
                    [e.target.name]: e.target.value
                });
            }
        }else if(e.target.name === "name"){
            if(e.target.value){
                if(e.target.value.length <= 50){
                    setUserData({
                        ...userData,
                        [e.target.name]: e.target.value
                    });
                }
            }else{
                setUserData({
                    ...userData,
                    [e.target.name]: e.target.value
                });
            }
        }else{
            setUserData({
                ...userData,
                [e.target.name]: e.target.value
            });
        }
    }

    useEffect(()=>{
        console.log(files);
    }, [files])

    useEffect(()=>{
        if(user){
            setFiles(user.imgs ? JSON.parse(user.imgs) : []);
            setUserData(
                {
                    id : user.id,
                    address : user.address,
                    mail : user.mail,
                    phone : user.phone,
                    name : user.name,
                    sex : user.sex,
                    job: user.job,
                    descript : user.descript,
                    portfolio : user.portfolio,
                    twitter : user.twitter,
                    reddit : user.reddit,
                    github : user.github,
                    facebook : user.facebook,
                    linked : user.linked,
                    birthdate: user.birthdate
                }
            );
        }
    }, [user]);

    const handleUpload = function(){
        var check = false;
        for(var k in userData){
            if(typeof userData[k] === "string"){
                if(userData[k] === null || userData[k] === undefined || userData[k] === ""){
                    handleNoti("Bạn chưa nhập đủ thông tin, vui lòng kiểm tra lại!", 2);
                    check = true;
                    break;
                }
            }else if(typeof userData[k] === "number"){
                if(userData[k] === null || userData[k] === undefined || userData[k] === 0){
                    handleNoti("Bạn chưa nhập đủ thông tin, vui lòng kiểm tra lại!", 2);
                    check = true;
                    break;
                }
            }else {
                if(userData[k] === null || userData[k] === undefined){
                    handleNoti("Bạn chưa nhập đủ thông tin, vui lòng kiểm tra lại!", 2);
                    check = true;
                    break;
                }
            }
        }

        if(check){
            return;
        }

        userData.birthdate = new Date(userData.birthdate).toISOString();
        
        Acc.updateInfo(
            userData,
            function(d){
                if(d.status === 2000){
                    handleNoti("Cập nhật thông tin thành công!", 1);
                    setUserData(
                        {
                            id: 0,
                            name : "",
                            phone : "",
                            mail: "",
                            job: "",
                            sex : 0,
                            address : "",
                            descript : "",
                            portfolio : "",
                            twitter : "",
                            reddit : "",
                            github : "",
                            facebook : "",
                            linked : "",
                            birthdate: null
                        }
                    );
                    callback();
                }else{
                    handleNoti("Đã xảy ra lỗi, vui lòng thử lại!", 2);
                }
            },
            function(e){
                console.log(e);
                handleNoti("Đã xảy ra lỗi, vui lòng thử lại!", 2);
            }
        );

    }

    return(
        <div className="px-5 py-5 w-full">
            <h1 className="color_base text-2xl pb-5 ">Chỉnh sửa thông tin</h1>

            <div className="bg-[#ededed] p-5 rounded-lg">
                <h1 className="text-[#000000aa] text-lg pb-3"><i>Thông tin người dùng</i></h1>
                <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-start gap-5 pb-5">
                    <InputText value={userData.name}  onChange={(e)=>handleChange(e)} inputName="name" InputclassName="bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" LabelclassName="text-[#00000098] peer-placeholder-shown:text-[#00000072]" label={`Tên chủ (${userData.name ? userData.name.length : 0}/50)`} />
                    <InputText value={userData.phone} disabled={true} InputclassName="bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" LabelclassName="text-[#00000098] peer-placeholder-shown:text-[#00000072]" label="Số điện thoại (Không đổi)" />
                    <InputText value={userData.mail} disabled={true} InputclassName="bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" LabelclassName="text-[#00000098] peer-placeholder-shown:text-[#00000072]" label="Email (Không đổi)" />
                </div>
                <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-start gap-5 pb-5">
                    <InputText value={userData.job} onChange={(e)=>handleChange(e)} inputName="job" InputclassName="bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" LabelclassName="text-[#00000098] peer-placeholder-shown:text-[#00000072]" label={`Vị trí tuyển dụng`} />
                    <InputText value={userData.address} onChange={(e)=>handleChange(e)} inputName="address" InputclassName="bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" LabelclassName="text-[#00000098] peer-placeholder-shown:text-[#00000072]" label={`Địa chỉ (${userData.address ? userData.address.length : 0}/40)`} />
                </div>
                <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-start gap-5 pb-5">
                    <InputDate value={common.DateDisplayCustom(userData.birthdate, "YYYY-MM-DD")} onChange={(e)=>handleChange(e)} inputName="birthdate" InputclassName="px-3 py-5 bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" />
                </div>
                <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-start gap-5 pb-5 ">
                    <InputSelect value={userData.sex} onChange={(e)=>{handleChange(e)}} inputName="sex" InputclassName="py-5 text-lg bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" 
                        options={[
                            {
                                name: "Chọn giới tính",
                                id:""
                            },
                            {
                                name: "Nam",
                                id:1
                            },
                            {
                                name: "Nữ",
                                id:2
                            }
                        ]}
                    />
                </div>
                <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-start gap-5">
                    <InputTextArea value={userData.descript} onChange={(e)=>handleChange(e)} inputName="descript" InputclassName="bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082] h-80" LabelclassName="text-[#00000098] text-[12px] peer-placeholder-shown:text-[#00000072]" label={`Giới thiệu (${userData.descript ? userData.descript.length : 0}/̀500)`}/> 
                </div>
            </div>
            <div className="h-5"></div>
            <div className="bg-[#ededed] p-5 rounded-lg">
                <h1 className="text-[#000000aa] text-lg pb-3"><i>Thông tin kết nối nền tảng</i></h1>
                <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-start gap-5 pb-5">
                    <InputText value={userData.portfolio} onChange={(e)=>handleChange(e)} inputName="portfolio" InputclassName="bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" LabelclassName="text-[#00000098] peer-placeholder-shown:text-[#00000072]" label={`Portfolio - Website`} />
                </div>
                <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-start gap-5 pb-5">
                    <InputText value={userData.linked} onChange={(e)=>handleChange(e)} inputName="linked" InputclassName="bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" LabelclassName="text-[#00000098] peer-placeholder-shown:text-[#00000072]" label={`LinkedIn`} />
                </div>
                <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-start gap-5 pb-5">
                    <InputText value={userData.github} onChange={(e)=>handleChange(e)} inputName="github" InputclassName="bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" LabelclassName="text-[#00000098] peer-placeholder-shown:text-[#00000072]" label={`Github`} />
                </div>
                <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-start gap-5 pb-5">
                    <InputText value={userData.facebook} onChange={(e)=>handleChange(e)} inputName="facebook" InputclassName="bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" LabelclassName="text-[#00000098] peer-placeholder-shown:text-[#00000072]" label={`Facebook`} />
                </div>
                <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-start gap-5 pb-5">
                    <InputText value={userData.twitter} onChange={(e)=>handleChange(e)} inputName="twitter" InputclassName="bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" LabelclassName="text-[#00000098] peer-placeholder-shown:text-[#00000072]" label={`Twitter`} />
                </div>
                <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-start gap-5 pb-5">
                    <InputText value={userData.reddit} onChange={(e)=>handleChange(e)} inputName="reddit" InputclassName="bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" LabelclassName="text-[#00000098] peer-placeholder-shown:text-[#00000072]" label={`Reddit`} />
                </div>
            </div>
            
            <div className="flex justify-end items-center gap-5 pt-5">
                <Button
                    className="bg_base px-3 py-2 rounded-3xl text-white transition ease-in-out hover:shadow-2xl"
                    childs="Lưu thay đổi"
                    click={()=>handleUpload()}
                />
            </div>

        </div>
    );
}

export default AccountEdit;