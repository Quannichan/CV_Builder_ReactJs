import { useEffect, useRef, useState } from "react";
import Button from "../../../components/Button";
import common from "../../../utils/common";
import { useDispatch } from "react-redux";
import { addNotification } from "../../../redux/NotificationRedux";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";
import AccNewPost from "../services/account";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { IoMdSave } from "react-icons/io";
import { FaShare } from "react-icons/fa";
import { FaFilePdf, FaFileImage  } from "react-icons/fa6";
import PostLibrary from "../../library/pages/PostLibrary";
import { useSearchParams } from "react-router-dom";
import InputSelect from "../../../components/InputSelect";
import mapping from "../../../utils/mapping";
import i18n from "../../../i18n/config";
import { toPng } from "html-to-image";
import postService from "../../../services/post";
import Popupbox from "../../../components/PopUpBox";
import InputText from "../../../components/InputText";
import Loading from "../../../components/Loading";
import userService from "../services/user";
import { IoMdAdd, IoIosRemoveCircleOutline } from "react-icons/io";
import Switch from "../../../components/Switch";
import CrownsTop from "../components/CrownsTop";
import aiService from "../../../services/AI";
import { MdAutoFixHigh } from "react-icons/md";
import { RiAiGenerate2 } from "react-icons/ri";

