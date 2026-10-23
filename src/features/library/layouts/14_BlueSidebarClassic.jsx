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
import { LiaBirthdayCakeSolid } from "react-icons/lia";

import SplitLine from "../../../components/SplitLine";
import TextIconR from "../../post_workspace/components/TextIcon_r";
import InputIconR from "../../post_workspace/components/InputIcon_r";
import InputIconL from "../../post_workspace/components/InputIcon_l";
import TextIconL from "../../post_workspace/components/TextIcon_l";
import AddNewBtn from "../../post_workspace/components/AddNewBtn";
import ListElement from "../../post_workspace/components/ListElement";
import ListElementInput from "../../post_workspace/components/ListElementInput";

/** Hàng chấm cho Skills (d.rate: 0..5, tuỳ chọn) */
function DotRow({ count = 0, max = 5 }) {
  const n = Math.max(0, Math.min(+count || 0, max));
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className="inline-block w-2.5 h-2.5 rounded-full"
          style={{ background: i < n ? "#1F2937" : "#D1D5DB" }}
        />
      ))}
    </div>
  );
}

/**
 * BlueSidebarClassic – phong cách giống ảnh mẫu
 * - Sidebar xanh đậm bên trái có avatar & các block: Contact, Education, Expertise
 * - Main trắng bên phải có tên to + job, rồi Profile + Experience
 * - Fluid khi xem, cố định A4 khi export
 *
 * Props: { isWaterMark, post, change, isPreview=false, isPNG, forExport=false }
 */
