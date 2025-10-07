/* eslint-disable react/prop-types */
import common from "../../../utils/common";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FaHome, FaReddit } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import InputIconL from "../../post_workspace/components/InputIcon_l";
import TextIconL from "../../post_workspace/components/TextIcon_l";
import AddNewBtn from "../../post_workspace/components/AddNewBtn";
import ListElement from "../../post_workspace/components/ListElement";
import ListElementInput from "../../post_workspace/components/ListElementInput";
import { I18N } from "../../../i18n/i18n";
import Logo from "../../../components/Logo";

export default function BussinessPost({isWaterMark, post, change, isPreview = false, isPNG}){
    const { t } = I18N();
    return(
        <div className="relative bg-white">
            {
                !isPreview
                ?
                null
                :
                isWaterMark
                ?
                <div className="absolute h-full w-full opacity-10 flex justify-center items-center">
                    <Logo
                        className={"border-0 px-3 py-3 rounded-xl"}
                        nameClassName={`text-black text-4xl text-nowrap  ${ isPNG ? "" : "pb-8"}`}
                        iconClassName={`text-2xl m-5 text-white bg_base ${ isPNG ? "p-1" : ""}`}
                    />
                </div>
                :
                null  
            }
            <div className={`flex justify-between items-stretch `}>
                <div className="bg-[#208a58] flex-1/4 px-6 py-8 flex flex-col gap-5" style={{"marginLeft": "50px"}}>
                        <div className="flex justify-center items-center pb-5 pt-7">
                            {
                                post.ava
                                ?
                                    <img crossOrigin="anonymous" alt="avatar" src={`${common.URL_BE_BASE_IMG}${post ? post.ava : ""}`} className="w-70 h-70 object-center object-cover aspect-square rounded-full shadow-2xl"/>
                                :
                                <></>
                            }
                        </div>
                        {
                            !isPreview
                            ?
                            <div className="flex flex-col items-start justify-start gap-2">
                                <InputIconL ico={"green"} color={"white"} icon={LiaBirthdayCakeSolid} text={common.DateDisplayCustom(post.birthdate ? post.birthdate.value ? post.birthdate.value : "" : "", "DD/MM/YYYY")} show={post.birthdate ? post.birthdate.show : false} name={"birthdate"} change={change}/>
                                <InputIconL ico={"green"} color={"white"} icon={FaHome} text={post.address ? post.address.value ? post.address.value : "" : ""} show={post.address ? post.address.show : false} name={"address"} change={change}/>
                                <InputIconL ico={"green"} color={"white"} icon={MdOutlineLocalPhone} text={post.phone ? post.phone.value ? post.phone.value : "" : ""} show={post.phone ? post.phone.show : false} name={"phone"} change={change}/>
                                <InputIconL ico={"green"} color={"white"} icon={IoIosMail} text={post.mail ? post.mail.value ? post.mail.value : "" : ""} show={post.mail ? post.mail.show : false} name={"mail"} change={change}/>
                                <InputIconL ico={"green"} color={"white"} icon={FaRegUserCircle} text={post.portfolio ? post.portfolio.value ? post.portfolio.value : "" : ""} show={post.portfolio ? post.portfolio.show : false} name={"portfolio"} change={change}/>
                                <InputIconL ico={"green"} color={"white"} icon={FaLinkedin} text={post.linkedin.value} show={post.linkedin.show} name={"linkedin"} change={change}/>
                                <InputIconL ico={"green"} color={"white"} icon={FaSquareGithub} text={post.github.value} show={post.github.show} name={"github"} change={change}/>
                                <InputIconL ico={"green"} color={"white"} icon={FaFacebook} text={post.facebook.value} show={post.facebook.show} name={"facebook"} change={change}/>
                                <InputIconL ico={"green"} color={"white"} icon={FaTwitter} text={post.twitter.value} show={post.twitter.show} name={"twitter"} change={change}/>
                                <InputIconL ico={"green"} color={"white"} icon={FaReddit} text={post.reddit.value} show={post.reddit.show} name={"reddit"} change={change}/>
                            </div>
                            :
                            !post.portfolio.show && !post.linkedin.show && !post.github.show && !post.facebook.show && !post.twitter.show && !post.reddit.show
                            ?
                            null
                            :
                            <div className="flex flex-col items-start justify-start gap-2">
                                <TextIconL ico={"green"} color={"white"} isPNG={isPNG} icon={LiaBirthdayCakeSolid} text={common.DateDisplayCustom(post.birthdate ? post.birthdate.value ? post.birthdate.value : "" : "", "DD/MM/YYYY")} show={post.birthdate ? post.birthdate.show : false}/>
                                <TextIconL ico={"green"} color={"white"} isPNG={isPNG} icon={FaHome} text={post.address ? post.address.value ? post.address.value : "" : ""} show={post.address ? post.address.show : false} name={"address"} change={change}/>
                                <TextIconL ico={"green"} color={"white"} isPNG={isPNG} icon={MdOutlineLocalPhone} text={post.phone ? post.phone.value ? post.phone.value : "" : ""} show={post.phone ? post.phone.show : false} name={"phone"} change={change}/>
                                <TextIconL ico={"green"} color={"white"} isPNG={isPNG} icon={IoIosMail} text={post.mail ? post.mail.value ? post.mail.value : "" : ""} show={post.mail ? post.mail.show : false} name={"mail"} change={change}/>
                                <TextIconL ico={"green"} color={"white"} isPNG={isPNG} icon={FaRegUserCircle} text={post.portfolio.value} show={post.portfolio.show} name={"portfolio"} change={change}/>
                                <TextIconL ico={"green"} color={"white"} isPNG={isPNG} icon={FaLinkedin} text={post.linkedin.value} show={post.linkedin.show} name={"linkedin"} change={change}/>
                                <TextIconL ico={"green"} color={"white"} isPNG={isPNG} icon={FaSquareGithub} text={post.github.value} show={post.github.show} name={"github"} change={change}/>
                                <TextIconL ico={"green"} color={"white"} isPNG={isPNG} icon={FaFacebook} text={post.facebook.value} show={post.facebook.show} name={"facebook"} change={change}/>
                                <TextIconL ico={"green"} color={"white"} isPNG={isPNG} icon={FaTwitter} text={post.twitter.value} show={post.twitter.show} name={"twitter"} change={change}/>
                                <TextIconL ico={"green"} color={"white"} isPNG={isPNG} icon={FaReddit} text={post.reddit.value} show={post.reddit.show} name={"reddit"} change={change}/>
                            </div>
                        }

                    {/* Skill */}
                    {
                        !isPreview
                        ?
                        <div className="flex flex-col items-start justify-start gap-3">
                            <h2 className="text-2xl flex w-full items-center gap-3 font-semibold uppercase text-white tracking-widest text-nowrap">{t("skill")}</h2>
                            {
                                post.skill.map((d, i)=>{
                                    return <ListElementInput
                                        change={change}
                                        name="skill"
                                        titleClr={"text-white text-xl"}
                                        desCrl={"text-white text-lg"}
                                        dateClr={"text-white text-md"}
                                        index={i}
                                        key={i}
                                        title={d.title}
                                        descript={d.descript}
                                        fromdate={d.from}
                                        todate={d.to}
                                    />
                                })
                            }
                            {
                                !isPreview
                                ?
                                <AddNewBtn
                                onClick={()=>change.add("skill")}
                                Clr={"text-white"}
                                borderClr={"border-[white]"}
                                />
                                :
                                null
                            }
                        </div>
                        :
                            post.skill.length 
                            ?
                            <div className="flex flex-col items-start justify-start gap-3">
                                <h2 className="text-2xl font-semibold flex items-center gap-3 uppercase text-white tracking-widest text-nowrap">{t("skill")}</h2>
                                {
                                    post.skill.map((d, i)=>{
                                        return <ListElement
                                            key={i}
                                            titleClr={"text-white text-xl"}
                                            desCrl={"text-white text-lg"}
                                            dateClr={"text-white text-md"}
                                            title={d.title}
                                            descript={d.descript}
                                            fromdate={d.from}
                                            todate={d.to}
                                        />
                                    })
                                }
                            </div>
                            :
                            null
                    }

                    {/* Language */}
                    {
                        !isPreview
                        ?
                        <div className="flex flex-col items-start justify-start gap-3">
                            <h2 className="text-2xl font-semibold w-full flex items-center gap-3 uppercase text-white tracking-widest text-nowrap">{t("language")}</h2>
                            {
                                post.language.map((d, i)=>{
                                    return <ListElementInput
                                        change={change}
                                        name="language"
                                        titleClr={"text-white text-xl"}
                                        desCrl={"text-white text-lg"}
                                        dateClr={"text-white text-md"}
                                        index={i}
                                        key={i}
                                        title={d.title}
                                        descript={d.descript}
                                        fromdate={d.from}
                                        todate={d.to}
                                    />
                                })
                            }
                            {
                                !isPreview
                                ?
                                <AddNewBtn
                                onClick={()=>change.add("language")}
                                Clr={"text-white"}
                                borderClr={"border-[white]"}
                                />
                                :
                                null
                            }
                        </div>
                        :
                            post.language.length 
                            ?
                            <div className="flex flex-col items-start justify-start gap-3">
                                <h2 className="text-2xl font-semibold flex items-center gap-3 uppercase text-white tracking-widest text-nowrap">{t("language")}</h2>
                                {
                                    post.language.map((d, i)=>{
                                        return <ListElement
                                            key={i}
                                            titleClr={"text-white text-xl"}
                                            desCrl={"text-white text-lg"}
                                            dateClr={"text-white text-md"}
                                            title={d.title}
                                            descript={d.descript}
                                            fromdate={d.from}
                                            todate={d.to}
                                        />
                                    })
                                }
                            </div>
                            :
                            null
                    }

                    {/* Hobby */}
                    {
                        !isPreview
                        ?
                        <div className="flex flex-col items-start justify-start gap-3">
                            <h2 className="text-2xl font-semibold uppercase text-[white] tracking-wides text-nowrapt">{t("hobby")}</h2>
                            {
                                post.hobby.map((d, i)=>{
                                    return <ListElementInput
                                        change={change}
                                        name="hobby"
                                        titleClr={"text-white text-xl"}
                                        desCrl={"text-white text-lg"}
                                        dateClr={"text-white text-md"}
                                        index={i}
                                        key={i}
                                        title={d.title}
                                        descript={d.descript}
                                        fromdate={d.from}
                                        todate={d.to}
                                    />
                                })
                            }
                            {
                                !isPreview
                                ?
                                <AddNewBtn
                                onClick={()=>change.add("hobby")}
                                Clr={"text-white"}
                                borderClr={"border-[white]"}
                                />
                                :
                                null
                            }
                        </div>
                        :
                            post.hobby.length 
                            ?
                            <div className="flex flex-col items-start justify-start gap-3">
                                <h2 className="text-2xl font-semibold uppercase text-[white] tracking-widest text-nowrap">{t("hobby")}</h2>
                                
                                {
                                    post.hobby.map((d, i)=>{
                                        return <ListElement
                                            key={i}
                                            titleClr={"text-white text-xl"}
                                            desCrl={"text-white text-lg"}
                                            dateClr={"text-white text-md"}
                                            title={d.title}
                                            descript={d.descript}
                                            fromdate={d.from}
                                            todate={d.to}
                                        />
                                    })
                                }
                            </div>
                            :
                            null
                    }
                </div>
                <div className="flex-3/4 py-8 px-7 flex flex-col gap-5" >
                    <div className="flex justify-start items-center gap-7 pt-35">
                        <div className="flex flex-col items-start gap-3" style={{"marginBottom": "22px"}}>
                            <h1 className="text-6xl text-[#208a58] font text-nowrap">{post ? post.name : ""}</h1>
                            <h3 className="text-xl text-[black] text-nowrap ">{post ? post.job : ""}</h3>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-3">
                        <p className="text-3xl font-semibold uppercase text-[#208a58] tracking-widest text-nowrap" style={{"marginBottom": "8px"}}>{t("about_me")}</p>
                        
                        {
                            !isPreview
                            ?
                            <textarea className="text-2xl leading-9 text-black w-full outline-none min-h-80 max-h-200 bg-[#f5f5f5] rounded-lg p-3" name="descript" onChange={(e)=>change.valueSinge(e)} placeholder={t("about_me")} value={post.descript}></textarea>
                            :
                            <p className="text-2xl leading-9 text-black ">{post.descript}</p>
                        }
                    </div>

                    {/* Experience */}
                    {
                        !isPreview
                        ?
                        <div className="flex flex-col justify-start items-start gap-3">
                            <h2 className="text-3xl font-semibold uppercase text-[#208a58] tracking-widest text-nowrap" style={{"marginBottom": "8px"}}>{t("work_experiences")}</h2>
                            
                            {
                                post.experience.map((d, i)=>{
                                    return <ListElementInput
                                        change={change}
                                        name="experience"
                                        titleClr={"text-black"}
                                        desCrl={"text-black"}
                                        dateClr={"text-[black]"}
                                        index={i}
                                        key={i}
                                        title={d.title}
                                        descript={d.descript}
                                        fromdate={d.from}
                                        todate={d.to}
                                    />
                                })
                            }
                            {
                                !isPreview
                                ?
                                <AddNewBtn
                                onClick={()=>change.add("experience")}
                                Clr={"text-black"}
                                borderClr={"border-black"}
                                />
                                :
                                null
                            }
                            
                        </div>
                        :
                            post.experience.length 
                            ?
                            <div className="flex flex-col justify-start items-start gap-3">
                                <h2 className="text-3xl font-semibold uppercase text-[#208a58] tracking-widest text-nowrap" style={{"marginBottom": "8px"}}>{t("work_experiences")}</h2>
                                
                                {
                                    post.experience.map((d, i)=>{
                                        return <ListElement
                                            key={i}
                                            titleClr={"text-white"}
                                            desCrl={"text-black"}
                                            dateClr={"text-black"}
                                            title={d.title}
                                            descript={d.descript}
                                            fromdate={d.from}
                                            todate={d.to}
                                        />
                                    })
                                }
                            </div>
                            :
                            null
                    }

                    {/* Certificate */}
                    
                    {
                        !isPreview
                        ?
                        <div className="flex flex-col justify-start items-start gap-3">
                            <h2 className="text-3xl font-semibold uppercase text-[#208a58] tracking-widest text-nowrap" style={{"marginBottom": "8px"}}>{t("certificates")}</h2>
                            
                            {
                                post.certificate.map((d, i)=>{
                                    return <ListElementInput
                                        change={change}
                                        name="certificate"
                                        titleClr={"text-black"}
                                        desCrl={"text-black"}
                                        dateClr={"text-black"}
                                        index={i}
                                        key={i}
                                        title={d.title}
                                        descript={d.descript}
                                        fromdate={d.from}
                                        todate={d.to}
                                    />
                                })
                            }
                            {
                                !isPreview
                                ?
                                <AddNewBtn
                                onClick={()=>change.add("certificate")}
                                Clr={"text-black"}
                                borderClr={"border-[black]"}
                                />
                                :
                                null
                            }
                            
                        </div>
                        :
                        post.certificate.length 
                        ?
                        <div className="flex flex-col justify-start items-start gap-3">
                            <h2 className="text-3xl font-semibold uppercase text-[#208a58] tracking-widest text-nowrap" style={{"marginBottom": "8px"}}>{t("certificates")}</h2>
                            
                            {
                                post.certificate.map((d, i)=>{
                                    return <ListElement
                                        key={i}
                                        titleClr={"text-black"}
                                        desCrl={"text-black"}
                                        dateClr={"text-black"}
                                        title={d.title}
                                        descript={d.descript}
                                        fromdate={d.from}
                                        todate={d.to}
                                    />
                                })
                            }
                        </div>
                        :
                        null
                    }

                    {/* Education */}
                    {
                        !isPreview
                        ?
                        <div className="flex flex-col justify-start items-start gap-3">
                            <h2 className="text-3xl font-semibold uppercase text-[#208a58] tracking-widest text-nowrap" style={{"marginBottom": "8px"}}>{t("education")}</h2>
                            
                            {
                                post.education.map((d, i)=>{
                                    return <ListElementInput
                                        change={change}
                                        name="education"
                                        titleClr={"text-black"}
                                        desCrl={"text-black"}
                                        dateClr={"text-black"}
                                        index={i}
                                        key={i}
                                        title={d.title}
                                        descript={d.descript}
                                        fromdate={d.from}
                                        todate={d.to}
                                    />
                                })
                            }
                            {
                                !isPreview
                                ?
                                <AddNewBtn
                                onClick={()=>change.add("education")}
                                Clr={"text-black"}
                                borderClr={"border-[black]"}
                                />
                                :
                                null
                            }
                            
                        </div>
                        :
                        post.education.length 
                        ?
                        <div className="flex flex-col justify-start items-start gap-3">
                            <h2 className="text-3xl font-semibold uppercase text-[#208a58] tracking-widest text-nowrap" style={{"marginBottom": "8px"}}>{t("education")}</h2>
                            
                            {
                                post.education.map((d, i)=>{
                                    return <ListElement
                                        key={i}
                                        titleClr={"text-black"}
                                        desCrl={"text-black"}
                                        dateClr={"text-black"}
                                        title={d.title}
                                        descript={d.descript}
                                        fromdate={d.from}
                                        todate={d.to}
                                    />
                                })
                            }
                        </div>
                        :
                        null
                    }

                    {/* Activity */}
                    {
                        !isPreview
                        ?
                        <div className="flex flex-col justify-start items-start gap-3">
                            <h2 className="text-3xl font-semibold uppercase text-[#208a58] tracking-widest text-nowrap" style={{"marginBottom": "8px"}}>{t("activities")}</h2>
                            
                            {
                                post.activity.map((d, i)=>{
                                    return <ListElementInput
                                        change={change}
                                        name="activity"
                                        titleClr={"text-black"}
                                        desCrl={"text-black"}
                                        dateClr={"text-black"}
                                        index={i}
                                        key={i}
                                        title={d.title}
                                        descript={d.descript}
                                        fromdate={d.from}
                                        todate={d.to}
                                    />
                                })
                            }
                            {
                                !isPreview
                                ?
                                <AddNewBtn
                                onClick={()=>change.add("activity")}
                                Clr={"text-black"}
                                borderClr={"border-[black]"}
                                />
                                :
                                null
                            }
                            
                        </div>
                        :
                        post.activity.length 
                        ?
                        <div className="flex flex-col justify-start items-start gap-3">
                            <h2 className="text-3xl font-semibold uppercase text-[#208a58] tracking-widest text-nowrap" style={{"marginBottom": "8px"}}>{t("activities")}</h2>
                            
                            {
                                post.activity.map((d, i)=>{
                                    return <ListElement
                                        key={i}
                                        titleClr={"text-black"}
                                        desCrl={"text-black"}
                                        dateClr={"text-black"}
                                        title={d.title}
                                        descript={d.descript}
                                        fromdate={d.from}
                                        todate={d.to}
                                    />
                                })
                            }
                        </div>
                        :
                        null
                    }

                    {/* Project */}
                        {
                        !isPreview
                        ?
                        <div className="flex flex-col justify-start items-start gap-3">
                            <h2 className="text-3xl font-semibold uppercase text-[#208a58] tracking-widest text-nowrap" style={{"marginBottom": "8px"}}>{t("projects")}</h2>
                            
                            {
                                post.project.map((d, i)=>{
                                    return <ListElementInput
                                        change={change}
                                        name="project"
                                        titleClr={"text-black"}
                                        desCrl={"text-black"}
                                        dateClr={"text-black"}
                                        index={i}
                                        key={i}
                                        title={d.title}
                                        descript={d.descript}
                                        fromdate={d.from}
                                        todate={d.to}
                                    />
                                })
                            }
                            {
                                !isPreview
                                ?
                                <AddNewBtn
                                onClick={()=>change.add("project")}
                                Clr={"text-black"}
                                borderClr={"border-[black]"}
                                />
                                :
                                null
                            }
                            
                        </div>
                        :
                        post.project.length 
                        ?
                        <div className="flex flex-col justify-start items-start gap-3">
                            <h2 className="text-3xl font-semibold uppercase text-[#208a58] tracking-widest text-nowrap" style={{"marginBottom": "8px"}}>{t("projects")}</h2>
                            
                            {
                                post.project.map((d, i)=>{
                                    return <ListElement
                                        key={i}
                                        titleClr={"text-black"}
                                        desCrl={"text-black"}
                                        dateClr={"text-black"}
                                        title={d.title}
                                        descript={d.descript}
                                        fromdate={d.from}
                                        todate={d.to}
                                    />
                                })
                            }
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    )
}