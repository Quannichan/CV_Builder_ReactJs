import { useEffect, useState } from "react";
import FileUpload from "../../../components/FileUpload";
import InputText from "../../../components/InputText";
import FilterCheckBox from "../../../components/FilterCheckBox";
import { useNavigate, useSearchParams } from "react-router-dom";
import common from "../../../utils/common";
import Button from "../../../components/Button";
import { useDispatch } from "react-redux";
import { addNotification } from "../../../redux/NotificationRedux";
import { Helmet } from "react-helmet";
import postSampleService from "../../../services/postSample";

export default function PostSampleWorkspace(){

    const [searchParams] = useSearchParams();
    const [samplePostId, setSamplePostId] = useState(null);
    const nav = useNavigate();

    const dispatch = useDispatch();

    const handleNoti = (content, type) => {
        dispatch(addNotification({ content: content, second: 5, type: type}));
    };
    
    const [postSample, setPostSample] = useState({
        name: "",
        descript: "",
        typ01 : [],
        typ02 : [],
        typ03 : []
    });

    const [files, setFiles] = useState([]);

    const change = function(e){
        setPostSample({
            ...postSample,
            [e.target.name] : e.target.value ? e.target.value : null
        });
    }

    useEffect(()=>{
        console.log(files);
    }, [files])

    const addTyp = function(e){
        if(postSample[e.target.name].includes(e.target.value*1)){
            var typArr_rm = postSample[e.target.name].filter((v)=> v !== e.target.value*1);
            setPostSample({
                ...postSample,
                [e.target.name] : typArr_rm
            });
        }else{
            var typArr_add = postSample[e.target.name];
            typArr_add.push(e.target.value*1);
            setPostSample({
                ...postSample,
                [e.target.name] : typArr_add
            });
        }
    }

    const UpdateSamplePost = function(){
        var check = false;
        postSample.iduser = common.UID * 1;
        for(var k in postSample){
            if(typeof postSample[k] === "string"){
                if(postSample[k] === null || postSample[k] === undefined || postSample[k] === ""){
                    handleNoti("Bạn chưa nhập đủ thông tin, vui lòng kiểm tra lại!", 2);
                    check = true;
                    break;
                }
            }else if(typeof postSample[k] === "number"){
                if(postSample[k] === null || postSample[k] === undefined || postSample[k] === 0){
                    handleNoti("Bạn chưa nhập đủ thông tin, vui lòng kiểm tra lại!", 2);
                    check = true;
                    break;
                }
            }else{
                if(postSample[k] === null || postSample[k] === undefined || postSample[k].length === 0){
                    handleNoti("Bạn chưa nhập đủ thông tin, vui lòng kiểm tra lại!", 2);
                    check = true;
                    break;
                }
            }
        }

        if(files.length === 0){
            handleNoti("Bạn chưa tải ảnh mẫu CV!", 2);
            return
        }

        postSample.img = files[0];

        if(check){
            return;
        }

        postSampleService.mod(
            {
                id : samplePostId*1,
                ...postSample
            },
            function(d){
                if(d.status === common.CODE_OK){
                    handleNoti("Cập nhật mẫu CV thành công!", 1);
                    nav("/account?page=cvSample");
                }else{
                    if(d.msg){
                        handleNoti(d.msg, 2);
                        return;
                    }
                    handleNoti("Đã xảy ra lỗi, vui lòng thử lại sau!", 2);
                }
            },
            function(e){
                console.error(e);
                handleNoti("Đã xảy ra lỗi!", 2);
            }
        )
    }

    const NewSamplePost = function(){
        var check = false;
        postSample.iduser = common.UID * 1;
        for(var k in postSample){
            if(typeof postSample[k] === "string"){
                if(postSample[k] === null || postSample[k] === undefined || postSample[k] === ""){
                    handleNoti("Bạn chưa nhập đủ thông tin, vui lòng kiểm tra lại!", 2);
                    check = true;
                    break;
                }
            }else if(typeof postSample[k] === "number"){
                if(postSample[k] === null || postSample[k] === undefined || postSample[k] === 0){
                    handleNoti("Bạn chưa nhập đủ thông tin, vui lòng kiểm tra lại!", 2);
                    check = true;
                    break;
                }
            }else{
                if(postSample[k] === null || postSample[k] === undefined || postSample[k].length === 0){
                    handleNoti("Bạn chưa nhập đủ thông tin, vui lòng kiểm tra lại!", 2);
                    check = true;
                    break;
                }
            }
        }

        if(files.length === 0){
            handleNoti("Bạn chưa tải ảnh mẫu CV!", 2);
            return
        }

        postSample.img = files[0];

        if(check){
            return;
        }

        postSampleService.new(
            {
                ...postSample
            },
            function(d){
                if(d.status === common.CODE_OK){
                    handleNoti("Tạo mới mẫu CV thành công!", 1);
                    nav("/account?page=cvSample");
                }else{
                    if(d.msg){
                        handleNoti(d.msg, 2);
                        return;
                    }
                    handleNoti("Đã xảy ra lỗi, vui lòng thử lại sau!", 2);
                }
            },
            function(e){
                console.log(e);
                handleNoti("Đã xảy ra lỗi!", 2);
            }
        )
    }

    const DelSamplePost = function(){
        postSampleService.del(
            samplePostId * 1,
            function(d){
                if(d.status === common.CODE_OK){
                    handleNoti("Xóa mẫu CV thành công!", 1);
                    nav("/account?page=cvSample");
                }else{
                    if(d.msg){
                        handleNoti(d.msg, 2);
                        return;
                    }
                    handleNoti("Đã xảy ra lỗi, vui lòng thử lại sau!", 2);
                }
            },
            function(e){
                console.log(e);
                handleNoti("Đã xảy ra lỗi!", 2);
            }
        )
    }

    const FetchSamplePost = function(){
        postSampleService.get(
            samplePostId*1,
            function(d){
                if(d.status === common.CODE_OK){
                    delete d.data.date01;
                    delete d.data.date02;
                    setPostSample(d.data);
                    setFiles([d.data.img]);
                }else{
                    nav("/account");
                }
            },
            function(e){
                console.log(e);
                nav("/account");
            }
        )
    }

    useEffect(()=>{
        if(samplePostId){
            FetchSamplePost();
        }
    }, [samplePostId])

    const getParams = function(){
        const t = searchParams.get("t");
        if(t && !isNaN(t)){
            setSamplePostId(t);
        }
    }

    useEffect(()=>{
        getParams();
    }, [])

    return(
        <>
            <Helmet><title>CV Builder | Sample Workspace</title></Helmet>
            <div className="p-5 flex flex-col items-center justify-center gap-5 w-full">
                <div className="bg-[#ededed] p-5 rounded-lg w-full">           
                    <h1 className="text-[#000000aa] text-lg pb-3"><i>Thông tin mẫu cv</i></h1>
                    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-start gap-5 pb-5">
                        <InputText onChange={(e)=>{change(e)}} value={postSample.name} inputName="name" InputclassName="bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" LabelclassName="text-[#00000098] peer-placeholder-shown:text-[#00000072]" label={`Tiêu đề`} />
                    </div>
                    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-start gap-5 pb-5">
                        <InputText onChange={(e)=>change(e)} value={postSample.descript} inputName="descript" InputclassName="bg-[#e9e9e9] text-black border-[#00000031] focus:border-[#00000082]" LabelclassName="text-[#00000098] peer-placeholder-shown:text-[#00000072]" label="Mô tả" />
                    </div>
                    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-start gap-5 pb-5">
                        <FileUpload
                            id="cv_smaple_img"
                            isMuti={false}
                            max={1}
                            title="Hình ảnh mẫu cv"
                            value={files}
                            desc="Tải ảnh lên"
                            setFiles={setFiles}
                        />
                    </div>
                </div>
                <div className="flex justify-center items-stretch w-full gap-5">

                    <div className="bg-[#ededed] p-5 rounded-lg w-full">    
                        <h1 className="text-[#000000aa] text-lg pb-5"><i>Ngành nghề</i></h1>       
                        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-start items-center gap-5 pb-1 flex-wrap">
                            <FilterCheckBox input_name={"typ01"} isChecked={postSample.typ01.includes(1) ? true : false} onClick={(e)=>addTyp(e)} value={1} name={"Y tế"}/>
                            <FilterCheckBox input_name={"typ01"} isChecked={postSample.typ01.includes(2) ? true : false} onClick={(e)=>addTyp(e)} value={2} name={"Công nghệ thông tin"}/>
                            <FilterCheckBox input_name={"typ01"} isChecked={postSample.typ01.includes(3) ? true : false} onClick={(e)=>addTyp(e)} value={3} name={"Nghệ thuật"}/>
                            <FilterCheckBox input_name={"typ01"} isChecked={postSample.typ01.includes(4) ? true : false} onClick={(e)=>addTyp(e)} value={4} name={"Văn phòng"}/>
                        </div>
                    </div>

                    <div className="bg-[#ededed] p-5 rounded-lg w-full">    
                        <h1 className="text-[#000000aa] text-lg pb-5"><i>Phong cách</i></h1>       
                        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-start items-center gap-5 pb-1 flex-wrap">
                            <FilterCheckBox input_name={"typ02"} isChecked={postSample.typ02.includes(1) ? true : false} onClick={(e)=>addTyp(e)} value={1} name={"Hiện đại"}/>
                            <FilterCheckBox input_name={"typ02"} isChecked={postSample.typ02.includes(2) ? true : false} onClick={(e)=>addTyp(e)} value={2} name={"Cổ điển"}/>
                            <FilterCheckBox input_name={"typ02"} isChecked={postSample.typ02.includes(3) ? true : false} onClick={(e)=>addTyp(e)} value={3} name={"Sáng tạo"}/>
                            <FilterCheckBox input_name={"typ02"} isChecked={postSample.typ02.includes(4) ? true : false} onClick={(e)=>addTyp(e)} value={4} name={"Tối giản"}/>
                            <FilterCheckBox input_name={"typ02"} isChecked={postSample.typ02.includes(5) ? true : false} onClick={(e)=>addTyp(e)} value={5} name={"Doanh nghiệp"}/>
                            <FilterCheckBox input_name={"typ02"} isChecked={postSample.typ02.includes(6) ? true : false} onClick={(e)=>addTyp(e)} value={6} name={"Công nghệ"}/>
                            <FilterCheckBox input_name={"typ02"} isChecked={postSample.typ02.includes(7) ? true : false} onClick={(e)=>addTyp(e)} value={7} name={"Thanh lịch"}/>
                            <FilterCheckBox input_name={"typ02"} isChecked={postSample.typ02.includes(8) ? true : false} onClick={(e)=>addTyp(e)} value={8} name={"Sáng"}/>
                            <FilterCheckBox input_name={"typ02"} isChecked={postSample.typ02.includes(9) ? true : false} onClick={(e)=>addTyp(e)} value={9} name={"Tối"}/>
                            <FilterCheckBox input_name={"typ02"} isChecked={postSample.typ02.includes(10) ? true : false} onClick={(e)=>addTyp(e)} value={10} name={"Chi tiết"}/>
                        </div>
                    </div>

                    <div className="bg-[#ededed] p-5 rounded-lg w-full">    
                        <h1 className="text-[#000000aa] text-lg pb-5"><i>Màu sắc</i></h1>       
                        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-start items-center gap-5 pb-1 flex-wrap">
                            <FilterCheckBox input_name={"typ03"} isChecked={postSample.typ03.includes(1) ? true : false}  onClick={(e)=>addTyp(e)} value={1} name={"Xanh lam"}/>
                            <FilterCheckBox input_name={"typ03"} isChecked={postSample.typ03.includes(2) ? true : false}  onClick={(e)=>addTyp(e)} value={2} name={"Xanh lục"}/>
                            <FilterCheckBox input_name={"typ03"} isChecked={postSample.typ03.includes(3) ? true : false}  onClick={(e)=>addTyp(e)} value={3} name={"Xanh"}/>
                            <FilterCheckBox input_name={"typ03"} isChecked={postSample.typ03.includes(4) ? true : false}  onClick={(e)=>addTyp(e)} value={4} name={"Đỏ"}/>
                            <FilterCheckBox input_name={"typ03"} isChecked={postSample.typ03.includes(5) ? true : false}  onClick={(e)=>addTyp(e)} value={5} name={"Cam"}/>
                            <FilterCheckBox input_name={"typ03"} isChecked={postSample.typ03.includes(6) ? true : false}  onClick={(e)=>addTyp(e)} value={6} name={"Đen"}/>
                            <FilterCheckBox input_name={"typ03"} isChecked={postSample.typ03.includes(7) ? true : false}  onClick={(e)=>addTyp(e)} value={7} name={"Xám"}/>
                            <FilterCheckBox input_name={"typ03"} isChecked={postSample.typ03.includes(8) ? true : false}  onClick={(e)=>addTyp(e)} value={8} name={"Hồng"}/>
                            <FilterCheckBox input_name={"typ03"} isChecked={postSample.typ03.includes(9) ? true : false}  onClick={(e)=>addTyp(e)} value={9} name={"Trắng"}/>
                            <FilterCheckBox input_name={"typ03"} isChecked={postSample.typ03.includes(10) ? true : false} onClick={(e)=>addTyp(e)} value={10} name={"Tím"}/>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-3 w-full">
                    {
                        samplePostId
                        ?
                        <Button
                            className="bg-red-600 px-5 py-2 text-white rounded-lg text-lg"
                            childs={`Xóa`}
                            click={samplePostId ? ()=>DelSamplePost() : null}
                        />
                        :
                        null
                    }
                    <Button
                        className="bg_base px-5 py-2 text-white rounded-lg text-lg"
                        childs={samplePostId ? "Cập nhật" : "Tạo mới"}
                        click={samplePostId ? ()=>UpdateSamplePost() : ()=>NewSamplePost()}
                    />
                </div>
            </div>
        </>
    );
}