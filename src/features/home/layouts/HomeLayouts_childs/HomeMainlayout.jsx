import Container from "../../../../components/Container";
import FeatureTag from "../../components/FeatureTag";

import { IoMdColorPalette } from "react-icons/io";
import { BiSolidMagicWand } from "react-icons/bi";
import { FaDownload } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { BsQuestionLg } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

/* eslint-disable react/prop-types */
function HomeMainLayout(){
    return(
        <div>
            <Container
                header="Tại sao chọn CV Builder"
                descript="Công cụ tạo CV hàng đầu với nhiều tính năng vượt trội giúp bạn nổi bật trong mắt nhà tuyển dụng"
                content={
                    <div className="grid gap-x-3 gap-y-8 grid-cols-3 justify-center items-center px-22">
                        <FeatureTag
                            icon={<div className="text-white bg_base w-fit text-[25px] p-2 rounded-md"><IoMdColorPalette /></div>}
                            title="Mẫu Thiết Kế Đẹp"
                            descript="Hơn 50+ mẫu CV chuyên nghiệp, hiện đại được thiết kế bởi các chuyên gia UX/UI"
                        />
                        <FeatureTag
                            icon={<div className="text-white bg_base w-fit text-[25px] p-2 rounded-md"><BiSolidMagicWand /></div>}
                            title="AI Thông Minh"
                            descript="Công nghệ AI giúp tối ưu nội dung CV và gợi ý từ khóa phù hợp với vị trí ứng tuyển"
                        />
                        <FeatureTag
                            icon={<div className="text-white bg_base w-fit text-[20px] p-3 rounded-md"><FaDownload/></div>}
                            title="Xuất Đa Định Dạng"
                            descript="Tải CV dưới nhiều định dạng: PDF, Word, PNG với chất lượng in ấn cao"
                        />
                        <FeatureTag
                            icon={<div className="text-white bg_base w-fit text-[20px] p-3 rounded-md"><GoClockFill/></div>}
                            title="Nhanh Chóng"
                            descript="Tạo CV chuyên nghiệp chỉ trong 5 phút với giao diện drag & drop đơn giản"
                        />
                        <FeatureTag
                            icon={<div className="text-white bg_base w-fit text-[20px] p-3 rounded-md"><BsQuestionLg className="border-1 border-dashed rounded-full"/></div>}
                            title="Bảo Mật Cao"
                            descript="Thông tin cá nhân được mã hóa và bảo vệ theo tiêu chuẩn bảo mật quốc tế"
                        />
                        <FeatureTag
                            icon={<div className="text-white bg_base w-fit text-[20px] p-3 rounded-md"><BiSupport/></div>}
                            title="Hỗ Trợ 24/7"
                            descript="Đội ngũ chuyên gia sẵn sàng hỗ trợ bạn mọi lúc qua chat, email và điện thoại"
                        />
                    </div>
                }
            />
        </div>
    );
}

export default HomeMainLayout;