/* eslint-disable react/prop-types */
import common from "../../../utils/common";
import { I18N } from "../../../i18n/i18n";
import Logo from "../../../components/Logo";

import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FaHome, FaReddit, FaFacebook, FaTwitter, FaRegUserCircle, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";

import SplitLine from "../../../components/SplitLine";
import InputIconL from "../../post_workspace/components/InputIcon_l";
import TextIconL from "../../post_workspace/components/TextIcon_l";
import AddNewBtn from "../../post_workspace/components/AddNewBtn";
import ListElement from "../../post_workspace/components/ListElement";
import ListElementInput from "../../post_workspace/components/ListElementInput";

/**
 * Fluid on screen, fixed A4 only when forExport=true
 * Props: { isWaterMark, post, change, isPreview=false, isPNG, forExport=false }
 */
export default function MaxNavyResume({
  isWaterMark,
  post,
  change,
  isPreview = false,
  isPNG,
  forExport = false,
}) {
  const { t } = I18N();

  // màu
  const SIDEBAR = "#26323E";
  const BODY_BG = "#FFFFFF";
  const BODY_TEXT = "#111827";
  const MUTED = "#6B7280";
  const DIVIDER = "#E5E7EB";

  // khổ A4 chỉ dùng khi export
  const A4W = 794;
  const A4H = 1123;

  // layout wrapper: fluid khi xem, fixed khi export
  const wrapperStyle = forExport
    ? { width: `${A4W}px`, minHeight: `${A4H}px`, background: BODY_BG, overflow: "hidden" }
    : { width: "100%", background: BODY_BG, overflow: "hidden" };

  return (
    <div id="MaxNavyResume" className="relative mx-auto" style={wrapperStyle}>
      {/* watermark */}
      {isPreview && isWaterMark ? (
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <Logo
            className="border-0 px-3 py-3 rounded-xl"
            nameClassName={`text-black text-4xl ${isPNG ? "" : "pb-8"}`}
            iconClassName={`text-2xl m-5 text-white bg_base ${isPNG ? "p-1" : ""}`}
          />
        </div>
      ) : null}

      {/* card */}
      <div className="w-full h-full p-4 sm:p-6">
        <div className="w-full h-full rounded-2xl shadow-lg overflow-hidden">
          <div className="flex">
            {/* ===== Sidebar (fluid) ===== */}
            <aside
              className="text-white px-5 sm:px-6 py-6 sm:py-8"
              style={{ background: SIDEBAR, width: forExport ? 230 : undefined }}
            >
              {/* avatar: lớn trên màn hình, vẫn hợp lý khi export */}
              {post?.ava ? (
                <img
                  crossOrigin="anonymous"
                  src={post.ava ? !post.ava.includes("http") ? `${common.URL_BE_BASE_IMG}${post.ava}` : post.ava : ""}
                  alt="avatar"
                  className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full mb-6 shadow-xl"
                />
              ) : (
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-black/10 mb-6" />
              )}

              <h3 className="font-semibold text-lg mb-3">Contact</h3>
              {!isPreview ? (
                <div className="flex flex-col gap-2 mb-6">
                  <InputIconL color={"white"} icon={FaHome} text={post?.address?.value || ""} show={post?.address?.show} name={"address"} change={change}/>
                  <InputIconL color={"white"} icon={MdOutlineLocalPhone} text={post?.phone?.value || ""} show={post?.phone?.show} name={"phone"} change={change}/>
                  <InputIconL color={"white"} icon={IoIosMail} text={post?.mail?.value || ""} show={post?.mail?.show} name={"mail"} change={change}/>
                  <InputIconL color={"white"} icon={LiaBirthdayCakeSolid} text={post.birthdate ? post.birthdate.value ? common.DateDisplayCustom(post.birthdate.value, "DD/MM/YYYY") : null : null} show={post?.birthdate?.show} name={"birthdate"} change={change}/>
                </div>
              ) : (
                <div className="flex flex-col gap-2 mb-6">
                  <TextIconL color={"white"} isPNG={isPNG} icon={FaHome} text={post?.address?.value || ""} show={post?.address?.show}/>
                  <TextIconL color={"white"} isPNG={isPNG} icon={MdOutlineLocalPhone} text={post?.phone?.value || ""} show={post?.phone?.show}/>
                  <TextIconL color={"white"} isPNG={isPNG} icon={IoIosMail} text={post?.mail?.value || ""} show={post?.mail?.show}/>
                  <TextIconL color={"white"} isPNG={isPNG} icon={LiaBirthdayCakeSolid} text={post.birthdate ? post.birthdate.value ? common.DateDisplayCustom(post.birthdate.value, "DD/MM/YYYY") : null : null} show={post?.birthdate?.show}/>
                </div>
              )}

              {/* Skills */}
              <h3 className="font-semibold text-lg">Skills</h3>
              <SplitLine className="w-full my-2" style={{ backgroundColor: "#FFFFFF40" }} />
              {!isPreview ? (
                <>
                  {post.skill.map((d, i) => (
                    <ListElementInput key={i} change={change} name="skill" index={i}
                      titleClr={"text-white"} desCrl={"text-white"} dateClr={"text-white/80"}
                      title={d.title} descript={d.descript} fromdate={d.from} todate={d.to}/>
                  ))}
                  <AddNewBtn onClick={() => change.add("skill")} Clr={"text-white"} borderClr={"border-white"} />
                </>
              ) : post.skill.length ? (
                post.skill.map((d, i) => (
                  <ListElement key={i} titleClr={"text-white"} desCrl={"text-white/90"} dateClr={"text-white/70"}
                    title={d.title} descript={d.descript} fromdate={d.from} todate={d.to}/>
                ))
              ) : null}

              {/* Languages */}
              <h3 className="font-semibold text-lg mt-6">{t("language")}</h3>
              <SplitLine className="w-full my-2" style={{ backgroundColor: "#FFFFFF40" }} />
              {!isPreview ? (
                <>
                  {post.language.map((d, i) => (
                    <ListElementInput key={i} change={change} name="language" index={i}
                      titleClr={"text-white"} desCrl={"text-white"} dateClr={"text-white/80"}
                      title={d.title} descript={d.descript} fromdate={d.from} todate={d.to}/>
                  ))}
                  <AddNewBtn onClick={() => change.add("language")} Clr={"text-white"} borderClr={"border-white"} />
                </>
              ) : post.language.length ? (
                post.language.map((d, i) => (
                  <ListElement key={i} titleClr={"text-white"} desCrl={"text-white/90"} dateClr={"text-white/70"}
                    title={d.title} descript={d.descript} fromdate={d.from} todate={d.to}/>
                ))
              ) : null}

              {/* Hobbies */}
              <h3 className="font-semibold text-lg mt-6">{t("hobby")}</h3>
              <SplitLine className="w-full my-2" style={{ backgroundColor: "#FFFFFF40" }} />
              {!isPreview ? (
                <>
                  {post.hobby.map((d, i) => (
                    <ListElementInput key={i} change={change} name="hobby" index={i}
                      titleClr={"text-white"} desCrl={"text-white"} dateClr={"text-white/80"}
                      title={d.title} descript={d.descript} fromdate={d.from} todate={d.to}/>
                  ))}
                  <AddNewBtn onClick={() => change.add("hobby")} Clr={"text-white"} borderClr={"border-white"} />
                </>
              ) : post.hobby.length ? (
                post.hobby.map((d, i) => (
                  <ListElement key={i} titleClr={"text-white"} desCrl={"text-white/90"} dateClr={"text-white/70"}
                    title={d.title} descript={d.descript} fromdate={d.from} todate={d.to}/>
                ))
              ) : null}

              {/* Socials */}
              <div className="mt-6">
                {!isPreview ? (
                  <div className="flex flex-col gap-2">
                    <InputIconL color={"white"} icon={FaRegUserCircle} text={post?.portfolio?.value || ""} show={post?.portfolio?.show} name={"portfolio"} change={change}/>
                    <InputIconL color={"white"} icon={FaLinkedin} text={post.linkedin.value} show={post.linkedin.show} name={"linkedin"} change={change}/>
                    <InputIconL color={"white"} icon={FaSquareGithub} text={post.github.value} show={post.github.show} name={"github"} change={change}/>
                    <InputIconL color={"white"} icon={FaFacebook} text={post.facebook.value} show={post.facebook.show} name={"facebook"} change={change}/>
                    <InputIconL color={"white"} icon={FaTwitter} text={post.twitter.value} show={post.twitter.show} name={"twitter"} change={change}/>
                    <InputIconL color={"white"} icon={FaReddit} text={post.reddit.value} show={post.reddit.show} name={"reddit"} change={change}/>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <TextIconL color={"white"} isPNG={isPNG} icon={FaRegUserCircle} text={post?.portfolio?.value || ""} show={post?.portfolio?.show}/>
                    <TextIconL color={"white"} isPNG={isPNG} icon={FaLinkedin} text={post.linkedin.value} show={post.linkedin.show}/>
                    <TextIconL color={"white"} isPNG={isPNG} icon={FaSquareGithub} text={post.github.value} show={post.github.show}/>
                    <TextIconL color={"white"} isPNG={isPNG} icon={FaFacebook} text={post.facebook.value} show={post.facebook.show}/>
                    <TextIconL color={"white"} isPNG={isPNG} icon={FaTwitter} text={post.twitter.value} show={post.twitter.show}/>
                    <TextIconL color={"white"} isPNG={isPNG} icon={FaReddit} text={post.reddit.value} show={post.reddit.show}/>
                  </div>
                )}
              </div>
            </aside>

            {/* ===== Main (fluid) ===== */}
            <main className="flex-1" style={{ background: BODY_BG }}>
              {/* Header */}
              <div className="px-6 md:px-10 pt-8 md:pt-10 pb-5">
                <h1 className="font-extrabold leading-none text-4xl md:text-[40px]" style={{ color: BODY_TEXT }}>
                  {post?.name || ""}
                </h1>
                <div className="text-lg md:text-xl mt-2" style={{ color: MUTED }}>
                  {post?.job || ""}
                </div>
              </div>

              <div className="px-6 md:px-10">
                <SplitLine className="w-full" style={{ backgroundColor: DIVIDER }} />
              </div>

              {/* Profile */}
              <section className="px-6 md:px-10 mt-6">
                <h2 className="text-xl md:text-2xl font-semibold" style={{ color: BODY_TEXT }}>Profile</h2>
                <div className="w-12 h-[3px] mt-3 mb-4" style={{ background: BODY_TEXT }} />
                {!isPreview ? (
                  <textarea
                    className="w-full rounded-md outline-none p-3 text-base md:text-lg"
                    style={{ background: "#F7F7F7", color: BODY_TEXT }}
                    name="descript"
                    onChange={(e) => change.valueSinge(e)}
                    placeholder={"About me"}
                    value={post.descript}
                  />
                ) : (
                  <p className="text-base md:text-lg leading-7" style={{ color: BODY_TEXT }}>
                    {post.descript}
                  </p>
                )}
              </section>

              {/* Work Experience */}
              <section className="px-6 md:px-10 mt-8">
                <h2 className="text-xl md:text-2xl font-semibold" style={{ color: BODY_TEXT }}>{t("work_experiences")}</h2>
                <div className="w-12 h-[3px] mt-3 mb-4" style={{ background: BODY_TEXT }} />
                {!isPreview ? (
                  <>
                    {post.experience.map((d, i) => (
                      <ListElementInput key={i} change={change} name="experience" index={i}
                        titleClr={"text-black"} desCrl={"text-black"} dateClr={"text-[#687688]"}
                        title={d.title} descript={d.descript} fromdate={d.from} todate={d.to}/>
                    ))}
                    <AddNewBtn onClick={() => change.add("experience")} Clr={"text-black"} borderClr={"border-black"} />
                  </>
                ) : post.experience.length ? (
                  post.experience.map((d, i) => (
                    <ListElement key={i} titleClr={"text-black"} desCrl={"text-[#1F2937]"} dateClr={"text-[#687688]"}
                      title={d.title} descript={d.descript} fromdate={d.from} todate={d.to}/>
                  ))
                ) : null}
              </section>

              {/* Education */}
              <section className="px-6 md:px-10 mt-8 mb-10">
                <h2 className="text-xl md:text-2xl font-semibold" style={{ color: BODY_TEXT }}>{t("education")}</h2>
                <div className="w-12 h-[3px] mt-3 mb-4" style={{ background: BODY_TEXT }} />
                {!isPreview ? (
                  <>
                    {post.education.map((d, i) => (
                      <ListElementInput key={i} change={change} name="education" index={i}
                        titleClr={"text-black"} desCrl={"text-black"} dateClr={"text-[#687688]"}
                        title={d.title} descript={d.descript} fromdate={d.from} todate={d.to}/>
                    ))}
                    <AddNewBtn onClick={() => change.add("education")} Clr={"text-black"} borderClr={"border-black"} />
                  </>
                ) : post.education.length ? (
                  post.education.map((d, i) => (
                    <ListElement key={i} titleClr={"text-black"} desCrl={"text-[#1F2937]"} dateClr={"text-[#687688]"}
                      title={d.title} descript={d.descript} fromdate={d.from} todate={d.to}/>
                  ))
                ) : null}
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
