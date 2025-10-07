import { useEffect, useRef, useState } from "react";
import LinearContainer from "../../../components/LinearContainer";
import Switch from "../../../components/Switch";
import PriceTag from "../components/PriceTag";
import QuestionBox from "../components/QuestionBox";
import { useNavigate } from "react-router";
import common from "../../../utils/common";
import { useDispatch } from "react-redux";
import { addNotification } from "../../../redux/NotificationRedux";
import userService from "../services/user";
import Popupbox from "../../../components/PopUpBox";
import Button from "../../../components/Button";
import vnpayService from "../../../services/vnpay";
import { Helmet } from "react-helmet";

export default function Price(){

    const dispatch = useDispatch();

    const handleNoti = (content, type) => {
        dispatch(addNotification({ content: content, second: 3, type: type}));
    };

    const [user, setUser] = useState({accountType: 0});
    const [pendingPayment, setPendingPayment] = useState();
    const nav = useNavigate();
    const layoutRef = useRef();
    const cancelPacket = useRef();

    const [isLogin, setisLogin] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            layoutRef.current.classList.remove("opacity-0");
        },10);
        checkisLogin();
    }, []);

    useEffect(()=>{
        if(isLogin){
            FetchUser();
            FetchPendingPayment();
        }
    }, [isLogin]);

    useEffect(()=>{
        setPriceList(
            [{
                type: 0,
                text: user.accountType === 1 && user.accountType === 2 ? "Miễn phí" : user.accountType === 0 ?  "Miễn phí (hiện tại)" : "Miễn phí" ,
                color:"text-black",
                bg: "bg-[#E5E7EB]",
                common: false,
                price: {
                    title : "Personal",
                    price : "0",
                    features : [
                        {feature: "Free 3 CV", check: true},
                        {feature: "5 mẫu cơ bản", check: true},
                        {feature: "Hỗ trợ AI nội dung", check: false},
                        {feature: "Hỗ trợ CV đa ngôn ngữ", check: false},
                        {feature: "Xuất file PDF (có logo)", check: false},
                        {feature: "Cover Letter AI", check: false},
                        {feature: "Hỗ trợ kỹ thuật cơ bản", check: true},
                    ]
                }
            },
            {
                type: 1,
                common: true,
                text    : 
                !pendingPayment 
                ? 
                    user.accountType === 0 && user.accountType === 2 
                    ? 
                    "Chọn gói tiêu chuẩn" 
                    : 
                        user.accountType === 1 
                        ?  
                        "Hủy gói tiêu chuẩn (hiện tại)" 
                        : 
                        "Chọn gói tiêu chuẩn" 
                :
                    pendingPayment.type === 1 
                    ? 
                    "Chờ thanh toán..." 
                    : 
                        user.accountType === 0 && user.accountType === 2 
                        ? 
                        "Chọn gói tiêu chuẩn" 
                        : 
                            user.accountType === 1 
                            ?  
                            "Hủy gói tiêu chuẩn (hiện tại)" 
                            : 
                            "Chọn gói tiêu chuẩn" ,

                color   : 
                !pendingPayment 
                ? 
                    user.accountType === 0 || user.accountType === 2 
                    ?
                    "text-white" 
                    : 
                        user.accountType === 1 
                        ?  
                        "text-black" 
                        : 
                        "text-white" 
                : 
                    pendingPayment.type === 1
                    ? 
                    "text-black" 
                    : 
                        user.accountType === 0 || user.accountType === 2 
                        ?
                        "text-white" 
                        :
                            user.accountType === 1 
                            ?  
                            "text-black" 
                            : 
                            "text-white" ,

                bg      : 
                !pendingPayment 
                ? 
                    user.accountType === 0 || user.accountType === 2 
                    ? 
                    "bg-[#3B82F6]" 
                    : 
                        user.accountType === 1 
                        ?  
                        "bg-[#E5E7EB]" 
                        : 
                        "bg-[#3B82F6]" 
                : 
                    pendingPayment.type === 1 
                    ? 
                    "bg-[#E5E7EB]" 
                    : 
                        user.accountType === 0 || user.accountType === 2 
                        ? 
                        "bg-[#3B82F6]" 
                        : 
                            user.accountType === 1 
                            ?  
                            "bg-[#E5E7EB]" 
                            : 
                            "bg-[#3B82F6]",

                price: {
                    title : "Standard",
                    price : "99.000",
                    features : [
                        {feature: "Free 10 CV", check: true},
                        {feature: "Mẫu cơ bản + nâng cao", check: true},
                        {feature: "Gợi ý AI nội dung cơ bản", check: true},
                        {feature: "Hỗ trợ CV đa ngôn ngữ", check: false},
                        {feature: "Xuất file PDF/PNG (không logo)", check: true},
                        {feature: "Cover Letter AI", check: false},
                        {feature: "Hỗ trợ ưu tiên (email/chatbot)", check: true},
                    ]
                }
            },
            {
                type: 2,
                common: false,
                text    :
                !pendingPayment 
                ?
                user.accountType === 0 || user.accountType === 1 
                ? 
                "Chọn gói chuyên nghiệp" 
                : 
                    user.accountType === 2 
                    ?  
                    "Hủy gói chuyên nghiệp (hiện tại)" 
                    : 
                    "Chọn gói chuyên nghiệp"
                :
                pendingPayment.type === 2
                    ? 
                    "Chờ thanh toán..."
                    : 
                        user.accountType === 0 || user.accountType === 1 
                        ? 
                        "Chọn gói chuyên nghiệp" 
                        : 
                            user.accountType === 2
                            ?  
                            "Hủy gói chuyên nghiệp (hiện tại)" 
                            : 
                            "Chọn gói chuyên nghiệp",

                color   :
                !pendingPayment 
                ?
                    user.accountType === 0 || user.accountType === 1 
                    ? 
                    "text-white" 
                    : 
                        user.accountType === 2 
                        ?  
                        "text-black" 
                        : 
                        "text-white"
                : pendingPayment.type === 2
                    ? 
                    "text-black"
                    : 
                        user.accountType === 0 || user.accountType === 1 
                        ? 
                        "text-white" 
                        : 
                            user.accountType === 2 
                            ?  
                            "text-black" 
                            : 
                            "text-white",

                bg: 
                !pendingPayment
                ?
                    user.accountType === 0 || user.accountType === 1 
                    ? 
                    "bg-linear-to-r from-[#9333EA] to-[#DB2777]" 
                    : 
                        user.accountType === 2 
                        ? 
                        "bg-[#E5E7EB]" 
                        : 
                        "bg-linear-to-r from-[#9333EA] to-[#DB2777]"
                : pendingPayment.type === 2
                    ? 
                    "bg-[#E5E7EB]"
                    : 
                        user.accountType === 0 || user.accountType === 1 
                        ? 
                        "bg-linear-to-r from-[#9333EA] to-[#DB2777]" 
                        : 
                            user.accountType === 2 
                            ? 
                            "bg-[#E5E7EB]" 
                            : 
                            "bg-linear-to-r from-[#9333EA] to-[#DB2777]",
                
                price: {
                    title : "Professional",
                    price : "199.000",
                    features : [
                        {feature: "Không giới hạn tạo CV", check: true},
                        {feature: "Full mẫu + chuyên ngành", check: true},
                        {feature: "Gợi ý chi tiết + chỉnh sửa tự động bằng AI", check: true},
                        {feature: "Hỗ trợ đa ngôn ngữ", check: true},
                        {feature: "Xuất PDF/PNG + chia sẻ link cá nhân", check: true},
                        {feature: "Cover Letter AI theo ngành nghề/job title", check: true},
                        {feature: "Tư vấn định hướng chuyên sâu", check: true},
                    ]
                }
            }]
        );
    }, [user.accountType, pendingPayment])

    const FetchPendingPayment = function(){
        vnpayService.getPending(
            function(d){
                if(d.status === 2000){
                    setPendingPayment(d.data);
                }
            },
            function(e){
                console.error(e);
            }
        );
    }

    const FetchUser = function(){
        userService.getAuth(
            function(d){
                if(d.status === 2000){
                    setUser(d.data);
                }
            },
            function(e){
                console.error(e);
            }
        )
    }

    const checkisLogin = function(){
        common.check_login({
            suc: function(d){
                if(d.status === 2000){
                    setisLogin(true);
                }else{
                    common.ClearLocal();
                }
            },
            err : function(e){
                console.error(e);
                handleNoti("Đã xảy ra lỗi!", 2);
                common.ClearLocal();
            }
        })
    }

    // eslint-disable-next-line no-unused-vars
    const [priceList, setPriceList] = useState([]);

    const BuyPacket = function(type){
        if(type){
            if(pendingPayment && type === pendingPayment.type){
                nav(`/payment?id=${pendingPayment.id}`);
            }else{
                vnpayService.create_payment(
                    type,
                    function(d){
                        if(d.status === 2000){
                            window.location.href = d.data
                        }else{
                            handleNoti("Không thể thực hiện giao dịch!", 2)
                        }
                    },
                    function(e){
                        console.error(e);
                        handleNoti("Đã xảy ra lỗi, không thể thực hiện giao dịch!", 2);
                    }
                )
            }
        }
    }

    const CancelPacket = function(type){
        if(type)
            cancelPacket.current.classList.remove("hidden");
    }

    const handleCancel = function(){
        vnpayService.cancel(
            function(d){
                if(d.status === 2000){
                    handleNoti("Bạn đã hủy gói thành công!", 1);
                    FetchUser();
                }else{
                    handleNoti("Không thể hủy gói!", 2);
                }
            },
            function(e){
                console.error(e);
                handleNoti("Đã xảy ra lỗi!", 2);
            }
        )
    }

    const redirect = function(){
        handleNoti("Đăng nhập để sở hữu các gói ưu đãi nhé!",1);
        nav("/auth/login?redirect=price");
    }

    return(
        <>
            <Helmet><title>CV Builder | Bảng giá</title></Helmet>
            <div className="w-screen opacity-0 transition-opacity ease-in-out" ref={layoutRef}>
                <Popupbox ref={cancelPacket} title={<span className="color_base text-xl">Thông báo !</span>} message={<p className="py-3 text-center text-md">Bạn chắc chắn muốn hủy gói này không?</p>} childs={
                    <div className="pt-2 w-full flex items-center justify-between gap-2">
                        <Button
                            className="bg_base px-3 py-2  text-sm rounded-lg text-white transition ease-in-out hover:shadow-2xl"
                            childs="Không"
                            click={()=>{
                                cancelPacket.current.classList.add("hidden");
                            }}
                        />
                        <Button
                            className="bg_base px-3 py-2 rounded-md text-sm text-white transition ease-in-out hover:shadow-2xl"
                            childs="Xác nhận"
                            click={()=>{
                                handleCancel();
                                cancelPacket.current.classList.add("hidden");
                            }}
                        />
                    </div>
                }/>
                <LinearContainer
                    from_to="from-[#EFF6FF] to-[#E0E7FF]" 
                    className="pt-12 pb-17"
                    components={
                        <div className="flex flex-col items-center gap-7">
                            <h1 className="text-black text-4xl font-semibold">Chọn gói phù hợp với bạn</h1>
                            <p className="text-md text-[#4B5563]">Tạo CV chuyên nghiệp với các tính năng phù hợp cho mọi nhu cầu</p>
                            <p className="text-[#4B5563] text-sm flex items-center gap-3">
                                Thanh toán hàng tháng <Switch/> <p>Thanh toán hàng năm <span className="text-[#16A34A]">(Tiết kiệm 20%)</span></p>
                            </p>
                        </div>
                    }
                />
                <LinearContainer
                    className="py-15"
                    components={
                        <div className="flex justify-center items-center gap-10">
                            {
                                priceList.length
                                ?
                                priceList.map((p, index) => (
                                    <PriceTag callback={()=>{isLogin ? user.accountType === p.type ? CancelPacket(p.type) : BuyPacket(p.type) : redirect()}} key={index} btnColor={p.bg} btnText={p.text} btnTextColor={p.color} isCommon={p.common} price={p.price}/>
                                ))
                                :
                                <></>
                            }
                        </div>
                    }
                />
                <LinearContainer
                    from_to="from-[#fafafa] to-[#fafafa]" 
                    className="pt-12 pb-17"
                    components={
                        <div className="flex flex-col items-center gap-7">
                            <h1 className="text-black text-3xl font-semibold">Câu hỏi thường gặp</h1>
                            <p className="text-lg text-[#4B5563] pb-3">Tìm hiểu thêm về các gói dịch vụ của chúng tôi</p>
                            <div className="flex flex-col gap-5 px-5">
                                <QuestionBox
                                    q="Tôi có thể thay đổi gói bất cứ lúc nào không?"
                                    a="Có, bạn có thể nâng cấp hoặc hạ cấp gói dịch vụ bất cứ lúc nào. Thay đổi sẽ có hiệu lực ngay lập tức."
                                />
                                <QuestionBox
                                    q="Có được hoàn tiền không?"
                                    a="Chúng tôi cung cấp chính sách hoàn tiền 30 ngày cho tất cả các gói trả phí."
                                />
                            </div>
                        </div>
                    }
                />
           </div>
        </>
    );
}
