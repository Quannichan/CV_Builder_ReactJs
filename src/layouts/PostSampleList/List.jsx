import PostSampleComponent from "../../components/PostSampleComponent"

/* eslint-disable react/prop-types */
export default function List({isLogin, posts=[], isAdmin}){
    return(
        <div className="py-10 px-20 grid grid-cols-4 justify-center items-start gap-7 ">
            {
                posts.length
                ?
                    posts.map((d, i)=>{
                        return(
                            <PostSampleComponent
                                isLogin={isLogin}
                                key={i}
                                post={d}
                                isAdmin={isAdmin}
                            />
                        )
                    })
                :
                <div className="col-span-4 text-center">Không có CV mẫu</div>
            }
        </div>
    )
}