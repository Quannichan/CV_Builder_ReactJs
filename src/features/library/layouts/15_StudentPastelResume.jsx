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

/**
 * StudentPastelResume
 * Bố cục: Sidebar teal bên trái (avatar + profile + contact),
 *         Main trắng bên phải, đỉnh có banner peach chứa Họ Tên + Job.
 * - Fluid on screen; khi forExport=true thì cố định khổ A4.
 * - Tất cả màu set bằng HEX để export ổn định.
 *
 * Props: { isWaterMark, post, change, isPreview=false, isPNG, forExport=false }
 */
export default function StudentPastelResume({
  isWaterMark,
  post,
  change,
  isPreview = false,
  isPNG,
  forExport = false,
}) {
  const { t } = I18N();

  // ===== Palette (HEX/RGB, KHÔNG oklch) =====
  const TEAL = "#5E8C8A";      // sidebar
  const PEACH = "#E5BCAF";     // banner
  const PAPER = "#FFFFFF";     // main bg
  const INK = "#1F2937";       // main text
  const MUTED = "#4B5563";     // secondary text
  const DIV = "#E5E7EB";       // dividers
  const AVATAR_RING = "#FFFFFF";

  // ===== A4 wrapper khi export =====
  const A4W = 794;
  const A4H = 1123;
  const wrapperStyle = forExport
    ? { width: `${A4W}px`, minHeight: `${A4H}px`, background: PAPER, overflow: "hidden" }
    : { width: "100%", background: PAPER, overflow: "hidden" };

  // ===== Header title styles (main banner) =====
  const titleStyle = { color: INK, fontWeight: 800, fontSize: 36, lineHeight: 1.1, letterSpacing: "0.5px" };
  const jobStyle = { color: MUTED, fontSize: 18, marginTop: 6 };

  // ===== Section title with chevron =====
  const SectionTitle = ({ children }) => (
    <div className="flex items-center gap-3">
      <span style={{
        display: "inline-block",
        width: 10, height: 10, transform: "rotate(45deg)",
        borderTop: `3px solid ${INK}`, borderRight: `3px solid ${INK}`
      }} />
      <span className="uppercase tracking-wider font-semibold" style={{ color: INK }}>
        {children}
      </span>
    </div>
  );

  return (
    <div id="StudentPastelResume" className="relative mx-auto" style={wrapperStyle}>
      {/* watermark */}
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

      {/* layout grid: sidebar + main */}
      <div className="w-full h-full p-4 sm:p-6">
        <div className="w-full h-full rounded-2xl shadow-lg overflow-hidden">
          <div className="flex">
            {/* ===== Sidebar (teal) ===== */}
            <aside
              className="flex-shrink-0"
              style={{ background: TEAL, width: forExport ? 290 : 300 }}
            >
              {/* Avatar block */}
              <div className="w-full flex items-center justify-center" style={{ padding: "28px 16px 12px" }}>
                {post?.ava ? (
                  <img
                    crossOrigin="anonymous"
                    src={post.ava ? !post.ava.includes("http") ? `${common.URL_BE_BASE_IMG}${post.ava}` : post.ava : ""}
                    alt="avatar"
                    className="rounded-full object-cover"
                    style={{
                      width: 160, height: 160,
                      border: `6px solid ${AVATAR_RING}`,
                      background: "#F3F4F6"
                    }}
                  />
                ) : (
                  <div
                    className="rounded-full"
                    style={{
                      width: 160, height: 160,
                      background: "#E5E7EB",
                      border: `6px solid ${AVATAR_RING}`
                    }}
                  />
                )}
              </div>

              {/* Sidebar content */}
              <div className="px-6 pb-8">
                {/* Profile */}
                <h3 className="uppercase font-semibold tracking-wider" style={{ color: PAPER }}>Profile</h3>
                <div className="mt-2">
                  {!isPreview ? (
                    <textarea
                      className="w-full rounded-md outline-none p-3 text-[15px] leading-7"
                      style={{ background: "#F7F7F7", color: INK }}
                      name="descript"
                      onChange={(e) => change.valueSinge(e)}
                      placeholder="Write a short introduction..."
                      value={post.descript}
                    />
                  ) : (
                    <p className="text-[15px] leading-7" style={{ color: PAPER }}>
                      {post.descript}
                    </p>
                  )}
                </div>

                {/* Contact */}
                <h3 className="uppercase font-semibold tracking-wider mt-6" style={{ color: PAPER }}>
                  Contact me
                </h3>
                <div className="mt-3 flex flex-col gap-2">
                  {!isPreview ? (
                    <>
                      <InputIconL color={"white"} icon={MdOutlineLocalPhone} text={post?.phone?.value || ""} show={post?.phone?.show} name={"phone"} change={change} />
                      <InputIconL color={"white"} icon={IoIosMail} text={post?.mail?.value || ""} show={post?.mail?.show} name={"mail"} change={change} />
                      <InputIconL color={"white"} icon={FaHome} text={post?.address?.value || ""} show={post?.address?.show} name={"address"} change={change} />
                    </>
                  ) : (
                    <>
                      <TextIconL color={"white"} isPNG={isPNG} icon={MdOutlineLocalPhone} text={post?.phone?.value || ""} show={post?.phone?.show} />
                      <TextIconL color={"white"} isPNG={isPNG} icon={IoIosMail} text={post?.mail?.value || ""} show={post?.mail?.show} />
                      <TextIconL color={"white"} isPNG={isPNG} icon={FaHome} text={post?.address?.value || ""} show={post?.address?.show} />
                    </>
                  )}
                </div>

                {/* Socials */}
                <div className="mt-3 flex flex-col gap-2">
                  {!isPreview ? (
                    <>
                      <InputIconL color={"white"} icon={FaRegUserCircle} text={post?.portfolio?.value || ""} show={post?.portfolio?.show} name={"portfolio"} change={change} />
                      <InputIconL color={"white"} icon={FaLinkedin} text={post.linkedin.value} show={post.linkedin.show} name={"linkedin"} change={change} />
                      <InputIconL color={"white"} icon={FaSquareGithub} text={post.github.value} show={post.github.show} name={"github"} change={change} />
                      <InputIconL color={"white"} icon={FaFacebook} text={post.facebook.value} show={post.facebook.show} name={"facebook"} change={change} />
                      <InputIconL color={"white"} icon={FaTwitter} text={post.twitter.value} show={post.twitter.show} name={"twitter"} change={change} />
                      <InputIconL color={"white"} icon={FaReddit} text={post.reddit.value} show={post.reddit.show} name={"reddit"} change={change} />
                    </>
                  ) : (
                    <>
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

            {/* ===== Main (banner + sections) ===== */}
            <main className="flex-1" style={{ background: PAPER }}>
              {/* Peach banner with name + job */}
              <div style={{ background: PEACH }}>
                <div className="px-6 md:px-10 py-6 md:py-7">
                  <div style={titleStyle}>
                    {(post?.name || "").toUpperCase()}
                  </div>
                  <div style={jobStyle}>{post?.job || ""}</div>
                </div>
              </div>

              {/* Body */}
              <div className="px-6 md:px-10 py-8 space-y-10">
                {/* Education */}
                <section>
                  <SectionTitle>{t("education") || "EDUCATION"}</SectionTitle>
                  <div className="mt-4">
                    {!isPreview
                      ? post.education.map((d, i) => (
                          <ListElementInput
                            key={i}
                            change={change}
                            name="education"
                            index={i}
                            titleClr={"text-black"}
                            desCrl={"text-black"}
                            dateClr={"text-gray-600"}
                            title={d.title}
                            descript={d.descript}
                            fromdate={d.from}
                            todate={d.to}
                          />
                        ))
                      : post.education.map((d, i) => (
                          <ListElement
                            key={i}
                            titleClr={"text-black"}
                            desCrl={"text-gray-800"}
                            dateClr={"text-gray-600"}
                            title={d.title}
                            descript={d.descript}
                            fromdate={d.from}
                            todate={d.to}
                          />
                        ))}
                    {!isPreview && (
                      <AddNewBtn onClick={() => change.add("education")} Clr={"text-black"} borderClr={"border-black"} />
                    )}
                  </div>
                </section>

                {/* Languages */}
                <section>
                  <SectionTitle>{t("language") || "LANGUAGE"}</SectionTitle>
                  <div className="mt-4">
                    {!isPreview
                      ? post.language.map((d, i) => (
                          <ListElementInput
                            key={i}
                            change={change}
                            name="language"
                            index={i}
                            titleClr={"text-black"}
                            desCrl={"text-black"}
                            dateClr={"text-gray-600"}
                            title={d.title}
                            descript={d.descript}
                            fromdate={d.from}
                            todate={d.to}
                          />
                        ))
                      : post.language.map((d, i) => (
                          <ListElement
                            key={i}
                            titleClr={"text-black"}
                            desCrl={"text-gray-800"}
                            dateClr={"text-gray-600"}
                            title={d.title}
                            descript={d.descript}
                            fromdate={d.from}
                            todate={d.to}
                          />
                        ))}
                    {!isPreview && (
                      <AddNewBtn onClick={() => change.add("language")} Clr={"text-black"} borderClr={"border-black"} />
                    )}
                  </div>
                </section>

                {/* Computer Skills (map từ post.skill) */}
                <section>
                  <SectionTitle>COMPUTER SKILLS</SectionTitle>
                  <div className="mt-4">
                    {!isPreview
                      ? (post.skill || []).map((d, i) => (
                          <ListElementInput
                            key={i}
                            change={change}
                            name="skill"
                            index={i}
                            titleClr={"text-black"}
                            desCrl={"text-black"}
                            dateClr={"text-gray-600"}
                            title={d.title}
                            descript={d.descript}
                            fromdate={d.from}
                            todate={d.to}
                          />
                        ))
                      : (post.skill || []).map((d, i) => (
                          <ListElement
                            key={i}
                            titleClr={"text-black"}
                            desCrl={"text-gray-800"}
                            dateClr={"text-gray-600"}
                            title={d.title}
                            descript={d.descript}
                            fromdate={d.from}
                            todate={d.to}
                          />
                        ))}
                    {!isPreview && (
                      <AddNewBtn onClick={() => change.add("skill")} Clr={"text-black"} borderClr={"border-black"} />
                    )}
                  </div>
                </section>

                {/* Volunteer Experience (map từ post.experience) */}
                <section>
                  <SectionTitle>VOLUNTEER EXPERIENCE</SectionTitle>
                  <div className="mt-4">
                    {!isPreview
                      ? post.experience.map((d, i) => (
                          <ListElementInput
                            key={i}
                            change={change}
                            name="experience"
                            index={i}
                            titleClr={"text-black"}
                            desCrl={"text-black"}
                            dateClr={"text-gray-600"}
                            title={d.title}
                            descript={d.descript}
                            fromdate={d.from}
                            todate={d.to}
                          />
                        ))
                      : post.experience.map((d, i) => (
                          <ListElement
                            key={i}
                            titleClr={"text-black"}
                            desCrl={"text-gray-800"}
                            dateClr={"text-gray-600"}
                            title={d.title}
                            descript={d.descript}
                            fromdate={d.from}
                            todate={d.to}
                          />
                        ))}
                    {!isPreview && (
                      <AddNewBtn onClick={() => change.add("experience")} Clr={"text-black"} borderClr={"border-black"} />
                    )}
                  </div>
                </section>

                {/* Divider bottom (nhẹ) */}
                <div style={{ height: 1, background: DIV }} />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
