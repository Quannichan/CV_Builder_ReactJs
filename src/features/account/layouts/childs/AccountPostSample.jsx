import { useEffect, useState } from "react";
import Pagination from "../../../../components/Pagination";
import List from "../../../../layouts/PostSampleList/List";
import postSampleService from "../../../../services/postSample";
import Button from "../../../../components/Button";
import { useNavigate } from "react-router";

/* eslint-disable react/prop-types */
function AccountPostSample(){
    
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const nav = useNavigate();

    const FetchPostSample = function(){
        postSampleService.getPage(
            {
                page: page,
                size: 8,
            },
            function(d){
                if(d.status === 2000){
                    setPosts(d.data);
                    setTotalPage(d.total*1);
                }else{
                    setPosts([])
                    setTotalPage(0);
                }
            },
            function(e){
                console.log(e);
            }
        )
    }

    useEffect(()=>{
        FetchPostSample();
    }, [page])

    return(
        <>
            <h1 className="color_base text-2xl text-center">Danh sách mẫu CV </h1>
                <div className="w-full flex items-center justify-center pb-1 pt-2">
                    <Button
                        className="bg_base px-3 py-2 rounded-lg text-sm text-white"
                        childs="Thêm mẫu cv"
                        click={()=>{nav("/cvsample/workspace")}}
                    />
                </div>
                <div className="bg-[white] py-10">
                        <List
                            isLogin={true}
                            posts={posts}
                            isAdmin={true}
                        />
                        <div className={`h-10`} ></div>
                        <Pagination
                            now={page}
                            state={{
                                state: page,
                                setState : setPage
                            }}
                            total={totalPage}
                        />
                </div>
        </>
    );
}

export default AccountPostSample;