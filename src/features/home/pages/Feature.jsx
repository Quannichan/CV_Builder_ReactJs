import { IoMdColorPalette } from "react-icons/io";
import Button from "../../../components/Button";
import Container from "../../../components/Container";
import LinearContainer from "../../../components/LinearContainer";
import FeatureTag from "../components/FeatureTag";
import { FaDownload } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaCloud } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import Comment from "../../../components/Comment";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";

export default function Feature(){

    const layoutRef = useRef();
        
    useEffect(() => {
        setTimeout(() => {
            layoutRef.current.classList.remove("opacity-0");
        },10);
    }, [])

    const [cmts] = useState([
        
        {   
            user:{
                img: "user1.jpg",
                name: "Nguyễn Thị Mai",
                job: "Marketing Manager",
            },
            stars: 5,
            content: `"CV Builder đã giúp tôi tạo ra một CV chuyên nghiệp và ấn tượng. Tôi đã nhận được nhiều lời mời phỏng vấn hơn."`
        },
        {   
            user:{
                img: "user2.jpg",
                name: "Trần Văn Hùng",
                job: "Software Developer",
            },
            stars: 5,
            content: `"Giao diện rất dễ sử dụng, nhiều mẫu đẹp. Tôi đã tìm được công việc mơ ước chỉ sau 2 tuần gửi CV."`
        },
        {   
            user:{
                img: "user3.jpg",
                name: "Lê Thị Hương",
                job: "HR Specialist",
            },
            stars: 5,
            content: `"Tính năng chia sẻ trực tuyến rất tiện lợi. Tôi có thể gửi link CV cho nhà tuyển dụng ngay lập tức."`
        }
        
    ]);

    const nav = useNavigate();
    
    return(
        <>
            <Helmet><title>CV Builder | Tính năng</title></Helmet>
            <div className="w-screen opacity-0 transition-opacity ease-in-out" ref={layoutRef}>
                <LinearContainer
                    from_to="from-[#3B82F6] to-[#1E40AF]"
                    className="pt-12 pb-13"
                    components={
                        <div className="flex flex-col items-center gap-7">
                            <h1 className="text-white text-5xl font-semibold">Tính Năng Vượt Trội</h1>
                            <p className="text-xl text-[#DBEAFE] font-light w-160 text-center">Khám phá những tính năng mạnh mẽ giúp bạn tạo ra CV chuyên nghiệp và ấn tượng</p>
                            <Button
                                className="bg-[#F59E0B] px-8 py-4 text-md rounded-md text-white"
                                childs="Khám Phá Ngay"
                                click={()=>{nav("/cv")}}
                            />
                        </div>
                    }
                />
                <Container
                    header="Tính Năng Nổi Bật"
                    descript="Những công cụ mạnh mẽ giúp bạn tạo CV chuyên nghiệp một cách dễ dàng"
                    content={
                        <div className="grid gap-x-3 gap-y-8 grid-cols-3 justify-center items-center px-22">
                            <FeatureTag
                                icon={<div className="text-white bg_base w-fit text-[25px] p-2 rounded-md"><HiOutlinePencilAlt /></div>}
                                title="Chỉnh Sửa Dễ Dàng"
                                descript="Giao diện trực quan, kéo thả đơn giản. Chỉnh sửa CV theo thời gian thực với các công cụ mạnh mẽ."
                            />
                            <FeatureTag
                                icon={<div className="text-white bg-[#22C55E] w-fit text-[20px] p-3 rounded-md"><FaCloud/></div>}
                                title="Lưu Trữ Không Giới Hạn"
                                descript="Lưu trữ tất cả CV của bạn trên cloud. Truy cập mọi lúc, mọi nơi từ bất kỳ thiết bị nào."
                            />
                            <FeatureTag
                                icon={<div className="text-white bg-[#EF4444] w-fit text-[20px] p-3 rounded-md"><FaDownload/></div>}
                                title="Tải PDF Chất Lượng Cao"
                                descript="Xuất CV dưới định dạng PDF chất lượng cao, sẵn sàng gửi cho nhà tuyển dụng."
                            />
                            <FeatureTag
                                icon={<div className="text-white bg-[#A855F7] w-fit text-[25px] p-2 rounded-md"><IoMdColorPalette /></div>}
                                title="Mẫu Thiết Kế Đa Dạng"
                                descript="Hơn 50 mẫu CV chuyên nghiệp, phù hợp với mọi ngành nghề và cấp độ kinh nghiệm."
                            />
                            <FeatureTag
                                icon={<div className="text-white bg-[#6366F1] w-fit text-[20px] p-3 rounded-md"><MdPhoneIphone/></div>}
                                title="Tương Thích Mọi Thiết Bị"
                                descript="Sử dụng trên máy tính, tablet hay điện thoại. Giao diện responsive hoàn hảo."
                            />
                            <FeatureTag
                                icon={<div className="text-white bg-[#F97316] w-fit text-[20px] p-3 rounded-md"><FaShareAlt/></div>}
                                title="Chia Sẻ Trực Tuyến"
                                descript="Tạo link chia sẻ CV trực tuyến, theo dõi lượt xem và tương tác từ nhà tuyển dụng."
                            />
                        </div>
                    }
                />
                <div className="bg-[#fafafa] ">
                    <Container
                        header="Khách Hàng Nói Gì"
                        descript="Hàng nghìn người đã tin tưởng và thành công với CV Builder"
                        content={
                            <div className="grid gap-x-8 gap-y-8 grid-cols-3 justify-center items-start px-22">
                                {
                                    cmts.length 
                                    ?
                                        cmts.map((d, i)=>{
                                            return <Comment
                                                key={i}
                                                comment={d}
                                            />
                                        })
                                    :
                                    <></>
                                }
                                
                            </div>
                        }
                    />
                </div>
                <LinearContainer
                    from_to="from-[#3B82F6] to-[#1E40AF]" 
                    className="pt-12 pb-17"
                    components={
                        <div className="flex flex-col items-center gap-6">
                            <h1 className="text-white text-3xl font-semibold">Sẵn Sàng Tạo CV Chuyên Nghiệp?</h1>
                            <p className="text-lg text-[#DBEAFE] font-light pb-3">Tham gia cùng hàng nghìn người đã thành công với CV Builder</p>
                            <div className="flex justify-center items-center gap-5">
                                <Button
                                    className="bg-white font-semibold px-8 py-4 text-md rounded-md color_base"
                                    childs="Khám Phá Ngay"
                                    click={()=>{nav("/cv")}}
                                />
                                <Button
                                    className="bg-[#F59E0B] font-semibold px-8 py-4 text-md rounded-md text-white"
                                    childs="Đăng Ký Miễn Phí"
                                />
                            </div>
                        </div>
                    }
                />
            </div> 
        </>
    )
}