export default function BlueSidebarClassic({
  isWaterMark,
  post,
  change,
  isPreview = false,
  isPNG,
  forExport = false,
}) {
  const { t } = I18N();

  // Palette an toàn
  const NAVY = "#1F2A37";       // sidebar dark
  const NAVY_SOFT = "#233142";  // header cap
  const LIGHT = "#FFFFFF";
  const TEXT = "#111827";
  const MUTED = "#6B7280";
  const DIVIDER = "#E5E7EB";

  // Khổ A4 khi export
  const A4W = 794;
  const A4H = 1123;

  const wrapperStyle = forExport
    ? { width: `${A4W}px`, minHeight: `${A4H}px`, background: LIGHT, overflow: "hidden" }
    : { width: "100%", background: LIGHT, overflow: "hidden" };

  // Sidebar width cố định để tránh avatar đè phần tên
  const SIDEBAR_W = forExport ? 270 : 300;

  return (
    <div id="BlueSidebarClassic" className="relative mx-auto" style={wrapperStyle}>
      {/* Watermark (tùy chọn) */}
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

      {/* Khung tổng */}
      <div className="w-full h-full p-4 sm:p-6">
        <div className="w-full h-full rounded-2xl shadow-lg overflow-hidden bg-white">
          <div className="flex">
            {/* ============ SIDEBAR TRÁI ============ */}
            <aside
              className="flex-shrink-0"
              style={{ width: SIDEBAR_W, background: NAVY }}
            >
              {/* Nắp đầu + avatar */}
              <div style={{ background: NAVY_SOFT }}>
                <div className="px-6 pt-6 pb-10 flex flex-col items-center">
                  <div className="relative">
                    {post?.ava ? (
                      <img
                        crossOrigin="anonymous"
                        src={`${common.URL_BE_BASE_IMG}${post.ava}`}
                        alt="avatar"
                        className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4"
                        style={{ borderColor: LIGHT, background: LIGHT }}
                      />
                    ) : (
                      <div
                        className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4"
                        style={{ borderColor: LIGHT, background: "#E5E7EB" }}
                      />
                    )}
                  </div>
                </div>
                {/* mũi nhọn giả (đơn giản: dải trắng mỏng) */}
                <div style={{ background: NAVY_SOFT }}>
                  <div className="h-2" style={{ background: NAVY }} />
                </div>
              </div>

              {/* CONTACT */}
              <div className="px-6 py-6">
                <h3 className="uppercase tracking-wider font-semibold text-sm" style={{ color: LIGHT }}>
                  Contact
                </h3>
                <div className="mt-3 flex flex-col gap-2">
                  {!isPreview ? (
                    <>
                      <InputIconL color={"white"} icon={FaHome} text={post?.address?.value || ""} show={post?.address?.show} name={"address"} change={change} />
                      <InputIconL color={"white"} icon={MdOutlineLocalPhone} text={post?.phone?.value || ""} show={post?.phone?.show} name={"phone"} change={change} />
                      <InputIconL color={"white"} icon={IoIosMail} text={post?.mail?.value || ""} show={post?.mail?.show} name={"mail"} change={change} />
                      <InputIconL color={"white"} icon={LiaBirthdayCakeSolid} text={post.birthdate ? post.birthdate.value ? common.DateDisplayCustom(post.birthdate.value, "DD/MM/YYYY") : null : null} show={post?.birthdate?.show} name={"birthdate"} change={change} />
                    </>
                  ) : (
                    <>
                      <TextIconL color={"white"} isPNG={isPNG} icon={FaHome} text={post?.address?.value || ""} show={post?.address?.show} />
                      <TextIconL color={"white"} isPNG={isPNG} icon={MdOutlineLocalPhone} text={post?.phone?.value || ""} show={post?.phone?.show} />
                      <TextIconL color={"white"} isPNG={isPNG} icon={IoIosMail} text={post?.mail?.value || ""} show={post?.mail?.show} />
                      <TextIconL color={"white"} isPNG={isPNG} icon={LiaBirthdayCakeSolid} text={post.birthdate ? post.birthdate.value ? common.DateDisplayCustom(post.birthdate.value, "DD/MM/YYYY") : null : null} show={post?.birthdate?.show} />
                    </>
                  )}
                </div>
              </div>

              {/* EDUCATION */}
              <div className="px-6 py-5">
                <h3 className="uppercase tracking-wider font-semibold text-sm" style={{ color: LIGHT }}>
                  {t("education")}
                </h3>
                <div className="mt-3 space-y-2">
                  {!isPreview
                    ? (post.education || []).map((d, i) => (
                        <ListElementInput
                          key={i}
                          change={change}
                          name="education"
                          index={i}
                          titleClr={"text-white"}
                          desCrl={"text-white"}
                          dateClr={"text-gray-200"}
                          title={d.title}
                          descript={d.descript}
                          fromdate={d.from}
                          todate={d.to}
                        />
                      ))
                    : (post.education || []).map((d, i) => (
                        <ListElement
                          key={i}
                          titleClr={"text-white"}
                          desCrl={"text-gray-100"}
                          dateClr={"text-gray-200"}
                          title={d.title}
                          descript={d.descript}
                          fromdate={d.from}
                          todate={d.to}
                        />
                      ))}
                  {!isPreview && (
                    <AddNewBtn onClick={() => change.add("education")} Clr={"text-white"} borderClr={"border-white"} />
                  )}
                </div>
              </div>

              {/* EXPERTISE (Skills tóm tắt) */}
              <div className="px-6 py-5 pb-8">
                <h3 className="uppercase tracking-wider font-semibold text-sm" style={{ color: LIGHT }}>
                  Expertise
                </h3>
                <div className="mt-3 space-y-3">
                  {(post.skill || []).slice(0, 8).map((d, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm" style={{ color: LIGHT }}>{d.title}</span>
                      <DotRow count={Number(d?.rate ?? 0)} />
                    </div>
                  ))}
                  {!isPreview && (
                    <AddNewBtn onClick={() => change.add("skill")} Clr={"text-white"} borderClr={"border-white"} />
                  )}
                </div>
              </div>

              {/* Socials */}
              <div className="px-6 pt-0 pb-8">
                <div className="flex flex-col gap-2">
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

            {/* ============ MAIN PHẢI ============ */}
            <main className="flex-1 bg-white">
              {/* Header: Tên + Job */}
              <div className="px-8 pt-8 pb-6">
                <h1
                  className="font-extrabold tracking-wide leading-none"
                  style={{ color: TEXT, fontSize: forExport ? 34 : 32 }}
                >
                  {post?.name || ""}
                </h1>
                <div className="mt-2 text-[15px]" style={{ color: MUTED }}>
                  {post?.job || ""}
                </div>

                <div className="mt-4">
                  <SplitLine className="w-full" style={{ backgroundColor: DIVIDER, height: 2 }} />
                </div>

                {/* Dải contact ngang – nằm TRONG main, cách avatar hẳn (không đè) */}
                <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
                  {!isPreview ? (
                    <>
                      <InputIconR color={"black"} icon={FaHome} text={post?.address?.value || ""} show={post?.address?.show} name={"address"} change={change} />
                      <InputIconR color={"black"} icon={MdOutlineLocalPhone} text={post?.phone?.value || ""} show={post?.phone?.show} name={"phone"} change={change} />
                      <InputIconR color={"black"} icon={IoIosMail} text={post?.mail?.value || ""} show={post?.mail?.show} name={"mail"} change={change} />
                    </>
                  ) : (
                    <>
                      <TextIconR color={"black"} isPNG={isPNG} icon={FaHome} text={post?.address?.value || ""} show={post?.address?.show} />
                      <TextIconR color={"black"} isPNG={isPNG} icon={MdOutlineLocalPhone} text={post?.phone?.value || ""} show={post?.phone?.show} />
                      <TextIconR color={"black"} isPNG={isPNG} icon={IoIosMail} text={post?.mail?.value || ""} show={post?.mail?.show} />
                    </>
                  )}
                </div>
              </div>

              {/* PROFILE */}
              <section className="px-8">
                <h2 className="text-[18px] font-semibold" style={{ color: TEXT }}>
                  PROFESSIONAL PROFILE
                </h2>
                <div className="w-16 h-[3px] mt-2 mb-3" style={{ background: TEXT }} />
                {!isPreview ? (
                  <textarea
                    className="w-full rounded-md outline-none p-3 text-[15px] leading-7"
                    style={{ background: "#F7F7F7", color: TEXT }}
                    name="descript"
                    onChange={(e) => change.valueSinge(e)}
                    placeholder="Quickly sell yourself: strengths, achievements, goals…"
                    value={post.descript}
                  />
                ) : (
                  <p className="text-[15px] leading-7" style={{ color: TEXT }}>
                    {post.descript}
                  </p>
                )}
              </section>

              {/* EXPERIENCE */}
              <section className="px-8 mt-7">
                <h2 className="text-[18px] font-semibold" style={{ color: TEXT }}>
                  EXPERIENCE
                </h2>
                <div className="w-16 h-[3px] mt-2 mb-3" style={{ background: TEXT }} />

                {!isPreview ? (
                  <>
                    {(post.experience || []).map((d, i) => (
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
                    ))}
                    <div className="mt-2">
                      <AddNewBtn onClick={() => change.add("experience")} Clr={"text-black"} borderClr={"border-black"} />
                    </div>
                  </>
                ) : (
                  (post.experience || []).map((d, i) => (
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
                  ))
                )}
              </section>

              <div className="pb-10" />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