function PostWorkspace(){

    const dispatch = useDispatch();
    const nav = useNavigate();

    const contentRef = useRef();
    const popupRef = useRef();
    const searchPerson = useRef();

    const [isPreview, setIsPreview] = useState(false);

    const [isPDF, setIsPDF] = useState(false);
    const [isPNG, setIsPNG] = useState(false);
    const [isSave, setIsSave] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);

    const [cvType, setCvType] = useState(null);
    const [font, setFont] = useState("_");
    const [userShared, setUserShared] = useState([]);
    const [userSearch, setUserSearch] = useState([]);
    const [share, setShare] = useState(1);
    const [lang, setLang] = useState("vi");
    const [waterMark, setIsWaterMark] = useState(true);

    const [GenAI, setGenAI] = useState("");
    const [isGenAI, setIsGenAI] = useState(false);

    const [GenBaseAI, setGenBaseAI] = useState("");
    const [isGenBaseAI, setIsGenBaseAI] = useState(false);

    const [isFixAI, setIsFixAI] = useState(false);

    const [idPost, setIdPost] = useState(null);

    const [isExist, setIsExist] = useState(true);

    const [searchParams] = useSearchParams();

    const handleNoti = (content, type) => {
        dispatch(addNotification({ content: content, second: 5, type: type}));
    };

    const [user, setUser] = useState(null);
    const [post, setPost] = useState(
        {
            // information
            birthdate:{
                show: true,
                value: null,
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
        });

    const show = function(e){
        setPost((prev) => ({
            ...prev,
            [e.target.name]: {
                ...prev[e.target.name],
                show: e.target.checked
            }
        }));
    }

    const value = function(e){
        setPost((prev) => ({
            ...prev,
            [e.target.name]: {
                ...prev[e.target.name],
                value: e.target.value
            }
        }));
    }

    const value_Single = function(e){
        setPost((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const valueArr = function(e, name, index){
        var arr = post[name];
        arr[index][e.target.name] = e.target.value;
        setPost((prev) => ({
            ...prev,
            [name]: arr
        }));
    }

    const remove = function(name, index){
        var arr = post[name];
        arr.splice(index, 1);
        setPost((prev) => ({
            ...prev,
            [name]: arr
        }));
    }

    const add = function(name){
        var arr = post[name];
        arr.push({
            title: "",
            descript: "",
            from : "",
            to: ""
        });
        setPost((prev) => ({
            ...prev,
            [name]: arr
        }));
    }

    const [isLogin, setisLogin] = useState(false);

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

    const getParams = function(){
        try{
            const type = searchParams.get("t");
            const id = searchParams.get("id");
            if(id || type){
                if(type){
                    setCvType(type * 1);
                }
                if(id){
                    setIdPost(id);
                }
            }else{
                nav("/cv");
            }
        }catch(err){
            nav("/cv");
            console.log(err);
        }

    }

    const GetPost = function(){
        postService.getAuth(
            {
                iduser : common.UID,
                id : idPost
            },
            function(d){
                if(d.status === common.CODE_OK){
                    setCvType(d.data.idSample*1);
                    setIsExist(true);
                    setShare(d.data.stat01*1);
                    setLang(d.data.lang);
                    setFont(d.data.typ01);
                    setIsWaterMark(d.data.stat02*1 == 1 ? true : false);
                    const p = JSON.parse(d.data.content);
                    var shd = d.data.SharedPosts.map(ushd=>{return {id: ushd.user.id, name: ushd.user.name, ava: ushd.user.ava, mail: ushd.user.mail}})
                    setUserShared(shd);
                    setPost(p);
                }else{
                    nav("/");
                }
            },
            function(e){
                nav("/");
                console.log(e);
            }
        );
    }

    useEffect(()=>{
        getParams();
        checkisLogin();
    }, []);

    useEffect(()=>{
        if(isLogin){                
            FetchUserInfo();
        }
        common.scrool_to_top();
    }, [isLogin]);

    useEffect(()=>{
        if(user){
            setPost(
                {
                    // information
                    iduser: user.id,
                    ava : user.ava,
                    job: user.job,
                    name: user.name,
                    descript: user.descript,
                    birthdate:{
                        show: true,
                        value: user.birthdate ? user.birthdate : "",
                    },
                    address:{
                        show: true,
                        value: user.address ? user.address : "",
                    },
                    phone:{
                        show: true,
                        value: user.phone ? user.phone : "",
                    },
                    mail:{
                        show: true,
                        value: user.mail ? user.mail : "",
                    },
                    // platform
                    reddit: {
                        show: true,
                        value: user.reddit ? user.reddit : "",
                    },
                    linkedin:{
                        show: true,
                        value: user.linked ? user.linked : "",
                    },
                    github:{
                        show: true,
                        value: user.github ? user.github : "",
                    },
                    twitter:{
                        show: true,
                        value: user.twitter ? user.twitter : "",
                    },
                    facebook:{
                        show: true,
                        value: user.facebook ? user.facebook : "",
                    },
                    portfolio:{
                        show: true,
                        value: user.portfolio ? user.portfolio : "",
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
            if(idPost)
                GetPost();
        }
    }, [user]);

    const FetchUserInfo = function(){
        AccNewPost.getInfo(
            {
                id : common.UID
            },
            function(d){
                if(d.status === 2000){
                    if(d.data.posts){
                        setUser(d.data);
                    }
                }else{
                    handleNoti("Không thể xác thực thông tin người đăng!", 2);
                }
            },
            function(e){
                handleNoti("Đã xảy ra lỗi không mong muốn, vui lòng thử lại sau!", 2);
                console.log(e);
            }
        )
    }

    const CallAIGen = async function(){
        if(GenAI.length < 0){
            handleNoti("Hãy nhập gợi ý CV của bạn!", 2);
            return;
        }
        setIsGenAI(true);
        handleNoti("Vui lòng chờ, AI đang suy nghĩ...", 1);
        aiService.gen(
            {
                descript: GenAI,
                content: JSON.stringify(post)
            },
            function(d){
                if(d.status === common.CODE_OK){
                    handleNoti("Đã gợi ý xong!", 1);
                    setPost(d.data);
                    common.scroll_to_el("#cv_wrap");
                }else{
                    handleNoti("Đã xảy ra lỗi, vui lòng thử lại!", 2);
                }
                setIsGenAI(false);
            },
            function(e){
                console.log(e);
                handleNoti("Đã xảy ra lỗi!", 2);
                setIsGenAI(false);
            }
        )
    }

    const CallAIGenBase = async function(){
        if(GenBaseAI.length < 0){
            handleNoti("Hãy nhập vị trí bạn muốn ứng tuyển!", 2);
            return;
        }
        setIsGenBaseAI(true);
        handleNoti("Vui lòng chờ, AI đang suy nghĩ...", 1);
        aiService.genBase(
            {
                job: GenBaseAI,
                content: JSON.stringify(post)
            },
            function(d){
                if(d.status === common.CODE_OK){
                    handleNoti("Đã gợi ý xong!", 1);
                    setPost(d.data);
                    common.scroll_to_el("#cv_wrap");
                }else{
                    handleNoti("Đã xảy ra lỗi, vui lòng thử lại!", 2);
                }
                setIsGenBaseAI(false);
            },
            function(e){
                console.log(e);
                handleNoti("Đã xảy ra lỗi!", 2);
                setIsGenBaseAI(false);
            }
        )
    }

    const CallAIFix = async function(){
        setIsFixAI(true);
        handleNoti("Vui lòng chờ, AI đang quét và chỉnh sửa cv...", 1);
        aiService.Fix(
            {
                content: JSON.stringify(post)
            },
            function(d){
                if(d.status === common.CODE_OK){
                    handleNoti("Đã chỉnh sửa xong!", 1);
                    setPost(d.data);
                    common.scroll_to_el("#cv_wrap");
                }else{
                    handleNoti("Đã xảy ra lỗi, vui lòng thử lại!", 2);
                }
                setIsFixAI(false);
            },
            function(e){
                console.log(e);
                handleNoti("Đã xảy ra lỗi!", 2);
                setIsFixAI(false);
            }
        )
    }

    const handleNew = async function(){
        const img = await toPng(contentRef.current, {
            cacheBust: true, 
        });

        const sharedUser = [];
        for(var su of userShared){
            sharedUser.push({id : su.id});
        }

        postService.new(
            {
                iduser : common.UID,
                shared : sharedUser,
                content: JSON.stringify(post),
                img: img,
                stat01 : share*1,
                stat02 : waterMark ? 1 : 0,
                type: cvType,
                lang : lang,
                typ01 : font ? font : "_"
            },
            function(d){
                if(d.status === 2000){
                    handleNoti("Lưu thành công!", 1);
                    nav("/account?page=cv");
                }else{
                    handleNoti("Lưu không thành công, vui lòng kiểm tra lại!", 2);
                }
                setIsSave(false);
            },
            function(e){
                console.log(e);
                handleNoti("Lỗi, không thể lưu. Vui lòng chờ 1 chút rồi thử lại!", 2);
                setIsSave(false);
            }
        )
        setIsPreview(false);
        setIsPNG(false);
    }

    const handleUpdate = async function(){
        const img = await toPng(contentRef.current, {
            cacheBust: true, 
        });

        const sharedUser = [];
        for(var su of userShared){
            sharedUser.push({id : su.id});
        }

        postService.mod(
            {
                id : idPost,
                iduser : common.UID,
                shared : sharedUser,
                content: JSON.stringify(post),
                img: img,
                stat02 : waterMark ? 1 : 0,
                stat01 : share*1,
                type: cvType,
                lang : lang,
                typ01 : font ? font : "_"
            },
            function(d){
                if(d.status === 2000){
                    handleNoti("Cập nhật thành công!", 1);
                    nav("/account?page=cv");
                }else{
                    handleNoti("Cập nhật không thành công, vui lòng kiểm tra lại!", 2);
                }
                setIsUpdate(false);
            },
            function(e){
                console.log(e);
                handleNoti("Lỗi, không thể cập nhật. Vui lòng chờ 1 chút rồi thử lại!", 2);
                setIsUpdate(false);
            }
        )
        setIsPreview(false);
        setIsPNG(false);
    }

    const SearchUser = function(e){
        if(e.target.value){
            userService.getLst(
                e.target.value,
                function(d){
                    if(d.status === 2000){
                        var new_data = d.data.filter((d)=>d.id !== common.UID * 1);
                        var last = []
                        for(var su of new_data){
                            var ex = false;
                            for(var u of userShared){
                                if(u.id === su.id){
                                    ex = true;
                                    break;
                                }
                            }
                            if(!ex){
                                last.push(su);
                            }
                        }
                        setUserSearch(last);
                    }else{
                        handleNoti("Đã xảy ra lỗi!", 2);
                    }
                },
                function(e){
                    console.log(e);
                    handleNoti("Đã xảy ra lỗi!", 2);
                }
            )
        }else{
            setUserSearch([]);
        }

    }

    const addShareUser = function(user, i){
        setUserShared(prev => [...prev, user]);
        setUserSearch(prev => prev.filter((_, index)=> index !== i));
    }

    const removeShareUser = function(user, i){
        setUserSearch(prev => [...prev, user]);
        setUserShared(prev => prev.filter((_, index)=> index !== i));
    }

    const savePDF = async function(){
        const element = contentRef.current;
        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            allowTaint: false,
        });

        const pdf = new jsPDF("p", "mm", "a4");
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        const imgWidth = pageWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let position = 0;
        let heightLeft = imgHeight;

        // Tạo canvas phụ để crop từng trang
        const pageCanvas = document.createElement("canvas");
        const pageCtx = pageCanvas.getContext("2d");

        while (heightLeft > 0) {
            // Chiều cao trang (theo pixel của canvas gốc)
            const sliceHeight = (canvas.width * pageHeight) / pageWidth;

            pageCanvas.width = canvas.width;
            pageCanvas.height = sliceHeight;

            // Vẽ phần cần cắt vào canvas phụ
            pageCtx.clearRect(0, 0, pageCanvas.width, pageCanvas.height -50);
            pageCtx.drawImage(
            canvas,
            0,
            position * (canvas.width / pageWidth),
            canvas.width,
            sliceHeight ,
            0,
            0,
            canvas.width,
            sliceHeight
            );

            const imgData = pageCanvas.toDataURL("image/png");
            pdf.addImage(imgData, "PNG", 0, 0, imgWidth, pageHeight);

            heightLeft -= pageHeight;
            position += pageHeight;

            if (heightLeft > 0) pdf.addPage();
        }

        pdf.save(`${common.UNAME}_CV.pdf`);

        setIsPNG(false);
        setIsPDF(false);
        setIsPreview(false);
    }

    const savePNG = function(){
        const element = contentRef.current;
        toPng(element).then((dataUrl) => {
            const link = document.createElement('a');
            link.download = `${common.UNAME}_CV.png`;
            link.href = dataUrl;
            link.click();
        });
        setIsPNG(false);
        setIsPDF(false);
        setIsPreview(false);
    }

    useEffect(()=>{
        if(isPreview){
            if(isPDF){
                savePDF();
            }
            
            if(isPNG){
                if(isSave){
                    handleNew();
                }else if(isUpdate){
                    handleUpdate();
                }else{
                    savePNG();
                }
            }
        }
    }, [isPreview])

    const changeFont = function(e){
        setFont(mapping.fontMap(e.target.value));
    }

    const changeShare = function(e){
        setShare(e.target.value*1);
    }

    useEffect(()=>{
        if(searchPerson.current){
            if(share === 3){
                searchPerson.current.classList.remove("hidden");
            }else{
                searchPerson.current.classList.add("hidden");
            }
        }
    }, [share, searchPerson.current])

    const changeLang = function(la){
        setLang(la);
    }

    useEffect(()=>{
        i18n.changeLanguage(lang);
    }, [lang]);

    const applyPNG = function(){
        setIsPNG(true);
        setIsPreview(true);
    }

    const applyPDF = function(){
        setIsPDF(true);
        setIsPreview(true);
    }

    return(
        <>
            <Helmet><title>CV Builder | Workspace</title></Helmet>
            <>
                {
                    isExist
                ?
                    
                        user 
                        ?
                        <>
                            <Popupbox
                                ref={popupRef}
                                title="Chia sẻ"
                                message={
                                    <div className="py-3">
                                        <InputSelect
                                            value={share}
                                            onChange={(e)=>changeShare(e)}
                                            InputclassName={"py-3 py-3 border-2 border-[#00000047] focus:border-[black]"}
                                            options={[
                                                {
                                                    id: 1,
                                                    name: "Riêng tư"
                                                },
                                                {
                                                    id: 2,
                                                    name: "Công khai"  
                                                },
                                                {
                                                    id: 3,
                                                    name: "Chọn người chia sẻ"
                                                }
                                            ]}
                                        />
                                        <div ref={searchPerson} className="pt-3 hidden">
                                            <InputText onChange={(e)=>SearchUser(e)} inputName="search_person" InputclassName="bg-[white] text-black border-[#00000031] focus:border-[#00000082]" LabelclassName="text-[#00000098] peer-placeholder-shown:text-[#00000072]" label="Tìm kiếm" />
                                            
                                            {/* Search Result */}
                                            {
                                                userSearch.length
                                                ?
                                                <>
                                                    <p className="py-2">Người dùng</p>
                                                    <div className="h-[200px] bg-white overflow-y-scroll w-full p-1 flex flex-col gap-1 rounded-xl">
                                                        {
                                                            userSearch.length
                                                            ?
                                                                userSearch.map((d, i)=>{
                                                                    return (
                                                                        <div className="flex p-2 pr-3 items-center justify-between border-2 rounded-lg border-[#00000024]" key={i}>
                                                                            <div className="flex items-center">
                                                                                <img className="w-10 h-10 rounded-full object-cover" src={d.ava ? !d.ava.includes("http") ? `${common.URL_BE_BASE_IMG}${d.ava}` : d.ava : ""}/>
                                                                                <div className="px-3">
                                                                                    <h2 className="font-semibold text-sm">{d.name}</h2>
                                                                                    <p className="text-[12px]">{d.mail}</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="flex">
                                                                                <Button
                                                                                    className="border-2 border-green-700 rounded-md"
                                                                                    childs={
                                                                                        <IoMdAdd className="text-lg text-green-700"/>
                                                                                    }
                                                                                    click={()=>{
                                                                                        addShareUser(d, i);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            :
                                                            <></>
                                                        }
                                                    </div>
                                                </>
                                                :
                                                null
                                            }
                                        
                                            {/* Selected */}
                                            {
                                                userShared.length
                                                ?
                                                <>
                                                    <p className="py-2 pt-5">Được chia sẻ</p>
                                                    <div className="h-[200px] bg-white overflow-y-scroll w-full p-1 flex flex-col gap-1 rounded-xl">
                                                            {
                                                                userShared.map((d, i)=>{
                                                                    return (
                                                                        <div className="flex p-2 pr-3 items-center justify-between border-2 rounded-lg border-[#00000024]" key={i}>
                                                                            <div className="flex items-center">
                                                                                <img className="w-10 h-10 rounded-full object-cover" src={common.URL_BE_BASE_IMG+d.ava}/>
                                                                                <div className="px-3">
                                                                                    <h2 className="font-semibold text-sm">{d.name}</h2>
                                                                                    <p className="text-[12px]">{d.mail}</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="flex">
                                                                                <Button
                                                                                    className=""
                                                                                    childs={
                                                                                        <IoIosRemoveCircleOutline className="text-2xl text-red-700"/>
                                                                                    }
                                                                                    click={()=>{
                                                                                        removeShareUser(d,i);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                    </div>
                                                </>
                                                :
                                                <></>
                                            }
                                        </div>
                                    </div>
                                }
                                childs={
                                    <div className="flex justify-between items-center w-full">
                                        <Button
                                            className="bg-[white] text-black border-2 border-[#0000006d] px-3 py-1 rounded-lg text-lg hover:bg-[#0000001b] transition-all duration-300"
                                            childs="Đóng"
                                            click={()=>{
                                                popupRef.current.classList.add("hidden")
                                            }}
                                        />
                                    </div>
                                }
                            />
                            <div className="pt-5 px-5 flex items-center justify-center gap-3">
                            
                                <CrownsTop
                                    childs={
                                        <InputSelect
                                            onChange={(e)=>changeFont(e)}
                                            disabled={user ? user.accountType*1 >= 1 ? false : true: true}
                                            InputclassName={"py-3 py-3 border-2 border-[#00000047] focus:border-[black] w-full"}
                                            options={[
                                                {
                                                    id: "_",
                                                    name: "Chọn font"
                                                },
                                                {
                                                    id: 1,
                                                    name: "Roboto"  
                                                },
                                                {
                                                    id: 2,
                                                    name: "Montserrat" 
                                                },
                                                {
                                                    id: 3,
                                                    name: "Noto Sans"  
                                                },
                                                {
                                                    id: 4,
                                                    name: "Be Vietnam Pro"  
                                                },
                                                {
                                                    id: 5,
                                                    name: "Gentium"  
                                                },
                                                {
                                                    id: 6,
                                                    name: "Calibri"  
                                                },
                                                {
                                                    id: 7,
                                                    name: "Times New Roman"  
                                                },
                                                {
                                                    id: 8,
                                                    name: "Zen Kaku Gothic"  
                                                },
                                                {
                                                    id: 9,
                                                    name: "Noto Sans Japanese"  
                                                },
                                                {
                                                    id: 10,
                                                    name : "Noto Sans Korean"
                                                },
                                                {
                                                    id: 11,
                                                    name : "Noto Serif Korean"
                                                }
                                            ]}
                                        />
                                    }
                                    className={"w-full"}
                                    Crowns={1}
                                />

                                {
                                    isSave || isUpdate
                                    ?
                                    <Button
                                        disabled={isSave ? true : false}
                                        childs={
                                            <Loading spinClassName={"border-white"}/>
                                        }
                                        className="px-3 py-2 bg_base text-white aspect-square rounded-lg"
                                    />
                                    :
                                    <Button
                                        childs={
                                            <IoMdSave className="text-2xl"/>
                                        }
                                        className="px-3 py-2 bg_base text-white aspect-square rounded-lg"
                                        click={()=>{
                                            if(idPost){
                                                setIsPNG(true); setIsPreview(true); setIsUpdate(true);
                                            }else{
                                                setIsPNG(true); setIsPreview(true); setIsSave(true); 
                                            }
                                        }}
                                    />
                                }
                                <Button
                                    childs={
                                        <FaFilePdf className="text-2xl"/>
                                    }
                                    className="px-3 py-2 bg_base text-white aspect-square rounded-lg"
                                    click={()=>applyPDF()}
                                />
                                
                                <CrownsTop
                                    childs={
                                        <Button
                                            childs={
                                                <FaFileImage className="text-2xl"/>
                                            }
                                            disabled={user ? user.accountType*1 === 2 ? false : true: true}
                                            className="px-3 py-2 bg_base text-white aspect-square rounded-lg"
                                            click={()=>applyPNG()}
                                        />
                                    }
                                    Crowns={1}
                                />

                                <CrownsTop
                                    childs={
                                        <Button
                                            childs={
                                                <FaShare className="text-2xl"/>
                                            }
                                            disabled={user ? user.accountType*1 === 2 ? false : true: true}
                                            className="px-3 py-2 bg_base text-white aspect-square rounded-lg"
                                            click={()=>{popupRef.current.classList.remove("hidden")}}
                                        />
                                    }
                                    Crowns={2}
                                />
                            </div>
                                
                            <div className="pt-3 px-5 flex items-center justify-center gap-3">
                                <Button
                                    childs={
                                        <img src="/vi.jpg" className={`${lang === "vi" ? "scale-80" : ""} w-20 rounded-md border-2 border-[#88888880] hover:border-black transition ease-in-out`}/>
                                    }
                                    click={()=>changeLang("vi")}
                                />
                                <CrownsTop
                                    childs={
                                        <Button
                                            disabled={user ? user.accountType*1 === 2 ? false : true: true}
                                            childs={
                                                <img src="/ja.jpg" className={`${lang === "ja" ? "scale-80" : ""} w-20 rounded-md border-2 border-[#88888880] hover:border-black transition ease-in-out`}/>
                                            }
                                            click={()=>changeLang("ja")}
                                        />
                                    }
                                    Crowns={2}
                                />

                                <CrownsTop
                                    childs={
                                        <Button
                                            disabled={user ? user.accountType*1 === 2 ? false : true: true}
                                            childs={
                                                <img src="/fr.png" className={`${lang === "fr" ? "scale-80" : ""} w-20 rounded-md border-2 border-[#88888880] hover:border-black transition ease-in-out`}/>
                                            }
                                            click={()=>changeLang("fr")}
                                        />
                                    }
                                    Crowns={2}
                                />

                                <CrownsTop
                                    childs={
                                        <Button
                                            disabled={user ? user.accountType*1 === 2 ? false : true: true}
                                            childs={
                                                <img src="/en.png" className={`${lang === "en" ? "scale-80" : ""} w-20 rounded-md border-2 border-[#88888880] hover:border-black transition ease-in-out`}/>
                                            }
                                            click={()=>changeLang("en")}
                                        />
                                    }
                                    Crowns={2}
                                />

                                <CrownsTop
                                    childs={
                                        <Button
                                            disabled={user ? user.accountType*1 === 2 ? false : true: true}
                                            childs={
                                                <img src="/kr.png" className={`${lang === "kr" ? "scale-80" : ""} w-20 rounded-md border-2 border-[#88888880] hover:border-black transition ease-in-out`}/>
                                            }
                                            click={()=>changeLang("kr")}
                                        />
                                    }
                                    Crowns={2}
                                />
                                
                            </div>

                            {
                                user 
                                ? 
                                    user.accountType*1 === 2 
                                    ? 
                                        <div className="flex justify-center items-center w-full px-5 py-3 gap-2">
                                            <input className="py-4 px-4 text-[#4B5563] bg-[#f5f5f5] text-md w-full outline-none rounded-lg" placeholder="Nhập vị trí bạn muốn ứng tuyển..."  onChange={(e)=>setGenBaseAI(e.target.value ? e.target.value : "")} />
                                            <Button
                                                disabled={isGenBaseAI ? true : false}
                                                childs={isGenBaseAI ? <Loading spinClassName={"border-white"}/> : <RiAiGenerate2 className="text-2xl"/>}
                                                className="px-3 py-3 aspect-square bg_base text-white rounded-md"
                                                click={()=>CallAIGenBase()}
                                            />
                                        </div>
                                    : null
                                : null
                            }

                            {
                                user 
                                ? 
                                    user.accountType*1 >= 1
                                    ? 
                                        <div className="flex justify-center items-center w-full px-5 pt-1 relative">    
                                            <textarea className="text-md py-2 text-[#4B5563] w-full outline-none max-h-30 min-h-30 bg-[#f5f5f5] rounded-lg p-3" name="descript" onChange={(e)=>setGenAI(e.target.value ? e.target.value : "")} placeholder={"Nhập gợi ý CV của bạn..."}></textarea>
                                            <Button
                                                disabled={isGenAI ? true : false}
                                                childs={isGenAI ? <Loading spinClassName={"border-white"}/> : <RiAiGenerate2 className="text-2xl"/>}
                                                className="px-2 py-2 aspect-square absolute bg_base text-white rounded-md bottom-2 right-7"
                                                click={()=>CallAIGen()}
                                            />
                                        </div>
                                    : null
                                : null
                            }

                            <div className="">
                                <div className="flex justify-between items-center px-6 pt-5 pb-3">
                                    <div className="flex justify-start items-center gap-2">
                                        <p className="font-semibold text-lg">Hiển thị logo</p>
                                        <CrownsTop
                                            className={"flex justify-center items-center"}
                                            childs={
                                                <Switch
                                                    disabled={user ? user.accountType*1 >= 1 ? false : true: true}
                                                    check={waterMark}
                                                    onChange={(e)=>{setIsWaterMark(e.target.checked)}}
                                                />
                                            }
                                            Crowns={1}
                                        />
                                    </div>
                                    <CrownsTop
                                            childs={
                                                <Button
                                                    title="AI chỉnh sửa nội dung cv của bạn"
                                                    disabled={user ? user.accountType === 2 ? isFixAI ? true : false : true : true}
                                                    childs={isFixAI ? <Loading spinClassName={"border-white"}/> : <MdAutoFixHigh  className="text-2xl"/>}
                                                    className="px-3 py-3 aspect-square bg_base text-white rounded-md"
                                                    click={()=>CallAIFix()}
                                                />
                                            }
                                            Crowns={2}
                                        />
                                    
                                </div>

                                <div id="cv_wrap">
                                    <PostLibrary
                                        state={setIsExist}
                                        isWaterMark={waterMark}
                                        ref={contentRef}
                                        post={post}
                                        type={cvType}
                                        isPNG={isPNG}
                                        isPreview={isPreview}
                                        font={font}
                                        change={{
                                            show        : show,
                                            value       : value,
                                            valueSinge  : value_Single,
                                            valueArr    : valueArr,
                                            remove      : remove,
                                            add         : add
                                        }}
                                    />
                                </div>

                            </div>
                            

                            
                        </>
                        :
                        <p className="text-center py-3 px-3">Không thể xác thực thông tin người dùng</p>
                    
                :
                <div className="h-screen"></div>
                }
            </>
           
        </>
    );
}

export default PostWorkspace;