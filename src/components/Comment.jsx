import Stars from "./Stars";

/* eslint-disable react/prop-types */
function Comment({comment}){
    return(
        <div className="px-6 py-7 w-fit h-full bg-[#ffffff] rounded-lg">
            <div className="flex justify-start items-start gap-2 pb-3">
                <img 
                    className="aspect-square rounded-full object-cover w-10"
                    src={comment.user ? comment.user.img : ""}
                />
                <div className="">
                    <p>{comment.user ? comment.user.name : ""}</p>
                    <p className="text-[13px] text-[#5d5d5d]">{comment.user.job}</p>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <Stars stars={comment.stars} />
                <p className="text-[#4B5563]">{comment.content}</p>
            </div>
        </div>
    );
}

export default Comment;