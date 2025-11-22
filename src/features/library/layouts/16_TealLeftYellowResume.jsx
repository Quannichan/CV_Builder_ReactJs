/* eslint-disable react/prop-types */
import common from "../../../utils/common";
import { I18N } from "../../../i18n/i18n";
import Logo from "../../../components/Logo";

import { FaHome, FaRegUserCircle, FaLinkedin, FaFacebook, FaTwitter, FaReddit } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";

import TextIconL from "../../post_workspace/components/TextIcon_l";
import InputIconL from "../../post_workspace/components/InputIcon_l";
import AddNewBtn from "../../post_workspace/components/AddNewBtn";
import ListElement from "../../post_workspace/components/ListElement";
import ListElementInput from "../../post_workspace/components/ListElementInput";

function SkillBar({ title = "", rate = 0 }) {
  const val = Number(rate ?? 0);
  const pct = val <= 5 ? Math.max(0, Math.min(5, val)) * 20 : Math.max(0, Math.min(100, val));
  return (
    <div className="mb-3">
      <div className="text-sm font-medium" style={{ color: "#082F49" }}>{title}</div>
      <div style={{ height: 8, background: "#E2E8F0", borderRadius: 4, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: "#14B8A6" }} />
      </div>
    </div>
  );
}

export default function TealLeftYellowResume({
  isWaterMark,
  post,
  change,
  isPreview = false,
  isPNG,
  forExport = false,
}) {
  const { t } = I18N();

  const TEAL_BG = "#0D4D5C";
  const TEAL_TEXT = "#D1FAE5";
  const NAME_ACCENT = "#FFFFFF";
  const YELLOW_BG = "#F7C948";
  const INK = "#082F49";

  const A4W = 794;
  const A4H = 1123;
  const wrapperStyle = forExport
    ? { width: `${A4W}px`, minHeight: `${A4H}px`, background: YELLOW_BG, overflow: "hidden" }
    : { width: "100%", background: YELLOW_BG, overflow: "hidden" };

  return (
    <div id="TealLeftYellowResume" className="relative mx-auto" style={wrapperStyle}>
      {isPreview && isWaterMark ? (
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <Logo
            className="border-0 px-3 py-3 rounded-xl"
            nameClassName={`text-black text-4xl ${isPNG ? "" : "pb-8"}`}
            iconClassName={`text-2xl m-5 text-white ${isPNG ? "p-1" : ""}`}
            iconStyle={{ backgroundColor: "#2563EB" }}
          />
        </div>
      ) : null}

      <div className="w-full h-full p-4 sm:p-6">
        <div className="w-full h-full rounded-2xl shadow-lg overflow-hidden flex">
          {/* ===== Sidebar ===== */}
          <aside className="flex-shrink-0" style={{ width: forExport ? 330 : 340, background: TEAL_BG }}>
            <div className="px-8 pt-8 pb-10">
              {/* Avatar */}
              <div className="w-full flex items-center justify-start">
                {post?.ava ? (
                  <img
                    crossOrigin="anonymous"
                    src={`${common.URL_BE_BASE_IMG}${post.ava}`}
                    alt="avatar"
                    className="rounded-full object-cover"
                    style={{ width: 140, height: 140, border: "6px solid #FFFFFF", background: "#F3F4F6" }}
                  />
                ) : (
                  <div
                    className="rounded-full"
                    style={{ width: 140, height: 140, background: "#E5E7EB", border: "6px solid #FFFFFF" }}
                  />
                )}
              </div>

              {/* Name + role */}
              <div className="mt-6">
                <div
                  style={{
                    color: NAME_ACCENT,
                    fontWeight: 800,
                    fontSize: 38,
                    lineHeight: 1.05,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  {post?.name || ""}
                </div>
                <div style={{ color: TEAL_TEXT, marginTop: 8, letterSpacing: "1px", textTransform: "uppercase" }}>
                  {post?.job || ""}
                </div>
              </div>

              <div className="my-6" style={{ width: 56, height: 6, background: NAME_ACCENT, borderRadius: 3 }} />

              {/* Profile */}
              <h3 className="uppercase font-semibold tracking-widest" style={{ color: NAME_ACCENT }}>Profile</h3>
              <div className="mt-2">
                {!isPreview ? (
                  <textarea
                    className="w-full rounded-md outline-none p-3 text-[15px] leading-7"
                    style={{ background: "#F7F7F7", color: "#111827" }}
                    name="descript"
                    onChange={(e) => change.valueSinge(e)}
                    placeholder="Short summary about you..."
                    value={post.descript}
                  />
                ) : (
                  <p className="text-[15px] leading-7" style={{ color: TEAL_TEXT }}>{post.descript}</p>
                )}
              </div>

              {/* Contact */}
              <h3 className="uppercase font-semibold tracking-widest mt-6" style={{ color: NAME_ACCENT }}>Contact</h3>
              <div className="mt-3 flex flex-col gap-2">
                {!isPreview ? (
                  <>
                    <InputIconL color={"white"} icon={MdOutlineLocalPhone} text={post?.phone?.value || ""} show={post?.phone?.show} name={"phone"} change={change} />
                    <InputIconL color={"white"} icon={IoIosMail} text={post?.mail?.value || ""} show={post?.mail?.show} name={"mail"} change={change} />
                    <InputIconL color={"white"} icon={FaHome} text={post?.address?.value || ""} show={post?.address?.show} name={"address"} change={change} />
                    <InputIconL color={"white"} icon={FaRegUserCircle} text={post?.portfolio?.value || ""} show={post?.portfolio?.show} name={"portfolio"} change={change} />
                    <InputIconL color={"white"} icon={FaLinkedin} text={post.linkedin.value} show={post.linkedin.show} name={"linkedin"} change={change} />
                    <InputIconL color={"white"} icon={FaSquareGithub} text={post.github.value} show={post.github.show} name={"github"} change={change} />
                    <InputIconL color={"white"} icon={FaFacebook} text={post.facebook.value} show={post.facebook.show} name={"facebook"} change={change} />
                    <InputIconL color={"white"} icon={FaTwitter} text={post.twitter.value} show={post.twitter.show} name={"twitter"} change={change} />
                    <InputIconL color={"white"} icon={FaReddit} text={post.reddit.value} show={post.reddit.show} name={"reddit"} change={change} />
                  </>
                ) : (
                  <>
                    <TextIconL color={"white"} isPNG={isPNG} icon={MdOutlineLocalPhone} text={post?.phone?.value || ""} show={post?.phone?.show} />
                    <TextIconL color={"white"} isPNG={isPNG} icon={IoIosMail} text={post?.mail?.value || ""} show={post?.mail?.show} />
                    <TextIconL color={"white"} isPNG={isPNG} icon={FaHome} text={post?.address?.value || ""} show={post?.address?.show} />
                    <TextIconL color={"white"} isPNG={isPNG} icon={FaRegUserCircle} text={post?.portfolio?.value || ""} show={post?.portfolio?.show} />
                    <TextIconL color={"white"} isPNG={isPNG} icon={FaLinkedin} text={post.linkedin.value} show={post.linkedin.show} />
                    <TextIconL color={"white"} isPNG={isPNG} icon={FaSquareGithub} text={post.github.value} show={post.github.show} />
                    <TextIconL color={"white"} isPNG={isPNG} icon={FaFacebook} text={post.facebook.value} show={post.facebook.show} />
                    <TextIconL color={"white"} isPNG={isPNG} icon={FaTwitter} text={post.twitter.value} show={post.twitter.show} />
                    <TextIconL color={"white"} isPNG={isPNG} icon={FaReddit} text={post.reddit.value} show={post.reddit.show} />
                  </>
                )}
              </div>
            </div>
          </aside>

          {/* ===== Main ===== */}
          <main className="flex-1" style={{ background: YELLOW_BG }}>
            <div className="px-8 md:px-10 py-8">
              {/* EXPERIENCE */}
              <section className="mb-8">
                <div className="uppercase tracking-widest font-extrabold" style={{ color: INK, letterSpacing: "3px" }}>
                  Experience
                </div>
                <div className="mt-4">
                  {!isPreview
                    ? post.experience.map((d, i) => (
                        <ListElementInput
                          key={i}
                          change={change}
                          name="experience"
                          index={i}
                          titleClr={"text-[#082F49]"}
                          desCrl={"text-[#0C4A6E]"}
                          dateClr={"text-[#0C4A6E]"}
                          title={d.title}
                          descript={d.descript}
                          fromdate={d.from}
                          todate={d.to}
                        />
                      ))
                    : post.experience.map((d, i) => (
                        <ListElement
                          key={i}
                          titleClr={"text-[#082F49]"}
                          desCrl={"text-[#0C4A6E]"}
                          dateClr={"text-[#0C4A6E]"}
                          title={d.title}
                          descript={d.descript}
                          fromdate={d.from}
                          todate={d.to}
                        />
                      ))}
                  {!isPreview && (
                    <AddNewBtn onClick={() => change.add("experience")} Clr={"text-[#082F49]"} borderClr={"border-[#082F49]"} />
                  )}
                </div>
              </section>

              {/* EDUCATION */}
              <section className="mb-8">
                <div className="uppercase tracking-widest font-extrabold" style={{ color: INK, letterSpacing: "3px" }}>
                  {t("education") || "Education"}
                </div>
                <div className="mt-4">
                  {!isPreview
                    ? post.education.map((d, i) => (
                        <ListElementInput
                          key={i}
                          change={change}
                          name="education"
                          index={i}
                          titleClr={"text-[#082F49]"}
                          desCrl={"text-[#0C4A6E]"}
                          dateClr={"text-[#0C4A6E]"}
                          title={d.title}
                          descript={d.descript}
                          fromdate={d.from}
                          todate={d.to}
                        />
                      ))
                    : post.education.map((d, i) => (
                        <ListElement
                          key={i}
                          titleClr={"text-[#082F49]"}
                          desCrl={"text-[#0C4A6E]"}
                          dateClr={"text-[#0C4A6E]"}
                          title={d.title}
                          descript={d.descript}
                          fromdate={d.from}
                          todate={d.to}
                        />
                      ))}
                  {!isPreview && (
                    <AddNewBtn onClick={() => change.add("education")} Clr={"text-[#082F49]"} borderClr={"border-[#082F49]"} />
                  )}
                </div>
              </section>

              {/* SKILLS */}
              <section>
                <div className="uppercase tracking-widest font-extrabold" style={{ color: INK, letterSpacing: "3px" }}>
                  Skills
                </div>
                <div className="mt-4 grid md:grid-cols-2 gap-x-10">
                  {(post.skill || []).map((d, i) => (
                    <SkillBar key={i} title={d.title} rate={Number(d?.rate ?? 0)} />
                  ))}
                  {!isPreview && (
                    <div className="md:col-span-2">
                      <AddNewBtn onClick={() => change.add("skill")} Clr={"text-[#082F49]"} borderClr={"border-[#082F49]"} />
                    </div>
                  )}
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
