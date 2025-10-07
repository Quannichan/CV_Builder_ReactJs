import HeaderLogo from "../../../components/Logo";
import { useLocation, useNavigate } from "react-router";
import Button from "../../../components/Button";
import { useEffect, useRef } from "react";
import common from "../../../utils/common";
import HeaderNav from "../layouts/childs/HeaderNav";


function Header(){
    const locat = useLocation();
    const nav = useNavigate();

    const authRef = useRef();
    const userRef = useRef();

    const headerRef = useRef();

    // const [searchParams] = useSearchParams();

    useEffect(()=>{
        // isHeaderFixed();
        // bindeventheaderFixed();
        showGrp();
    }, [locat]);

    useEffect(()=>{
        // isHeaderFixed();
        // bindeventheaderFixed();
        showGrp();
    }, []);

    const showGrp = function(){
        if(common.UID){
            authRef.current.classList.remove("flex");
            authRef.current.classList.add("hidden");

            userRef.current.classList.remove("hidden");
            userRef.current.classList.add("flex");
        }else{
            authRef.current.classList.add("flex");
            authRef.current.classList.remove("hidden");

            userRef.current.classList.add("hidden");
            userRef.current.classList.remove("flex");
        }
    }

    // const isHeaderFixed = function(){
    //     if ($(window).scrollTop() === 0) {
    //         headerRef.current.classList.remove("fixed");
    //     } else {
    //         headerRef.current.classList.add("fixed");
    //     }
    // }

    // const bindeventheaderFixed = function(){
    //     $(window).scroll(function() {
    //         if ($(window).scrollTop() === 0) {
    //             headerRef.current.classList.remove("fixed");
    //         } else {
    //             headerRef.current.classList.add("fixed");
    //         }
    //     });
    // }

    return(
        <div className="flex items-center bg-white py-2 px-10 justify-between z-[1000] w-screen shadow-sm" ref={headerRef}>
            <HeaderLogo callBack={()=>{nav("/")}} />

            <HeaderNav
                navEl={[
                    {
                        name: "Trang chủ",
                        path: "/"
                    },
                    {
                        name: "Mẫu CV",
                        path: "/cv"
                    },
                    {
                        name: "Tính năng",
                        path: "/feature"
                    },
                    {
                        name: "Bảng giá",
                        path: "/price"
                    },
                    {
                        name: "Hỗ trợ",
                        path: "/support"
                    },
                ]}
            />

            <div className="flex justify-center items-center gap-3" ref={authRef}>
                <Button click={()=>{nav("/auth/login")}} className="group hover:bg-[#e4e4e4] transition ease-in-out cursor-pointer px-2 py-1 bg-white hover:shadow-2xl" childs="Đăng nhập"/>
                <Button click={()=>{nav("/auth/register")}} className="group hidden sm:block md:block lg:block xl:block bg_base px-3 py-1 border-1 rounded-md border-[white] text-white" childs="Đăng ký"/>
            </div>
            
            <div className="hidden justify-center items-center gap-1 md:gap-2 lg:gap-3 xl:gap-3" ref={userRef}>
                <div className="flex justify-center items-center gap-0 border-2 border-[#e9e9e97b] rounded-full">
                    <img onClick={()=>{nav("/account")}} className="cursor-pointer w-7 sm:w-8 md:w-9 lg:w-9 xl:w-9 aspect-square object-cover rounded-full " src={common.UIMG} alt="avatar"/>
                </div>
            </div>
        </div>
    );
}

export default Header;