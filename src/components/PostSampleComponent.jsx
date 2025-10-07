import { useNavigate } from "react-router";
import common from "../utils/common";

/* eslint-disable react/prop-types */
export default function PostSampleComponent({isLogin, post, isAdmin}){

    const nav = useNavigate();

    return(
        <div className="bg-white rounded-lg shadow-[0px_15px_10px_#0000001A] h-full">
            <div>
                <img src={common.URL_BE_BASE_IMG+post.img} className="rounded-t-lg w-100 aspect-square" />
            </div>
            <div className="flex flex-col items-start gap-3 px-5 pt-6 pb-5">
                <h1 className="text-lg font-semibold">{post.name}</h1>
                <p className="text-[#4B5563] text-sm">{post.descript}</p>
                {
                    isAdmin
                    ?
                    <>
                        <button className="bg_base text-md text-center text-white w-full font-[350] py-2 rounded-lg cursor-pointer" onClick={()=>{nav(`/cvsample/workspace?t=${post.id}`)}}>Chỉnh sửa</button>
                    </>                    
                    :
                    <a className="bg_base text-md text-center text-white w-full font-[350] py-2 rounded-lg" href={`${isLogin ? `/cv/workspace?t=${post.id}` : "/auth/login?redirect=cv"}`}>Chọn mẫu này</a>
                }
            </div>
        </div>
    );
}
