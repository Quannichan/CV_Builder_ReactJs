/* eslint-disable react/prop-types */
import SplitLine from "./SplitLine";
import common from "../utils/common";
import { useNavigate } from "react-router";

function PostBig({id, img, dt01, dt02, user, postsample}){

    const nav = useNavigate();

    return(
        <div onClick={()=>nav(`/cv/workspace?id=${id}`)} className="cursor-pointer w-full rounded-xl transform snap-start shadow-lg hover:shadow-2xl transition ease-in-out relative bg-[#ffffff] group">
            <img className="py-3 aspect-square w-70 h-85 bg-[#f1f1f183] object-contain rounded-xl" src={!img.includes("http") ? common.URL_BE_BASE_IMG + img : img}/>
            <div className="absolute bottom-0 left-0 px-2 pb-2 pt-6 group-hover:pt-20 w-full rounded-b-xl bg-linear-to-b from-[#0000000a] via-[#00000063] transition ease-in-out to-[#0000008b] group-hover:from-[#00000000] group-hover:via-[#00000083] group-hover:to-[#000000bb] group-hover:text-white">
                <p className="text-[#464f58] font-semibold group-hover:text-[#f1f1f1] transition ease-in-out">
                    {
                        postsample.name ? `Loại: ${postsample.name}` : ""
                    }
                </p>
                <p className="text-sm text-[#353c45] font-semibold group-hover:text-[#dddddd] transition ease-in-out" >Ngày tạo: {common.DateDisplayCustom(dt01, "DD/MM/YYYY HH:mm")}</p>
                <p className="text-sm text-[#353c45] font-semibold group-hover:text-[#dddddd] transition ease-in-out pb-1">Ngày chỉnh sửa: {dt02 ? common.DateDisplayCustom(dt02, "DD/MM/YYYY HH:mm") : "Chưa chỉnh sửa"}</p>
                <SplitLine className={"group-hover:bg-[#dddddd3e] bg-[#353c4532]"}/>
                <div className="pt-2 flex items-center gap-2">
                    <img className="w-11 h-11 object-cover aspect-square rounded-full" src={user.ava ? !user.ava.includes("http") ? `${common.URL_BE_BASE_IMG}${user.ava}` : user.ava : ""} />
                    <div>
                        <h2 className="font-semibold text-[#353c45] group-hover:text-[#dddddd] transition ease-in-out">{user.ava ? `${user.name}` : ""}</h2>
                        <p className="font-semibold text-[#353c45 group-hover:text-[#dddddd] transition ease-in-out text-[13px] w-45 truncate line-clamp-1 text-ellipsis text-wrap">{user.mail ? `${user.mail}` : ""}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostBig;