import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addNotification } from "../../../redux/NotificationRedux";
import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router-dom";
import PostLibrary from "../../library/pages/PostLibrary";
import i18n from "../../../i18n/config";
import postService from "../../../services/post";

function Post(){

    const dispatch = useDispatch();
    const handleNoti = (content, type) => {
        dispatch(addNotification({ content: content, second: 5, type: type}));
    };

    const [searchParams] = useSearchParams();

    const nav = useNavigate();
    const [postId, setPostId] = useState(0);
    const [cvType, setCvType] = useState(0);
    const [font, setFont] = useState("");
    const [waterMark, setWaterMark] = useState(true);
    const [isExist, setIsExist] = useState(false);
    const [lang, setLang] = useState("vi");

    const [post, setPost] = useState({
            // information
            birthdate:{
                show: true,
                value: "",
            },
            address:{
                show: true,
                value: "",
            },
            phone:{
                show: true,
                value: "",
            },
            mail:{
                show: true,
                value: "",
            },
            // platform
            reddit: {
                show: true,
                value: "",
            },
            linkedin:{
                show: true,
                value: "",
            },
            github:{
                show: true,
                value: "",
            },
            twitter:{
                show: true,
                value: "",
            },
            facebook:{
                show: true,
                value: "",
            },
            portfolio:{
                show: true,
                value: "",
            },

            // personal
            experience:[],
            education:[],
            skill:[],
            activity:[],
            certificate:[],
            project:[],
            hobby: [],
            language: [],
        }
    );

    const getParams = function(){
        const id = searchParams.get("id");
        if(id){
            setPostId(id);
        }else{
            nav("/");
        }
    }

    useEffect(()=>{
        if(postId !== 0){
            FetchPost();
        }
    }, [postId]);

    useEffect(()=>{
        i18n.changeLanguage(lang);
    }, [lang]);

    useEffect(()=>{
        getParams();
    }, []);

    // fetch post
    const FetchPost = function(){
        postService.get(
            postId, 
            function(d){
                if(d.status === 2000){
                    if(d.msg){
                        handleNoti(d.msg, 2);
                        nav("/");
                    }else{
                        setCvType(d.data.stat02);
                        setFont(d.data.typ01);
                        setPost(JSON.parse(d.data.content))
                        setCvType(d.data.idSample*1);
                        setIsExist(true);
                        setLang(d.data.lang);
                        setWaterMark(d.data.stat02*1 == 1 ? true : false);
                    }
                }else{
                    handleNoti("Không thể lấy dữ liệu cv !", 2)
                    nav("/");
                }
            },
            function(er){
                console.log(er);
                handleNoti("Không thể lấy dữ liệu cv !", 2);
                nav("/");
            }
        )
    }
        
    return(
        <>
            <Helmet><title>CV Builder | Xem CV</title></Helmet>
            <div className="px-5 py-0 sm:py-0 md:py-5 lg:py-10 xl:py-10 sm:px-5 md:px-3 lg:px-10 xl:px-10">
            {
                isExist
                ?
                    <PostLibrary
                        state={setIsExist}
                        isWaterMark={waterMark}
                        ref={null}
                        post={post}
                        type={cvType}
                        isPNG={true}
                        isPreview={true}
                        font={font}
                        change={{
                            show        : null,
                            value       : null,
                            valueSinge  : null,
                            valueArr    : null,
                            remove      : null,
                            add         : null
                        }}
                    />
                :
                <div className="h-100 text-center flex items-center justify-center font-bold text-2xl">Không tìm thấy CV</div>
            }
            </div>
        </>
    );
}

export default Post;
