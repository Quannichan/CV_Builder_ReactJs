import { useEffect, useRef, useState } from "react";
import AccountInfo from "../layouts/childs/AccountInfo";
import TabHead from "../layouts/childs/TabHead";
import AccountPost from "../layouts/childs/AccountPost";
import { useNavigate } from "react-router";
import AccountEdit from "../layouts/childs/AccountEdit";
import common from "../../../utils/common";
import { useDispatch } from "react-redux";
import { addNotification } from "../../../redux/NotificationRedux";
import Acc from "../services/account";
import { useSearchParams } from "react-router-dom";
import AccountChangePass from "../layouts/childs/AccountChangePass";
import { Helmet } from "react-helmet";
import AccountPostSample from "../layouts/childs/AccountPostSample";

function Account(){

    const [posts, setPosts] = useState([]);
    const [isLogin, setisLogin] = useState(false);
    
    const dispatch = useDispatch();

    const prevPage = useRef(null);
    const postPage = useRef(null);
    const editPage = useRef(null);
    const postSamplePage = useRef(null);
    const passPage = useRef(null);

    const [searchParams] = useSearchParams();
    const nav = useNavigate();

    const [user, setUser] = useState({});

    const handleNoti = (content, type) => {
        dispatch(addNotification({ content: content, second: 5, type: type}));
    };

    const FetchUserInfo = function(){
        Acc.getInfo(
            {
                id : common.UID
            },
            function(d){
                if(d.status === 2000){
                    if(d.data.posts){
                        const user = d.data;
                        const posts = d.data.posts;
                        var stars = 0;
                        posts.forEach((p) => { 
                            if(p.comments > 0){
                                p.comments.forEach((c)=>{
                                    stars+=c.start;
                                })
                            }
                        });
                        d.data.stars = stars
                        setUser(d.data);
                        posts.forEach((p) => { p.user = user  });
                        setPosts(posts);
                    }
                }else{
                    handleNoti("Đã xảy ra lỗi!", 2);
                }
            },
            function(e){
                handleNoti("Đã xảy ra lỗi!", 2);
                console.log(e);
            }
        )
    }

    useEffect(()=>{
        checkisLogin();
        common.Update_uD();
    }, []);

    useEffect(()=>{
        if(isLogin){
            checkParam();
            FetchUserInfo();
        }
        common.scrool_to_top();
    }, [searchParams, isLogin])

    const checkisLogin = function(){
        common.check_login({
            suc: function(d){
                if(d.status === 2000){
                    setisLogin(true);
                }else{
                    common.ClearLocal();
                    nav("/auth/login");
                }
            },
            err : function(e){
                console.error(e);
                handleNoti("Đã xảy ra lỗi!", 2);
                common.ClearLocal();
                nav("/auth/login");
            }
        })
    }

    const checkParam = function(){
        try{
            const param = searchParams.get("page");
            if(param === undefined || param === null){
                nav("/account?page=preview");
            }else if(param === "preview"){
                prevPage.current.classList.remove("hidden");
                setTimeout(()=>{
                    prevPage.current.classList.remove("opacity-0");
                }, 100);

                postPage.current.classList.add("opacity-0", "hidden");
                

                editPage.current.classList.add("opacity-0", "hidden");
                
                passPage.current.classList.add("opacity-0", "hidden");

                postSamplePage.current.classList.add("opacity-0", "hidden");

            }else if(param === "cv"){
                postPage.current.classList.remove("hidden");
                setTimeout(()=>{
                    postPage.current.classList.remove("opacity-0");
                }, 100);

                prevPage.current.classList.add("opacity-0", "hidden");

                editPage.current.classList.add("opacity-0", "hidden");

                passPage.current.classList.add("opacity-0", "hidden");

                postSamplePage.current.classList.add("opacity-0", "hidden");

            }else if(param === "edit"){
                editPage.current.classList.remove("hidden");
                setTimeout(()=>{
                    editPage.current.classList.remove("opacity-0");
                }, 100);

                prevPage.current.classList.add("opacity-0", "hidden");

                postPage.current.classList.add("opacity-0", "hidden");
                
                passPage.current.classList.add("opacity-0", "hidden");

                postSamplePage.current.classList.add("opacity-0", "hidden");

            }else if(param === "changepass"){
                passPage.current.classList.remove("hidden");
                setTimeout(()=>{
                    passPage.current.classList.remove("opacity-0");
                }, 100);

                prevPage.current.classList.add("opacity-0", "hidden");

                postPage.current.classList.add("opacity-0", "hidden");
                
                editPage.current.classList.add("opacity-0", "hidden");

                postSamplePage.current.classList.add("opacity-0", "hidden");
            }
            else if(param === "cvSample"){
                postSamplePage.current.classList.remove("hidden");
                setTimeout(()=>{
                    postSamplePage.current.classList.remove("opacity-0");
                }, 100);

                prevPage.current.classList.add("opacity-0", "hidden");

                postPage.current.classList.add("opacity-0", "hidden");
                
                editPage.current.classList.add("opacity-0", "hidden");

                passPage.current.classList.add("opacity-0", "hidden");
            }
        }catch(err){
            nav("/account?page=preview");
            console.log(err);
        }
    }

    return(
        <>
            <Helmet><title>CV Builder | Tài khoản</title></Helmet>
            <div className="w-full py-5 px-1">
                {/* Tab header */}
                <TabHead
                    tabs={
                        common.UROLE === "SUPADM"
                        ?
                        [
                            {
                                name: "Tài khoản",
                                path: "preview"
                            },
                            {
                                name: "CV",
                                path: "cv"
                            },
                            {
                                name: "Mẫu CV",
                                path: "cvSample"
                            },
                            {
                                name: "Thông tin",
                                path: "edit"
                            },
                            {
                                name: "Đổi mật khẩu",
                                path: "changepass"
                            }
                        ]
                        :
                        [
                            {
                                name: "Tài khoản",
                                path: "preview"
                            },
                            {
                                name: "CV",
                                path: "cv"
                            },
                            {
                                name: "Thông tin",
                                path: "edit"
                            },
                            {
                                name: "Đổi mật khẩu",
                                path: "changepass"
                            }
                        ]
                    }
                />

                {/* Account preivew */}
                <div className="hidden w-full opacity-0 transition-opacity ease-in-out" ref={prevPage}>
                    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-evenly items-center sm:items-center md:items-center lg:items-start xl:items-start gap-10 w-full">
                        {/* Account Info */}
                        <AccountInfo user={user}/>
                            
                    </div>
                </div>

                {/* Account post */}
                <div className="hidden w-full opacity-0 transition-opacity ease-in-out" ref={postPage}>
                    <AccountPost posts={posts} />
                </div>

                {/* post sample */}
                <div className="hidden w-full opacity-0 transition-opacity ease-in-out" ref={postSamplePage}>
                    {
                        common.UROLE === "SUPADM"
                        ?
                        <AccountPostSample />
                        :
                        null
                    }
                </div>

                <div className="hidden w-full opacity-0 transition-opacity ease-in-out" ref={editPage}>
                    {/* Account edit */}
                    <AccountEdit user={user} callback={FetchUserInfo} />
                </div>

                <div className="hidden w-full opacity-0 transition-opacity ease-in-out" ref={passPage}>
                    {/* Password edit */}
                    <AccountChangePass callback={FetchUserInfo} />
                </div>
            </div>
        </>
    );
}

export default Account;