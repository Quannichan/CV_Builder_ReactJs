/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import common from "../utils/common";
import Stars from "./Stars";

function User({user}){

    const nav = useNavigate();

    const getUserStars = function(u){
        if(u.posts.length > 0){
            var sum = 0;
            var count = 0;
            for(var p of u.posts){
                sum += p.comments.reduce((sum, item) => {count+=1; return sum + item.stars}, 0);
            }
            if(count === 0)
                return 0;
            return sum/count;
        }else{
            return 0;
        }
    }

    return(
        <div onClick={()=>nav(`/user?id=${user.id}`)} className="cursor-pointer w-fit p-2 rounded-xl">
            <img className="aspect-square sm:aspect-square md:aspect-auto lg:aspect-auto xl:aspect-auto w-65 sm:w-60 md:w-70 lg:w-70 xl:w-65 sm:h-45 md:h-50 lg:h-50 xl:h-40 object-cover rounded-lg" src={common.URL_BE_BASE_IMG + user.ava}/>
            <div className="pt-2 px-1">
                <h3 className="text-sm sm:text-md md:text-lg lg:text-md xl:text-md font-semibold text-wrap min-w-20 w-full max-w-50  truncate line-clamp-2 pb-1 leading-6">{user.displayName}</h3>
                <p className="text-sm sm:text-sm md:text-md lg:text-md xl:text-sm truncate min-w-20 w-full max-w-50 text-wrap line-clamp-2 text-[#00000098]">{user.address}, {user.wardData.name}, {user.cityData.name}</p>
                <p className="text-sm sm:text-sm md:text-md lg:text-md xl:text-sm truncate min-w-20 w-full max-w-50 text-wrap line-clamp-2 text-[#00000098]">{user.service.name}</p>
                <p className="text-sm sm:text-sm md:text-md lg:text-md xl:text-sm truncate min-w-20 w-full max-w-50 text-wrap line-clamp-2 text-[#00000098]"><Stars stars={getUserStars(user)} /></p>
                <p className="text-sm sm:text-sm md:text-md lg:text-md xl:text-sm truncate min-w-20 w-full max-w-50 text-wrap line-clamp-2 text-[#00000098]">{user.followers ? user.followers.length : 0} lượt theo dõi</p>
            </div>
        </div>
    );
}

export default User;