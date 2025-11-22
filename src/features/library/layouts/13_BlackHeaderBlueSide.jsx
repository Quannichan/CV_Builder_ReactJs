/* eslint-disable react/prop-types */
import common from "../../../utils/common";
import { I18N } from "../../../i18n/i18n";
import Logo from "../../../components/Logo";

import {
  FaHome,
  FaRegUserCircle,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaReddit,
} from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";

import TextIconR from "../../post_workspace/components/TextIcon_r";
import InputIconR from "../../post_workspace/components/InputIcon_r";
import InputIconL from "../../post_workspace/components/InputIcon_l";
import TextIconL from "../../post_workspace/components/TextIcon_l";
import AddNewBtn from "../../post_workspace/components/AddNewBtn";
import ListElement from "../../post_workspace/components/ListElement";
import ListElementInput from "../../post_workspace/components/ListElementInput";

/** Hàng chấm cho Skills (d.rate: 0..5) */
function DotRow({ count = 0, max = 5 }) {
  const n = Math.max(0, Math.min(+count || 0, max));
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className="inline-block w-2.5 h-2.5 rounded-full"
          style={{ background: i < n ? "#1f2937" : "#d1d5db" }}
        />
      ))}
    </div>
  );
}

export default function BlackHeaderBlueSide({
  isWaterMark,
  post,
  change,
  isPreview = false,
  isPNG,
  forExport = false,
}) {
  const { t } = I18N();

  // Màu (safe cho html2canvas)
  const HEADER_BG = "#0F0F0F";
  const SIDEBAR_BG = "#BDD0E6";
  const BODY_BG = "#FFFFFF";
  const BODY_TEXT = "#111827";

  // A4 khi export
  const A4W = 794;
  const A4H = 1123;

  const wrapperStyle = forExport
    ? { width: `${A4W}px`, minHeight: `${A4H}px`, background: BODY_BG, overflow: "hidden" }
    : { width: "100%", background: BODY_BG, overflow: "hidden" };

  // Chừa chỗ avatar **chỉ cho dòng name/job**
  const nameBlockClass =
    "px-6 md:px-10 pt-7 pb-2 " + (post?.ava ? "pl-[136px] md:pl-[168px]" : "");

  return (
    <div id="BlackHeaderBlueSide" className="relative mx-auto" style={wrapperStyle}>
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

      {/* card */}
      <div className="w-full h-full p-4 sm:p-6">
        <div className="w-full h-full rounded-2xl shadow-lg overflow-hidden">
          {/* ===== Header ===== */}
          <div className="relative" style={{ background: HEADER_BG }}>
            {/* 1) NAME/JOB: giữ trái, chừa chỗ avatar */}
            <div className={nameBlockClass}>
              <h1
                className="font-extrabold text-3xl md:text-[34px] tracking-wide leading-none"
                style={{ color: "#FFFFFF" }}
              >
                {post?.name || ""}
              </h1>
              <div style={{ color: "#D1D5DB", marginTop: 6 }}>
                {post?.job || ""}
              </div>
            </div>

            {/* 2) CONTACT ROW: full-width, KHÔNG padding-left, căn GIỮA */}
            <div className="px-6 md:px-10 pb-4">
              <div className="w-full flex flex-wrap justify-center gap-x-6 gap-y-2">
                {!isPreview ? (
                  <>
                    <InputIconR
                      color={"white"}
                      icon={FaHome}
                      text={post?.address?.value || ""}
                      show={post?.address?.show}
                      name={"address"}
                      change={change}
                    />
                    <InputIconR
                      color={"white"}
                      icon={MdOutlineLocalPhone}
                      text={post?.phone?.value || ""}
                      show={post?.phone?.show}
                      name={"phone"}
                      change={change}
                    />
                    <InputIconR
                      color={"white"}
                      icon={IoIosMail}
                      text={post?.mail?.value || ""}
                      show={post?.mail?.show}
                      name={"mail"}
                      change={change}
                    />
                  </>
                ) : (
                  <>
                    <TextIconR
                      color={"white"}
                      isPNG={isPNG}
                      icon={FaHome}
                      text={post?.address?.value || ""}
                      show={post?.address?.show}
                    />
                    <TextIconR
                      color={"white"}
                      isPNG={isPNG}
                      icon={MdOutlineLocalPhone}
                      text={post?.phone?.value || ""}
                      show={post?.phone?.show}
                    />
                    <TextIconR
                      color={"white"}
                      isPNG={isPNG}
                      icon={IoIosMail}
                      text={post?.mail?.value || ""}
                      show={post?.mail?.show}
                    />
                  </>
                )}
              </div>
            </div>

            {/* AVATAR: absolute chồng mép, nhưng name/job đã chừa chỗ nên không đè */}
            <div className="absolute left-6 md:left-10 -bottom-3 z-[5]">
              {post?.ava ? (
                <img
                  crossOrigin="anonymous"
                  src={`${common.URL_BE_BASE_IMG}${post.ava}`}
                  alt="avatar"
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover"
                  style={{ border: `8px solid ${SIDEBAR_BG}`, background: "#FFFFFF" }}
                />
              ) : (
                <div
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full"
                  style={{ background: "#E5E7EB", border: `8px solid ${SIDEBAR_BG}` }}
                />
              )}
            </div>
          </div>

          {/* ===== Body: sidebar + main ===== */}
          <div className="flex mt-14">
            {/* Sidebar */}
            <aside
              className="relative z-10 px-6 py-8"
              style={{ background: SIDEBAR_BG, width: forExport ? 260 : 280 }}
            >
              {/* SUMMARY */}
              <h2 className="uppercase font-semibold tracking-wider" style={{ color: "#1F2937" }}>
                Summary
              </h2>
              <div className="mt-2">
                {!isPreview ? (
                  <textarea
                    className="w-full rounded-md outline-none p-3 text-[15px] leading-7"
                    style={{ background: "#F7F7F7", color: BODY_TEXT }}
                    name="descript"
                    onChange={(e) => change.valueSinge(e)}
                    placeholder="Write a short introduction..."
                    value={post.descript}
                  />
                ) : (
                  <p className="text-[15px] leading-7" style={{ color: "#1F2937" }}>
                    {post.descript}
                  </p>
                )}
              </div>

              {/* LANGUAGES */}
              <div className="mt-8">
                <h2 className="uppercase font-semibold tracking-wider" style={{ color: "#1F2937" }}>
                  {t("language")}
                </h2>
                <div className="mt-3 space-y-2">
                  {!isPreview
                    ? post.language.map((d, i) => (
                        <ListElementInput
                          key={i}
                          change={change}
                          name="language"
                          index={i}
                          titleClr={"text-gray-900"}
                          desCrl={"text-gray-800"}
                          dateClr={"text-gray-700"}
                          title={d.title}
                          descript={d.descript}
                          fromdate={d.from}
                          todate={d.to}
                        />
                      ))
                    : post.language.map((d, i) => (
                        <ListElement
                          key={i}
                          titleClr={"text-gray-900"}
                          desCrl={"text-gray-700"}
                          dateClr={"text-gray-600"}
                          title={d.title}
                          descript={d.descript}
                          fromdate={d.from}
                          todate={d.to}
                        />
                      ))}
                  {!isPreview && (
                    <AddNewBtn
                      onClick={() => change.add("language")}
                      Clr={"text-gray-900"}
                      borderClr={"border-gray-900"}
                    />
                  )}
                </div>
              </div>

              {/* HOBBIES */}
              <div className="mt-8">
                <h2 className="uppercase font-semibold tracking-wider" style={{ color: "#1F2937" }}>
                  {t("hobby")}
                </h2>
                <div className="mt-3 space-y-2">
                  {!isPreview
                    ? post.hobby.map((d, i) => (
                        <ListElementInput
                          key={i}
                          change={change}
                          name="hobby"
                          index={i}
                          titleClr={"text-gray-900"}
                          desCrl={"text-gray-800"}
                          dateClr={"text-gray-700"}
                          title={d.title}
                          descript={d.descript}
                          fromdate={d.from}
                          todate={d.to}
                        />
                      ))
                    : post.hobby.map((d, i) => (
                        <ListElement
                          key={i}
                          titleClr={"text-gray-900"}
                          desCrl={"text-gray-700"}
                          dateClr={"text-gray-600"}
                          title={d.title}
                          descript={d.descript}
                          fromdate={d.from}
                          todate={d.to}
                        />
                      ))}
                  {!isPreview && (
                    <AddNewBtn
                      onClick={() => change.add("hobby")}
                      Clr={"text-gray-900"}
                      borderClr={"border-gray-900"}
                    />
                  )}
                </div>
              </div>

              {/* REFERENCES */}
              <div className="mt-8">
                <h2 className="uppercase font-semibold tracking-wider" style={{ color: "#1F2937" }}>
                  References
                </h2>
                <p className="text-[15px] mt-2" style={{ color: "#1F2937" }}>
                  Available on request.
                </p>
              </div>

              {/* Socials */}
              <div className="mt-8">
                {!isPreview ? (
                  <div className="flex flex-col gap-2">
                    <InputIconL color={"black"} icon={FaRegUserCircle} text={post?.portfolio?.value || ""} show={post?.portfolio?.show} name={"portfolio"} change={change} />
                    <InputIconL color={"black"} icon={FaLinkedin} text={post.linkedin.value} show={post.linkedin.show} name={"linkedin"} change={change} />
                    <InputIconL color={"black"} icon={FaSquareGithub} text={post.github.value} show={post.github.show} name={"github"} change={change} />
                    <InputIconL color={"black"} icon={FaFacebook} text={post.facebook.value} show={post.facebook.show} name={"facebook"} change={change} />
                    <InputIconL color={"black"} icon={FaTwitter} text={post.twitter.value} show={post.twitter.show} name={"twitter"} change={change} />
                    <InputIconL color={"black"} icon={FaReddit} text={post.reddit.value} show={post.reddit.show} name={"reddit"} change={change} />
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <TextIconL color={"black"} isPNG={isPNG} icon={FaRegUserCircle} text={post?.portfolio?.value || ""} show={post?.portfolio?.show} />
                    <TextIconL color={"black"} isPNG={isPNG} icon={FaLinkedin} text={post.linkedin.value} show={post.linkedin.show} />
                    <TextIconL color={"black"} isPNG={isPNG} icon={FaSquareGithub} text={post.github.value} show={post.github.show} />
                    <TextIconL color={"black"} isPNG={isPNG} icon={FaFacebook} text={post.facebook.value} show={post.facebook.show} />
                    <TextIconL color={"black"} isPNG={isPNG} icon={FaTwitter} text={post.twitter.value} show={post.twitter.show} />
                    <TextIconL color={"black"} isPNG={isPNG} icon={FaReddit} text={post.reddit.value} show={post.reddit.show} />
                  </div>
                )}
              </div>
            </aside>

            {/* Main */}
            <main className="flex-1" style={{ background: "#FFFFFF" }}>
              {/* WORK EXPERIENCE */}
              <section className="px-6 md:px-10 py-8">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-semibold" style={{ color: BODY_TEXT }}>
                    + WORK EXPERIENCE
                  </span>
                  <div className="flex-1" style={{ height: 2, background: "#D1D5DB" }} />
                </div>
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

              {/* SKILLS */}
              <section className="px-6 md:px-10 pb-8 -mt-2">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-semibold" style={{ color: BODY_TEXT }}>
                    + SKILLS
                  </span>
                  <div className="flex-1" style={{ height: 2, background: "#D1D5DB" }} />
                </div>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  {(post.skill || []).map((d, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="font-medium" style={{ color: BODY_TEXT }}>
                        {d.title}
                      </span>
                      <DotRow count={Number(d?.rate ?? 0)} />
                    </div>
                  ))}
                  {!isPreview && (
                    <div className="md:col-span-2">
                      <AddNewBtn onClick={() => change.add("skill")} Clr={"text-black"} borderClr={"border-black"} />
                    </div>
                  )}
                </div>
              </section>

              {/* EDUCATION */}
              <section className="px-6 md:px-10 pb-10">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-semibold" style={{ color: BODY_TEXT }}>
                    + EDUCATION
                  </span>
                  <div className="flex-1" style={{ height: 2, background: "#D1D5DB" }} />
                </div>
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
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
