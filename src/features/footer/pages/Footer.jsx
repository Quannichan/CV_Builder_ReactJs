// import Button from "../../../components/Button";
// import InputText from "../../../components/InputText";
import { useNavigate } from "react-router";
import Logo from "../../../components/Logo";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
// import { IoMdSend } from "react-icons/io";

function Footer(){
    const nav = useNavigate();
    return(
        <div className="px-5 py-10 flex gap-10 justify-evenly">
                <div className="flex justify-evenly items-start gap-10">
                    <div className="text-white text-wrap">
                        <Logo className="pb-2 border-white w-fit" iconClassName="text-white bg_base p-2 bg-white" nameClassName="text-white"/>
                        <p className="text-md text-[#9CA3AF] w-70">Công cụ tạo CV chuyên nghiệp hàng đầu Việt Nam</p>
                    </div>
                    <div>
                        <h1 className="text-md font-bold text-white pb-2 text-nowrap">Sản phẩm</h1>
                        <ul className="text-[#9CA3AF] text-sm text-nowrap leading-7">
                            <li onClick={()=>nav("/cv")}>Mẫu CV</li>
                            <li onClick={()=>nav("/cv_new")}>Tạo CV</li>
                            <li onClick={()=>nav("/")}>Kiểm Tra CV</li>
                            <li onClick={()=>nav("/TermPrivacy")}>Thư Xin Việc</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-evenly items-start gap-10">
                    <div>
                        <h1 className="text-md font-bold text-white pb-2 text-nowrap">Công ty</h1>
                        <ul className="text-[#9CA3AF] text-sm leading-7">
                            <li>Về Chúng Tôi</li>
                            <li>Liên Hệ</li>
                            <li>Chính Sách Bảo Mật</li>
                            <li>Về Chúng Tôi</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-md font-bold text-white pb-3 text-nowrap">Theo dõi</h1>
                        <div className="text-[#ffffffab] text-md flex items-center justify-start gap-2">
                            <div className="bg-[#1F2937] p-3 w-fit rounded-lg">
                                <FaFacebook className=" text-white text-xl "/>
                            </div>
                            <div className="bg-[#1F2937] p-3 w-fit rounded-lg ">
                                <FaTwitter className=" text-white text-xl "/>
                            </div>
                            <div className="bg-[#1F2937] p-3 w-fit rounded-lg ">
                                <FaLinkedin className=" text-white text-xl "/>
                            </div>
                            <div className="bg-[#1F2937] p-3 w-fit rounded-lg ">
                                <FaInstagram className=" text-white text-xl "/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Footer;