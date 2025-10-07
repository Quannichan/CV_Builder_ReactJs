/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import Button from "../../../../components/Button";
import TagInfo from "../../components/TagInfo";
import common from "../../../../utils/common";
import { useRef, useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { HiOutlineXMark } from "react-icons/hi2";
import Acc from "../../services/account";
import { useDispatch } from "react-redux";
import { addNotification } from "../../../../redux/NotificationRedux";

function AccountInfo({user}){

    const nav = useNavigate();
    const avaRef = useRef();
    const fileRef = useRef();

    const [newAva, setNewAva] = useState(null);

    const dispatch = useDispatch();

    const handleNoti = (content, type) => {
        dispatch(addNotification({ content: content, second: 5, type: type}));
    };

    const handleUploadAva = function(){
        Acc.updateAva(
            {
                id  : common.UID,
                img : newAva
            },
            function(d){
                if(d.status === 2000){
                    setNewAva(null);
                    common.Save_uD(d);
                    common.Update_uD();
                    avaRef.current.src = common.UIMG;
                    handleNoti("Cập nhật ảnh thành công!", 1);
                }else{
                    handleNoti("Đã xảy ra lỗi!", 2);
                }
            },
            function(e){
                handleNoti("Đã xảy ra lỗi!", 2);
                console.log(e);
            }
        )
    }

    const handleChangeAva = async function(e){
        const file = e.target.files[0];
        if(file){
            const fr = new FileReader();
            fr.onload = function(f){
                avaRef.current.src = f.target.result;
            };
            fr.readAsDataURL(file);
            setNewAva(await common.convertToBase64(file));
        }
    }

    const handleResetAva = function(){
        setNewAva(null);
        avaRef.current.src = common.UIMG;
        fileRef.current.files = [];
    }

    const getLatestPost = function(d){
        if(d.length === 0){
            return null;
        }else{
            return  common.DateDisplayCustom(d[d.length-1].date01, "DD/MM/yyyy HH:mm:ss");
        }
    }

    const getUserSex = function(d){
        switch(d){
            case 0:
                return "Chưa cập nhật";
            case 1:
                return "Nam";
            case 2:
                return "Nữ";
            default:
                return "Lỗi!";
        }
    }

    return(
        <div className="w-full flex justify-evenly">
            <div className="flex items-start justify-between gap-15 pb-5 ">
                <div className="flex flex-col items-center gap-3">
                    <div className="flex flex-col relative items-center w-fit">
                        <img className="w-60 object-cover h-75 rounded-3xl shadow-2xl" ref={avaRef} src={common.UIMG}/>
                        {
                            newAva === null
                            ?
                                <label htmlFor="avatar_file" className="absolute bottom-3 w-40 bg-[#ffffffb9] text-black py-2 transition ease-in-out hover:scale-105 rounded-full flex justify-center items-center cursor-pointer hover:shadow-2xl">Thay đổi ảnh</label>
                            :
                            <div className="absolute bottom-3 flex gap-2">
                                <CiCircleCheck className="text-green-700 bg-[#ffffff] text-4xl rounded-full cursor-pointer hover:scale-110 transition ease-in-out" onClick={()=>handleUploadAva()}/>
                                <HiOutlineXMark className="text-red-600 bg-[#ffffff] p-2 text-4xl rounded-full cursor-pointer hover:scale-110 transition ease-in-out" onClick={()=>handleResetAva()}/>
                            </div>
                        }
                        <input ref={fileRef} id="avatar_file" type="file" className="hidden" onChange={(e)=>handleChangeAva(e)}/>
                    </div>
                    <div className=""></div>
                    <Button
                        className="w-full bg-[#ffffffb9] shadow-2xl text-black py-2 rounded-full"
                        childs="Chỉnh sửa thông tin"
                        click={()=>nav("/account?page=edit")}
                    />
                    <Button
                        className="w-full bg-transparent hover:shadow-2xl text-red-500 hover:bg-[#ff0000b9] hover:text-white transition ease-in-out py-2 rounded-full"
                        childs="Đăng xuất"
                        click={()=>{
                            common.ClearLocal();
                            nav("/auth/login");
                        }}
                    />
                </div>
                
                <div className="pt-3">
                    <TagInfo
                        title="Tên người dùng"
                        content={user.name ? user.name : "Chưa cập nhật"}
                        bottom={true}
                    />
                    <TagInfo
                        title="Ngày tham gia"
                        content={common.UDT01 ? common.DateDisplayCustom(common.UDT01, "DD/MM/yyyy") : "Không có dữ liệu"}
                        bottom={true}
                    />
                    <TagInfo
                        title="Thời gian chỉnh sửa gần đây"
                        content={user.date02 ? common.DateDisplayCustom(user.date02, "DD/MM/yyyy hh:mm:ss") : "Chưa chỉnh sửa"}
                        bottom={true}
                    />
                    <TagInfo
                        title="Thời gian tạo CV gần đây"
                        content={user.posts && user.posts.length > 0 ? getLatestPost(user.posts) : "Chưa sử dụng CV nào"}
                        bottom={true}
                    />
                    <TagInfo
                        title="Tổng CV đang sử dụng"
                        content={<>{user.posts ? user.posts.length : 0} <span className="text-sm">CV</span></>}
                        bottom={true}
                    />
                </div>
            </div>
            <div className="flex items-start justify-between gap-15">
                <div className="pt-3">
                    <h1 className="color_base text-xl pb-2 ">Thông tin người dùng</h1>
                    
                    <TagInfo
                        title="Họ và tên"
                        content={user.name}
                        bottom={true}
                    />
                    <TagInfo
                        title="Giới tính"
                        content={user.sex !== null ? getUserSex(user.sex) : "Chưa cập nhật"}
                        bottom={true}
                    />

                    <TagInfo
                        title="Portfolio / Website"
                        content={<p className="text-wrap break-all">{user.portfolio ? user.portfolio : "Chưa cập nhật"}</p>}
                        bottom={true}
                    />

                    <TagInfo
                        title="Loại tài khoản"
                        content={user.accountType === 0 ? "Personal" :  user.accountType === 1 ? "Standard" : user.accountType === 2 ? "Professional" : "Không xác định"}
                        bottom={true}
                    />

                    <TagInfo
                        title="Địa chỉ"
                        content={user.address ? user.address : "Chưa cập nhật"}
                        bottom={true}
                    />

                    <h1 className="color_base text-xl pb-2 pt-5">Thông tin liên hệ</h1>

                    <TagInfo
                        title="Số điện thoại"
                        content={<p className="text-wrap break-all">{user.phone ? user.phone : "Không có"}</p>}
                        bottom={true}
                    />
                    <TagInfo
                        title="Mail"
                        content={<p className="text-wrap break-all">{user.mail ? user.mail : "Lỗi!"}</p>}
                        bottom={true}
                    />

                </div>
                <div className="pt-3">
                    <h1 className="color_base text-xl pb-2">Kết nối nền tảng</h1>

                    <TagInfo
                        title="Linked"
                        content={<p className="text-wrap break-all">{user.linked ? user.linked : "Chưa cập nhật"}</p>}
                        bottom={true}
                    />

                    <TagInfo
                        title="Github"
                        content={<p className="text-wrap break-all">{user.github ? user.github : "Chưa cập nhật"}</p>}
                        bottom={true}
                    />

                    <TagInfo
                        title="Twitter"
                        content={<p className="text-wrap break-all">{user.twitter ? user.twitter : "Chưa cập nhật"}</p>}
                        bottom={true}
                    />

                    <TagInfo
                        title="Facebook"
                        content={<p className="text-wrap break-all">{user.facebook ? user.facebook : "Chưa cập nhật"}</p>}
                        bottom={true}
                    />

                    <TagInfo
                        title="Reddit"
                        content={<p className="text-wrap break-all">{user.facebook ? user.facebook : "Chưa cập nhật"}</p>}
                        bottom={true}
                    />

                    {/* <h1 className="color_base text-2xl pb-3 pt-5 ">Loại tài khoản</h1>
                    <TagInfo
                        title=""
                        content={
                            <div className="flex flex-col justify-start items-baseline gap-2">
                                <p className="text-sm text-wrap w-fit px-3 py-1 bg-[#dddddda4] text-[#0000008a] rounded-full">Thường</p>
                                <p className="text-sm text-wrap w-fit px-3 py-1 bg_base text-[#ffffff] rounded-3xl">Trung</p>
                                <p className="text-sm text-wrap w-fit px-3 py-1 bg-[#dddddda4] text-[#0000008a] rounded-full">Cao cấp</p>
                            </div>
                        }
                        className="flex flex-col justify-start gap-2"
                        bottom={true}
                    /> */}
                </div>
            </div>
        </div>
    );
}

export default AccountInfo;