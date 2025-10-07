import { useNavigate } from "react-router";
import Button from "../../../../components/Button";
import HeaderInfoTag from "../../components/HeaderInfoTag";

function HeaderLayout(){
    const nav = useNavigate();
    return(
        <div className="py-15 flex justify-evenly items-start bg-gradient-to-r from-[#EFF6FF] to-[#E0E7FF]">
            <div className="">
                <h1 className="capitalize text-5xl font-bold w-150 pb-15">tạo CV chuyên nghiệp <span className="color_base">dễ dàng</span></h1>
                <div className="flex flex-col items-start gap-7">
                    <p className="text-wrap text-md w-110 text-[#4B5563]">Bắt đầu ngay hôm nay! Tạo CV ấn tượng với các mẫu thiết kế hiện đại và công cụ thông minh của chúng tôi.</p>
                    <div className="flex items-center justify-start gap-3">
                        <Button
                            className="font-semibold hover:scale-105 transition ease-in-out border-2 border-[#3b82f6] text-white bg_base px-6 py-4 rounded-lg shadow-2xl"
                            childs="Bắt Đầu Tạo CV"
                            click={()=>{nav("/cv")}}
                        />
                        <Button
                            className="font-semibold hover:scale-105 transition ease-in-out border-2 border-[#3b82f6] color_base bg-transparent px-6 py-4 rounded-lg"
                            childs="Xem Mẫu CV"
                            click={()=>{nav("/cv")}}
                        />
                    </div>
                    <div className="flex items-center justify-start gap-7">
                        <HeaderInfoTag
                            content="50K+"
                            desc="CV đã tạo"
                        />
                        <HeaderInfoTag
                            content="95%"
                            desc="Hài lòng"
                        />
                        <HeaderInfoTag
                            content="24/7"
                            desc="Hỗ trợ"
                        />
                    </div>
                </div>
            </div>
            <img src="hi.png" className=" w-108 rounded-lg shadow-2xl"/>
        </div>
    )
}

export default HeaderLayout;