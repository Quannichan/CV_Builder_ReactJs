import PostBig from "../../../../components/PostBig";

/* eslint-disable react/prop-types */
function AccountPost({posts}){

    return(
        <>
            <h1 className="color_base text-2xl pb-5 text-center">Danh sách CV đã tạo</h1>
                <div className="xl:px-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 justify-center items-start flex-wrap gap-2 py-15">
                {
                    posts.length > 0
                    ?
                    posts.map((post, index) => (
                        <div key={index} className="w-full sm:w-full md:w-full lg:w-fit xl:w-fit flex justify-center">
                        <PostBig
                            key={index}
                            img={post.img}
                            id={post.id}
                            postsample={post.PostSample}
                            isEdit={true}
                            dt01={post.date01}
                            dt02={post.date02}
                            user={post.user}
                        />
                        </div>
                        ))
                    :
                    <p className="h-150 text-center col-span-7">Bạn chưa tạo CV nào!</p>
                }
            </div>
        </>
    );
}

export default AccountPost;