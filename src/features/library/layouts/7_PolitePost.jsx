/* eslint-disable react/prop-types */
import SplitLine from "../../../components/SplitLine";
import AddNewBtn from "../../post_workspace/components/AddNewBtn";
import ListElement from "../../post_workspace/components/ListElement";
import ListElementInput from "../../post_workspace/components/ListElementInput";
import { I18N } from "../../../i18n/i18n";
import Logo from "../../../components/Logo";

export default function PolitePost({isWaterMark, post, change, isPreview = false, isPNG}){
    const { t } = I18N();
    return(
        <div className="relative">
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
                        nameClassName={`text-white text-4xl text-nowrap  ${ isPNG ? "" : "pb-8"}`}
                        iconClassName={`text-2xl m-5 text-white bg_base ${ isPNG ? "p-1" : ""}`}
                    />
                </div>
                :
                null  
            }
            <div className={`flex items-stretch`}>
                <div className=" bg-[#8e3dc8] px-6 py-8 w-[100px]"></div>

                <div className="w-full pt-25 pb-5 px-7 flex flex-col gap-5 bg-[#eac7fa]">
                    <div className="flex justify-center items-start">
                        <div style={{"marginBottom": "22px"}} className="flex flex-col justify-center items-center gap-7">
                            <h1 className="text-8xl font-bold text-[#8e38c6] font pb-1 text-nowrap">{post ? post.name : ""}</h1>
                            <h3 className="text-3xl text-[#8e38c6] text-nowrap">{post ? post.job : ""}</h3>
                        </div>
                        {/* <div>
                            {
                                !isPreview
                                ?
                                <div className="flex flex-col items-start justify-start gap-2 w-full">
                                    <InputIconL ico={"text-[#8e38c6]"} color={"text-[#8e38c6]"} icon={LiaBirthdayCakeSolid} text={common.DateDisplayCustom(post.birthdate ? post.birthdate.value ? post.birthdate.value : "" : "", "DD/MM/YYYY")} show={post.birthdate ? post.birthdate.show : false} name={"birthdate"} change={change}/>
                                    <InputIconL ico={"text-[#8e38c6]"} color={"text-[#8e38c6]"} icon={FaHome} text={post.address ? post.address.value ? post.address.value : "" : ""} show={post.address ? post.address.show : false} name={"address"} change={change}/>
                                    <InputIconL ico={"text-[#8e38c6]"} color={"text-[#8e38c6]"} icon={MdOutlineLocalPhone} text={post.phone ? post.phone.value ? post.phone.value : "" : ""} show={post.phone ? post.phone.show : false} name={"phone"} change={change}/>
                                    <InputIconL ico={"text-[#8e38c6]"} color={"text-[#8e38c6]"} icon={IoIosMail} text={post.mail ? post.mail.value ? post.mail.value : "" : ""} show={post.mail ? post.mail.show : false} name={"mail"} change={change}/>
                                    <InputIconL ico={"text-[#8e38c6]"} color={"text-[#8e38c6]"} icon={FaRegUserCircle} text={post.portfolio ? post.portfolio.value ? post.portfolio.value : "" : ""} show={post.portfolio ? post.portfolio.show : false} name={"portfolio"} change={change}/>
                                    <InputIconL ico={"text-[#8e38c6]"} color={"text-[#8e38c6]"} icon={FaLinkedin} text={post.linkedin.value} show={post.linkedin.show} name={"linkedin"} change={change}/>
                                    <InputIconL ico={"text-[#8e38c6]"} color={"text-[#8e38c6]"} icon={FaSquareGithub} text={post.github.value} show={post.github.show} name={"github"} change={change}/>
                                    <InputIconL ico={"text-[#8e38c6]"} color={"text-[#8e38c6]"} icon={FaFacebook} text={post.facebook.value} show={post.facebook.show} name={"facebook"} change={change}/>
                                    <InputIconL ico={"text-[#8e38c6]"} color={"text-[#8e38c6]"} icon={FaTwitter} text={post.twitter.value} show={post.twitter.show} name={"twitter"} change={change}/>
                                    <InputIconL ico={"text-[#8e38c6]"} color={"text-[#8e38c6]"} icon={FaReddit} text={post.reddit.value} show={post.reddit.show} name={"reddit"} change={change}/>
                                </div>
                                :
                                !post.portfolio.show && !post.linkedin.show && !post.github.show && !post.facebook.show && !post.twitter.show && !post.reddit.show
                                ?
                                null
                                :
                                <div className="flex flex-col items-start justify-start gap-2  w-full">
                                    <TextIconL ico={"text-[#8e38c6]"} color={"text-[#8e38c6]"} isPNG={isPNG} icon={LiaBirthdayCakeSolid} text={common.DateDisplayCustom(post.birthdate ? post.birthdate.value ? post.birthdate.value : "" : "", "DD/MM/YYYY")} show={post.birthdate ? post.birthdate.show : false}/>
                                    <TextIconL ico={"text-[#8e38c6]"} color={"text-[#8e38c6]"} isPNG={isPNG} icon={FaHome} text={post.address ? post.address.value ? post.address.value : "" : ""} show={post.address ? post.address.show : false} name={"address"} change={change}/>
                                    <TextIconL ico={"text-[#8e38c6]"} color={"text-[#8e38c6]"} isPNG={isPNG} icon={MdOutlineLocalPhone} text={post.phone ? post.phone.value ? post.phone.value : "" : ""} show={post.phone ? post.phone.show : false} name={"phone"} change={change}/>
                                    <TextIconL ico={"text-[#8e38c6]"} color={"text-[#8e38c6]"} isPNG={isPNG} icon={IoIosMail} text={post.mail ? post.mail.value ? post.mail.value : "" : ""} show={post.mail ? post.mail.show : false} name={"mail"} change={change}/>
                                    <TextIconL ico={"text-[#8e38c6]"} color={"text-[#8e38c6]"} isPNG={isPNG} icon={FaRegUserCircle} text={post.portfolio.value} show={post.portfolio.show} name={"portfolio"} change={change}/>
                                    <TextIconL ico={"text-[#8e38c6]"} color={"text-[#8e38c6]"} isPNG={isPNG} icon={FaLinkedin} text={post.linkedin.value} show={post.linkedin.show} name={"linkedin"} change={change}/>
                                    <TextIconL ico={"text-[#8e38c6]"} color={"text-[#8e38c6]"} isPNG={isPNG} icon={FaSquareGithub} text={post.github.value} show={post.github.show} name={"github"} change={change}/>
                                    <TextIconL ico={"text-[#8e38c6]"} color={"text-[#8e38c6]"} isPNG={isPNG} icon={FaFacebook} text={post.facebook.value} show={post.facebook.show} name={"facebook"} change={change}/>
                                    <TextIconL ico={"text-[#8e38c6]"} color={"text-[#8e38c6]"} isPNG={isPNG} icon={FaTwitter} text={post.twitter.value} show={post.twitter.show} name={"twitter"} change={change}/>
                                    <TextIconL ico={"text-[#8e38c6]"} color={"text-[#8e38c6]"} isPNG={isPNG} icon={FaReddit} text={post.reddit.value} show={post.reddit.show} name={"reddit"} change={change}/>
                                </div>
                            }
                        </div> */}
                    </div>
                    <SplitLine className={"w-full bg-[#8e38c6]"}/>
                    <div className="flex flex-col justify-start items-start gap-3 pb-5">
                        <p className="text-3xl font-semibold uppercase text-[white] tracking-widest text-nowrap w-full px-3 py-3 bg-[#8e38c6]" style={{"marginBottom": "8px"}}>{t("about_me")}</p>
                        {
                            !isPreview
                            ?
                            <textarea className="text-2xl leading-9 text-[#8e38c6] w-full outline-none min-h-80 max-h-200 bg-[#eac7fa] rounded-lg p-3" name="descript" onChange={(e)=>change.valueSinge(e)} placeholder={t("about_me")} value={post.descript}></textarea>
                            :
                            <p className="text-2xl leading-9 text-[#8e38c6] ">{post.descript}</p>
                        }
                    </div>

                    {/* Skill */}
                    {
                        !isPreview
                        ?
                        <div className="flex flex-col items-start justify-start gap-3">
                            <h2 className="text-2xl font-semibold uppercase text-[white] tracking-widest text-nowrap w-full px-3 py-3 bg-[#8e38c6]">{t("skill")}</h2>
                            
                            {
                                post.skill.map((d, i)=>{
                                    return <ListElementInput
                                        change={change}
                                        name="skill"
                                        titleClr={"text-[#8e38c6]"}
                                        desCrl={"text-[#8e38c6]"}
                                        dateClr={"text-[#8e38c6]"}
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
                                Clr={"text-[#8e38c6]"}
                                    borderClr={"border-[#8e38c6]"}
                                />
                                :
                                null
                            }
                        </div>
                        :
                            post.skill.length 
                            ?
                            <div className="flex flex-col items-start justify-start gap-3">
                                <h2 className="text-2xl font-semibold uppercase text-[white] tracking-widest text-nowrap w-full px-3 py-3 bg-[#8e38c6]">{t("skill")}</h2>
                                
                                {
                                    post.skill.map((d, i)=>{
                                        return <ListElement
                                            key={i}
                                            titleClr={"text-[#8e38c6]"}
                                            desCrl={"text-[#8e38c6]"}
                                            dateClr={"text-[#8e38c6]"}
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
                            <h2 className="text-2xl font-semibold uppercase text-[white] tracking-widest text-nowrap w-full px-3 py-3 bg-[#8e38c6]">{t("language")}</h2>
                            
                            {
                                post.language.map((d, i)=>{
                                    return <ListElementInput
                                        change={change}
                                        name="language"
                                        titleClr={"text-[#8e38c6]"}
                                        desCrl={"text-[#8e38c6]"}
                                        dateClr={"text-[#8e38c6]"}
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
                                Clr={"text-[#8e38c6]"}
                                    borderClr={"border-[#8e38c6]"}
                                />
                                :
                                null
                            }
                        </div>
                        :
                            post.language.length 
                            ?
                            <div className="flex flex-col items-start justify-start gap-3">
                                <h2 className="text-2xl font-semibold uppercase text-[white] tracking-widest text-nowrap w-full px-3 py-3 bg-[#8e38c6]">{t("language")}</h2>
                                
                                {
                                    post.language.map((d, i)=>{
                                        return <ListElement
                                            key={i}
                                            titleClr={"text-[#8e38c6]"}
                                            desCrl={"text-[#8e38c6]"}
                                            dateClr={"text-[#8e38c6]"}
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
                            <h2 className="text-2xl font-semibold uppercase text-[white] tracking-wides text-nowrapt w-full px-3 py-3 bg-[#8e38c6]">{t("hobby")}</h2>
                            
                            {
                                post.hobby.map((d, i)=>{
                                    return <ListElementInput
                                        change={change}
                                        name="hobby"
                                        titleClr={"text-[#8e38c6]"}
                                        desCrl={"text-[#8e38c6]"}
                                        dateClr={"text-[#8e38c6]"}
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
                                Clr={"text-[#8e38c6]"}
                                    borderClr={"border-[#8e38c6]"}
                                />
                                :
                                null
                            }
                        </div>
                        :
                            post.hobby.length 
                            ?
                            <div className="flex flex-col items-start justify-start gap-3">
                                <h2 className="text-2xl font-semibold uppercase text-[white] tracking-widest text-nowrap w-full px-3 py-3 bg-[#8e38c6]">{t("hobby")}</h2>
                                
                                {
                                    post.hobby.map((d, i)=>{
                                        return <ListElement
                                            key={i}
                                            titleClr={"text-[#8e38c6]"}
                                            desCrl={"text-[#8e38c6]"}
                                            dateClr={"text-[#8e38c6]"}
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

                    {/* Experience */}
                    {
                        !isPreview
                        ?
                        <div className="flex flex-col justify-start items-start gap-3">
                            <h2 className="text-3xl font-semibold uppercase text-[white] tracking-widest text-nowrap w-full px-3 py-3 bg-[#8e38c6]" style={{"marginBottom": "8px"}}>{t("work_experiences")}</h2>
                            
                            {
                                post.experience.map((d, i)=>{
                                    return <ListElementInput
                                        change={change}
                                        name="experience"
                                        titleClr={"text-[#8e38c6]"}
                                        desCrl={"text-[#8e38c6]"}
                                        dateClr={"text-[#8e38c6]"}
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
                                Clr={"text-[#8e38c6]"}
                                    borderClr={"border-[#8e38c6]"}
                                />
                                :
                                null
                            }
                            
                        </div>
                        :
                            post.experience.length 
                            ?
                            <div className="flex flex-col justify-start items-start gap-3">
                                <h2 className="text-3xl font-semibold uppercase text-[white] tracking-widest text-nowrap w-full px-3 py-3 bg-[#8e38c6]" style={{"marginBottom": "8px"}}>{t("work_experiences")}</h2>
                                
                                {
                                    post.experience.map((d, i)=>{
                                        return <ListElement
                                            key={i}
                                            titleClr={"text-[#8e38c6]"}
                                            desCrl={"text-[#8e38c6]"}
                                            dateClr={"text-[#8e38c6]"}
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
                            <h2 className="text-3xl font-semibold uppercase text-[white] tracking-widest text-nowrap w-full px-3 py-3 bg-[#8e38c6]" style={{"marginBottom": "8px"}}>{t("certificates")}</h2>
                            
                            {
                                post.certificate.map((d, i)=>{
                                    return <ListElementInput
                                        change={change}
                                        name="certificate"
                                        titleClr={"text-[#8e38c6]"}
                                        desCrl={"text-[#8e38c6]"}
                                        dateClr={"text-[#8e38c6]"}
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
                                Clr={"text-[#8e38c6]"}
                                    borderClr={"border-[#8e38c6]"}
                                />
                                :
                                null
                            }
                            
                        </div>
                        :
                        post.certificate.length 
                        ?
                        <div className="flex flex-col justify-start items-start gap-3">
                            <h2 className="text-3xl font-semibold uppercase text-[white] tracking-widest text-nowrap w-full px-3 py-3 bg-[#8e38c6]" style={{"marginBottom": "8px"}}>{t("certificates")}</h2>
                            
                            {
                                post.certificate.map((d, i)=>{
                                    return <ListElement
                                        key={i}
                                        titleClr={"text-[#8e38c6]"}
                                        desCrl={"text-[#8e38c6]"}
                                        dateClr={"text-[#8e38c6]"}
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
                            <h2 className="text-3xl font-semibold uppercase text-[white] tracking-widest text-nowrap w-full px-3 py-3 bg-[#8e38c6]" style={{"marginBottom": "8px"}}>{t("education")}</h2>
                            
                            {
                                post.education.map((d, i)=>{
                                    return <ListElementInput
                                        change={change}
                                        name="education"
                                        titleClr={"text-[#8e38c6]"}
                                        desCrl={"text-[#8e38c6]"}
                                        dateClr={"text-[#8e38c6]"}
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
                                Clr={"text-[#8e38c6]"}
                                    borderClr={"border-[#8e38c6]"}
                                />
                                :
                                null
                            }
                            
                        </div>
                        :
                        post.education.length 
                        ?
                        <div className="flex flex-col justify-start items-start gap-3">
                            <h2 className="text-3xl font-semibold uppercase text-[white] tracking-widest text-nowrap w-full px-3 py-3 bg-[#8e38c6]" style={{"marginBottom": "8px"}}>{t("education")}</h2>
                            
                            {
                                post.education.map((d, i)=>{
                                    return <ListElement
                                        key={i}
                                        titleClr={"text-[#8e38c6]"}
                                        desCrl={"text-[#8e38c6]"}
                                        dateClr={"text-[#8e38c6]"}
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
                            <h2 className="text-3xl font-semibold uppercase text-[white] tracking-widest text-nowrap w-full px-3 py-3 bg-[#8e38c6]" style={{"marginBottom": "8px"}}>{t("activities")}</h2>
                            
                            {
                                post.activity.map((d, i)=>{
                                    return <ListElementInput
                                        change={change}
                                        name="activity"
                                        titleClr={"text-[#8e38c6]"}
                                        desCrl={"text-[#8e38c6]"}
                                        dateClr={"text-[#8e38c6]"}
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
                                Clr={"text-[#8e38c6]"}
                                    borderClr={"border-[#8e38c6]"}
                                />
                                :
                                null
                            }
                            
                        </div>
                        :
                        post.activity.length 
                        ?
                        <div className="flex flex-col justify-start items-start gap-3">
                            <h2 className="text-3xl font-semibold uppercase text-[white] tracking-widest text-nowrap w-full px-3 py-3 bg-[#8e38c6]" style={{"marginBottom": "8px"}}>{t("activities")}</h2>
                            
                            {
                                post.activity.map((d, i)=>{
                                    return <ListElement
                                        key={i}
                                        titleClr={"text-[#8e38c6]"}
                                        desCrl={"text-[#8e38c6]"}
                                        dateClr={"text-[#8e38c6]"}
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
                            <h2 className="text-3xl font-semibold uppercase text-[white] tracking-widest text-nowrap w-full px-3 py-3 bg-[#8e38c6]" style={{"marginBottom": "8px"}}>{t("projects")}</h2>
                            
                            {
                                post.project.map((d, i)=>{
                                    return <ListElementInput
                                        change={change}
                                        name="project"
                                        titleClr={"text-[#8e38c6]"}
                                        desCrl={"text-[#8e38c6]"}
                                        dateClr={"text-[#8e38c6]"}
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
                                Clr={"text-[#8e38c6]"}
                                    borderClr={"border-[#8e38c6]"}
                                />
                                :
                                null
                            }
                            
                        </div>
                        :
                        post.project.length 
                        ?
                        <div className="flex flex-col justify-start items-start gap-3">
                            <h2 className="text-3xl font-semibold uppercase text-[white] tracking-widest text-nowrap w-full px-3 py-3 bg-[#8e38c6]" style={{"marginBottom": "8px"}}>{t("projects")}</h2>
                            
                            {
                                post.project.map((d, i)=>{
                                    return <ListElement
                                        key={i}
                                        titleClr={"text-[#8e38c6]"}
                                        desCrl={"text-[#8e38c6]"}
                                        dateClr={"text-[#8e38c6]"}
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