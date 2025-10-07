import { useEffect, useRef, useState } from "react";
import LinearContainer from "../../../components/LinearContainer";
import Filter from "../layouts/childs/Filter";
import List from "../../../layouts/PostSampleList/List";
import Pagination from "../../../components/Pagination";
import Button from "../../../components/Button";
import { Helmet } from "react-helmet";
import postSampleService from "../../../services/postSample";
import common from "../../../utils/common";

export default function PostSampleList(){

    const [selectFilter, setSelectFilter] = useState({
        typ01: null,
        typ02: null,
        typ03: null
    })

    const [filter] = useState({
        typ01 : [
            {
                "id": 1,
                "name": "Y tế"
            },
            {
                "id": 2,
                "name": "Công nghệ thông tin"
            },
            {
                "id": 3,
                "name": "Nghệ thuật"
            },
            {
                "id": 4,
                "name": "Văn phòng"
            }
        ],
        typ02 : [
            {
                "id": 1,
                "name": "Hiện đại"
            },
            {
                "id": 2,
                "name": "Cổ điển"
            },
            {
                "id": 3,
                "name": "Sáng tạo"
            },
            {
                "id": 4,
                "name": "Tối giản"
            },
            {
                "id": 5,
                "name": "Doanh nghiệp"
            },
            {
                "id": 6,
                "name": "Công nghệ"
            },
            {
                "id": 7,
                "name": "Thanh lịch"
            },
            {
                "id": 8,
                "name": "Sáng"
            },
            {
                "id": 9,
                "name": "Tối"
            },
            {
                "id": 10,
                "name": "Chi tiết"
            }
        ],
        typ03 : [
            {
                "id": 1,
                "name": "Xanh lam"
            },
            {
                "id": 2,
                "name": "Xanh lục"
            },
            {
                "id": 3,
                "name": "Xanh"
            },
            {
                "id": 4,
                "name": "Đỏ"
            },
            {
                "id": 5,
                "name": "Cam"
            },
            {
                "id": 6,
                "name": "Đen"
            },
            {
                "id": 7,
                "name": "Xám"
            },
            {
                "id": 8,
                "name": "Hồng"
            },
            {
                "id": 9,
                "name": "Trắng"
            },
            {
                "id": 10,
                "name": "Tím"
            }
        ],
    });

    const [isLogin, setIsLogin] = useState(false);
    const checkisLogin = function(){
        common.check_login({
            suc: function(d){
                if(d.status === 2000){
                    setIsLogin(true);
                }else{
                    common.ClearLocal();
                }
            },
            err : function(e){
                console.error(e);
            }
        })
    }

    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    useEffect(()=>{
        checkisLogin();
        FetchPostSample();
    }, [page])

    const FetchPostSample = function(){
        postSampleService.getPage(
            {
                page: page,
                size: 8,
                typ01 : selectFilter.typ01 ? selectFilter.typ01 : null,
                typ02 : selectFilter.typ02 ? selectFilter.typ02 : null,
                typ03 : selectFilter.typ03 ? selectFilter.typ03 : null
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

    const changeFilter = function(e){
        setSelectFilter({
            ...selectFilter,
            [e.target.name]: e.target.value || null
        })
    }

    const Search = function(){
        if(page == 1){
            FetchPostSample()
        }else{
            setPage(1)
        }
    }

    const [posts, setPosts] = useState([]);

    const layoutRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            layoutRef.current.classList.remove("opacity-0");
        },10);
    }, [])

    return(
        <>
            <Helmet><title>CV Builder | Mẫu CV</title></Helmet>
            <div className="w-screen opacity-0 transition-opacity ease-in-out" ref={layoutRef}>
                <LinearContainer
                    from_to="from-[#3B82F6] to-[#1E40AF]"
                    className="pt-12 pb-20"
                    components={
                        <div className="flex flex-col items-center gap-7">
                            <h1 className="text-white text-5xl font-semibold">Mẫu CV Chuyên Nghiệp</h1>
                            <p className="text-xl text-[#DBEAFE] font-light">Chọn từ hơn 50+ mẫu CV được thiết kế bởi chuyên gia để tạo ấn tượng với nhà tuyển dụng</p>
                        </div>
                    }
                />
                <Filter
                    value={filter}
                    change={changeFilter}
                    callback={Search}
                />
                
                <div className="bg-[#fafafa] border-1 border-[#E5E7EB]">
                    <List
                        isLogin={isLogin}
                        posts={posts}
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
                    <div className="h-10"></div>
                </div>

                <LinearContainer
                    from_to="from-[#3B82F6] to-[#1E40AF]"
                    className="pt-12 pb-17"
                    components={
                        <div className="flex flex-col items-center gap-7">
                            <h1 className="text-white text-4xl font-semibold">Bắt đầu tạo CV của bạn ngay hôm nay</h1>
                            <p className="text-2xl text-[#DBEAFE] font-light pb-3">Tạo CV chuyên nghiệp trong vài phút với công cụ của chúng tôi</p>
                            <Button
                                className="bg-white px-8 py-3 text-xl rounded-lg color_base font-semibold"
                                childs="Tạo CV miễn phí"
                            />
                        </div>
                    }
                />
            </div>
        </>
    )
}