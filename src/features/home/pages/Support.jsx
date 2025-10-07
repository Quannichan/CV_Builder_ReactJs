import Button from "../../../components/Button";
import Container from "../../../components/Container";
import LinearContainer from "../../../components/LinearContainer";
import { IoSearchSharp } from "react-icons/io5";
import SupportTag from "../components/SupportTag";
import { FaPhone } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import QuestionBox from "../components/QuestionBox";
import { IoIosArrowDown } from "react-icons/io";
import ContactTag from "../components/ContactTag";
import { MdLocationOn } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import { Helmet } from "react-helmet";

export default function Support(){

    const layoutRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            layoutRef.current.classList.remove("opacity-0");
        },10);
    }, [])

    return(
        <>
            <Helmet><title>CV Builder | Hỗ trợ</title></Helmet>
            <div className="w-screen opacity-0 transition-opacity ease-in-out relative" ref={layoutRef}>
                <div className="p-4 bg-[#22C55E] rounded-full fixed bottom-10 right-10 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 aspect-square" viewBox="0 0 30 24" fill="none">
                        <path d="M9.75002 16.5C15.136 16.5 19.5 12.8062 19.5 8.25C19.5 3.69375 15.136 0 9.75002 0C4.36409 0 2.47395e-05 3.69375 2.47395e-05 8.25C2.47395e-05 10.0594 0.689087 11.7328 1.85627 13.0969C1.69221 13.5375 1.44846 13.9266 1.19065 14.2547C0.96565 14.5453 0.735962 14.7703 0.567212 14.925C0.482837 15 0.412525 15.0609 0.36565 15.0984C0.342212 15.1172 0.323462 15.1312 0.314087 15.1359L0.304712 15.1453C0.0468997 15.3375 -0.0656003 15.675 0.0375247 15.9797C0.14065 16.2844 0.426587 16.5 0.750025 16.5C1.7719 16.5 2.80315 16.2375 3.66096 15.9141C4.09221 15.75 4.49534 15.5672 4.8469 15.3797C6.28596 16.0922 7.9594 16.5 9.75002 16.5ZM21 8.25C21 13.5141 16.3547 17.4797 10.8516 17.9531C11.9906 21.4406 15.7688 24 20.25 24C22.0406 24 23.7141 23.5922 25.1578 22.8797C25.5094 23.0672 25.9078 23.25 26.3391 23.4141C27.1969 23.7375 28.2281 24 29.25 24C29.5735 24 29.8641 23.7891 29.9625 23.4797C30.061 23.1703 29.9531 22.8328 29.6907 22.6406L29.6813 22.6312C29.6719 22.6219 29.6531 22.6125 29.6297 22.5938C29.5828 22.5562 29.5125 22.5 29.4281 22.4203C29.2594 22.2656 29.0297 22.0406 28.8047 21.75C28.5469 21.4219 28.3031 21.0281 28.1391 20.5922C29.3063 19.2328 29.9953 17.5594 29.9953 15.7453C29.9953 11.3953 26.0156 7.82812 20.9672 7.51875C20.986 7.75781 20.9953 8.00156 20.9953 8.24531L21 8.25Z" fill="white"/>
                    </svg>
                </div>
                <LinearContainer
                    from_to="from-[#3B82F6] to-[#1E40AF]"
                    className="pt-12 pb-20 w-full"
                    components={
                        <div className="flex flex-col items-center gap-7 w-full">
                            <h1 className="text-white text-5xl font-semibold">Trung tâm hỗ trợ</h1>
                            <p className="text-xl text-[#DBEAFE] font-light w-160 text-center">Chúng tôi ở đây để giúp bạn tạo ra CV hoàn hảo. Tìm câu trả lời cho câu hỏi của bạn hoặc liên hệ với đội ngũ hỗ trợ.</p>
                            <div className="bg-white py-2 px-2 w-150 flex items-center justify-between gap-2 rounded-lg">
                                <input type="text" className="pl-5 bg-transparent w-full outline-0 placeholder:text-[#ADAEBC]" placeholder="Tìm kiếm câu hỏi của bạn..." />
                                <Button
                                    className="bg_base px-6 py-3 text-md rounded-lg text-white"
                                    childs={<IoSearchSharp className="text-2xl"/>}
                                />
                            </div>       
                        </div>
                    }
                />
                <Container
                    header="Cách chúng tôi có thể giúp bạn"
                    descript=""
                    content={
                        <div className="grid gap-x-8 grid-cols-3 justify-center items-center px-20">
                            <SupportTag
                                bg="from-[#F0FDF4] to-[#DCFCE7] bg-gradient-to-r"
                                icon={
                                    <div className="p-4 bg-[#22C55E] rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 aspect-square" viewBox="0 0 30 24" fill="none">
                                            <path d="M9.75002 16.5C15.136 16.5 19.5 12.8062 19.5 8.25C19.5 3.69375 15.136 0 9.75002 0C4.36409 0 2.47395e-05 3.69375 2.47395e-05 8.25C2.47395e-05 10.0594 0.689087 11.7328 1.85627 13.0969C1.69221 13.5375 1.44846 13.9266 1.19065 14.2547C0.96565 14.5453 0.735962 14.7703 0.567212 14.925C0.482837 15 0.412525 15.0609 0.36565 15.0984C0.342212 15.1172 0.323462 15.1312 0.314087 15.1359L0.304712 15.1453C0.0468997 15.3375 -0.0656003 15.675 0.0375247 15.9797C0.14065 16.2844 0.426587 16.5 0.750025 16.5C1.7719 16.5 2.80315 16.2375 3.66096 15.9141C4.09221 15.75 4.49534 15.5672 4.8469 15.3797C6.28596 16.0922 7.9594 16.5 9.75002 16.5ZM21 8.25C21 13.5141 16.3547 17.4797 10.8516 17.9531C11.9906 21.4406 15.7688 24 20.25 24C22.0406 24 23.7141 23.5922 25.1578 22.8797C25.5094 23.0672 25.9078 23.25 26.3391 23.4141C27.1969 23.7375 28.2281 24 29.25 24C29.5735 24 29.8641 23.7891 29.9625 23.4797C30.061 23.1703 29.9531 22.8328 29.6907 22.6406L29.6813 22.6312C29.6719 22.6219 29.6531 22.6125 29.6297 22.5938C29.5828 22.5562 29.5125 22.5 29.4281 22.4203C29.2594 22.2656 29.0297 22.0406 28.8047 21.75C28.5469 21.4219 28.3031 21.0281 28.1391 20.5922C29.3063 19.2328 29.9953 17.5594 29.9953 15.7453C29.9953 11.3953 26.0156 7.82812 20.9672 7.51875C20.986 7.75781 20.9953 8.00156 20.9953 8.24531L21 8.25Z" fill="white"/>
                                        </svg>
                                    </div>
                                }
                                title="Chat trực tuyến"
                                descript="Nhận hỗ trợ ngay lập tức từ đội ngũ chuyên gia của chúng tôi"
                                text="Bắt đầu chat"
                                btnColor="bg-[#22C55E]"
                            />
                            <SupportTag
                                bg="from-[#EFF6FF] to-[#DBEAFE] bg-gradient-to-r"
                                icon={
                                    <div className="p-4 bg_base rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 aspect-square" viewBox="0 0 24 18" fill="none">
                                            <path d="M2.25 0C1.00781 0 0 1.00781 0 2.25C0 2.95781 0.332813 3.62344 0.9 4.05L11.1 11.7C11.6344 12.0984 12.3656 12.0984 12.9 11.7L23.1 4.05C23.6672 3.62344 24 2.95781 24 2.25C24 1.00781 22.9922 0 21.75 0H2.25ZM0 5.25V15C0 16.6547 1.34531 18 3 18H21C22.6547 18 24 16.6547 24 15V5.25L13.8 12.9C12.7312 13.7016 11.2688 13.7016 10.2 12.9L0 5.25Z" fill="white"/>
                                        </svg>
                                    </div>
                                }
                                title="Email hỗ trợ"
                                descript="Gửi email cho chúng tôi và nhận phản hồi trong 24 giờ"
                                text="Gửi email"
                                btnColor="bg_base"
                            />
                            <SupportTag
                                bg="from-[#FAF5FF] to-[#F3E8FF] bg-gradient-to-r"
                                icon={
                                    <div className="p-4 bg-[#A855F7] rounded-full">
                                        <FaPhone className="w-6 h-6 aspect-square text-white"/>
                                    </div>
                                }
                                title="Điện thoại"
                                descript="Gọi điện trực tiếp cho đội ngũ hỗ trợ của chúng tôi"
                                text="+84 123 456 789"
                                btnColor="bg-[#A855F7]"
                            />
                        </div>
                    }
                />
                <LinearContainer
                    from_to="from-[#fafafa] to-[#fafafa]" 
                    className="pt-12 pb-17"
                    components={
                        <div className="flex flex-col items-center gap-7">
                            <h1 className="text-black text-3xl font-semibold pb-5">Câu hỏi thường gặp</h1>
                            <div className="flex flex-col gap-5 px-5 w-full max-w-5xl">
                                <QuestionBox
                                    q={
                                        <div className="flex items-center justify-between">
                                            <p>Làm thế nào để tạo CV miễn phí?</p>
                                            <IoIosArrowDown className="text-2xl text-[#6B7280]"/>
                                        </div>
                                    }
                                />
                                <QuestionBox
                                    q={
                                        <div className="flex items-center justify-between">
                                            <p>Có bao nhiêu mẫu CV có sẵn?</p>
                                            <IoIosArrowDown className="text-2xl text-[#6B7280]"/>
                                        </div>
                                    }
                                />
                                <QuestionBox
                                    q={
                                        <div className="flex items-center justify-between">
                                            <p>Tôi có thể chỉnh sửa CV sau khi tạo không?</p>
                                            <IoIosArrowDown className="text-2xl text-[#6B7280]"/>
                                        </div>
                                    }
                                />
                                <QuestionBox
                                    q={
                                        <div className="flex items-center justify-between">
                                            <p>CV có thể xuất ra định dạng nào?</p>
                                            <IoIosArrowDown className="text-2xl text-[#6B7280]"/>
                                        </div>
                                    }
                                />
                                <QuestionBox
                                    q={
                                        <div className="flex items-center justify-between">
                                            <p>Dữ liệu của tôi có được bảo mật không?</p>
                                            <IoIosArrowDown className="text-2xl text-[#6B7280]"/>
                                        </div>
                                    }
                                />
                            </div>
                        </div>
                    }
                />
                <Container
                    header="Thông tin liên hệ"
                    descript=""
                    content={
                        <div className="grid gap-x-8 grid-cols-4 justify-center items-center px-20">
                            <ContactTag
                                icon={
                                    <div className="p-5 bg-[#DBEAFE] rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 aspect-square" viewBox="0 0 24 18" fill="none">
                                            <path className="fill-[#2563EB]" d="M2.25 0C1.00781 0 0 1.00781 0 2.25C0 2.95781 0.332813 3.62344 0.9 4.05L11.1 11.7C11.6344 12.0984 12.3656 12.0984 12.9 11.7L23.1 4.05C23.6672 3.62344 24 2.95781 24 2.25C24 1.00781 22.9922 0 21.75 0H2.25ZM0 5.25V15C0 16.6547 1.34531 18 3 18H21C22.6547 18 24 16.6547 24 15V5.25L13.8 12.9C12.7312 13.7016 11.2688 13.7016 10.2 12.9L0 5.25Z"/>
                                        </svg>
                                    </div>
                                }
                                title="Email"
                                info="support@cvbuilder.vn"
                            />
                            <ContactTag
                                icon={
                                    <div className="p-5 bg-[#DCFCE7] rounded-full">
                                        <FaPhone className="w-5 h-5 aspect-square text-[#16A34A]"/>
                                    </div>
                                }
                                title="Điện thoại"
                                info="+84 123 456 789"
                            />
                            <ContactTag
                                icon={
                                    <div className="p-4 bg-[#F3E8FF] rounded-full">
                                        <MdLocationOn className="w-6 h-6 aspect-square text-[#9333EA]"/>
                                    </div>
                                }
                                title="Địa chỉ"
                                info="123 Đường ABC, Quận 1, TP.HCM"
                            />
                            <ContactTag
                                icon={
                                    <div className="p-4 bg-[#FFEDD5] rounded-full">
                                        <FaClock className="w-5 h-5 aspect-square text-[#EA580C]"/>
                                    </div>
                                }
                                title="Giờ làm việc"
                                info="T2-T6: 8:00-18:00"
                            />
                        </div>
                    }
                />
            </div>
        </>
    );
}