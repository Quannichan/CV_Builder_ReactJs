/* eslint-disable react/prop-types */
import common from "../../../utils/common";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FaHome, FaReddit } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import SplitLine from "../../../components/SplitLine";
import { FaRegUserCircle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import TextIconR from "../../post_workspace/components/TextIcon_r";
import InputIconR from "../../post_workspace/components/InputIcon_r";
import InputIconL from "../../post_workspace/components/InputIcon_l";
import TextIconL from "../../post_workspace/components/TextIcon_l";
import AddNewBtn from "../../post_workspace/components/AddNewBtn";
import ListElement from "../../post_workspace/components/ListElement";
import ListElementInput from "../../post_workspace/components/ListElementInput";
import { I18N } from "../../../i18n/i18n";
import Logo from "../../../components/Logo";

export default function ITPost({ isWaterMark, post, change, isPreview = false, isPNG }) {
  const { t } = I18N();

  // màu theo mẫu
  const RIBBON_FROM = "#0480D9";
  const RIBBON_MID  = "#098CE0";
  const RIBBON_TO   = "#0277CF";
  const ACCENT      = "#2B86C5";
  const NAVY        = "#23364A";   // sidebar
  const TEXT_DARK   = "#4B5563";

  return (
    <div className="relative">
      {isPreview && isWaterMark ? (
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <Logo
            className={"border-0 px-3 py-3 rounded-xl"}
            nameClassName={`text-black text-4xl ${isPNG ? "" : "pb-8"}`}
            iconClassName={`text-2xl m-5 text-white bg_base ${isPNG ? "p-1" : ""}`}
          />
        </div>
      ) : null}

      {/* HEADER: blue ribbon */}
      <div
        className={`pt-10 pl-20 pr-20 pb-8 gap-7 flex justify-between items-center`}
        style={{
          backgroundImage: `linear-gradient(90deg, ${RIBBON_FROM}, ${RIBBON_MID}, ${RIBBON_TO})`,
        }}
      >
        <div className="flex justify-start items-center gap-7">
          {post.ava ? (
            <img
              crossOrigin="anonymous"
              alt="avatar"
              src={`${common.URL_BE_BASE_IMG}${post ? post.ava : ""}`}
              className="w-50 h-50 object-cover rounded-full shadow-2xl"
            />
          ) : null}

          <div style={{ marginBottom: "22px" }}>
            <h1 className="text-5xl font-bold text-white text-nowrap">
              {post ? post.name : ""}
            </h1>
            <h3 className="text-xl text-[#e3e3e3] text-nowrap">{post ? post.job : ""}</h3>
          </div>
        </div>

        {/* contact trên ribbon */}
        {!isPreview ? (
          <div className="flex flex-col items-end gap-3">
            <InputIconR color={"white"} icon={LiaBirthdayCakeSolid}
              text={common.DateDisplayCustom(post.birthdate ? (post.birthdate.value || "") : "", "DD/MM/YYYY")}
              show={post.birthdate ? post.birthdate.show : false} name={"birthdate"} change={change}/>
            <InputIconR color={"white"} icon={FaHome}
              text={post.address ? (post.address.value || "") : ""} show={post.address ? post.address.show : false}
              name={"address"} change={change}/>
            <InputIconR color={"white"} icon={MdOutlineLocalPhone}
              text={post.phone ? (post.phone.value || "") : ""} show={post.phone ? post.phone.show : false}
              name={"phone"} change={change}/>
            <InputIconR color={"white"} icon={IoIosMail}
              text={post.mail ? (post.mail.value || "") : ""} show={post.mail ? post.mail.show : false}
              name={"mail"} change={change}/>
          </div>
        ) : !post.birthdate.show && !post.address.show && !post.phone.show && !post.mail.show ? null : (
          <div className="flex flex-col items-end gap-3">
            <TextIconR color={"white"} isPNG={isPNG} icon={LiaBirthdayCakeSolid}
              text={common.DateDisplayCustom(post.birthdate ? (post.birthdate.value || "") : "", "DD/MM/YYYY")}
              show={post.birthdate ? post.birthdate.show : false}/>
            <TextIconR color={"white"} isPNG={isPNG} icon={FaHome}
              text={post.address ? (post.address.value || "") : ""} show={post.address ? post.address.show : false}/>
            <TextIconR color={"white"} isPNG={isPNG} icon={MdOutlineLocalPhone}
              text={post.phone ? (post.phone.value || "") : ""} show={post.phone ? post.phone.show : false}/>
            <TextIconR color={"white"} isPNG={isPNG} icon={IoIosMail}
              text={post.mail ? (post.mail.value || "") : ""} show={post.mail ? post.mail.show : false}/>
          </div>
        )}
      </div>

      <SplitLine className={"w-full"} style={{ backgroundColor: ACCENT }} />

      <div className={`flex justify-between items-stretch`}>
        {/* SIDEBAR NAVY */}
        <div
          className="flex-1/4 px-6 py-8 flex flex-col gap-5 rounded-bl-lg"
          style={{ backgroundColor: NAVY }}
        >
          {!isPreview ? (
            <div className="flex flex-col items-start justify-start gap-2">
              <InputIconL color={"white"} icon={FaRegUserCircle}
                text={post.portfolio ? (post.portfolio.value || "") : ""} show={post.portfolio ? post.portfolio.show : false}
                name={"portfolio"} change={change}/>
              <InputIconL color={"white"} icon={FaLinkedin}
                text={post.linkedin.value} show={post.linkedin.show} name={"linkedin"} change={change}/>
              <InputIconL color={"white"} icon={FaSquareGithub}
                text={post.github.value} show={post.github.show} name={"github"} change={change}/>
              <InputIconL color={"white"} icon={FaFacebook}
                text={post.facebook.value} show={post.facebook.show} name={"facebook"} change={change}/>
              <InputIconL color={"white"} icon={FaTwitter}
                text={post.twitter.value} show={post.twitter.show} name={"twitter"} change={change}/>
              <InputIconL color={"white"} icon={FaReddit}
                text={post.reddit.value} show={post.reddit.show} name={"reddit"} change={change}/>
            </div>
          ) : !post.portfolio.show && !post.linkedin.show && !post.github.show && !post.facebook.show && !post.twitter.show && !post.reddit.show ? null : (
            <div className="flex flex-col items-start justify-start gap-2">
              <TextIconL color={"white"} isPNG={isPNG} icon={FaRegUserCircle}
                text={post.portfolio.value} show={post.portfolio.show}/>
              <TextIconL color={"white"} isPNG={isPNG} icon={FaLinkedin}
                text={post.linkedin.value} show={post.linkedin.show}/>
              <TextIconL color={"white"} isPNG={isPNG} icon={FaSquareGithub}
                text={post.github.value} show={post.github.show}/>
              <TextIconL color={"white"} isPNG={isPNG} icon={FaFacebook}
                text={post.facebook.value} show={post.facebook.show}/>
              <TextIconL color={"white"} isPNG={isPNG} icon={FaTwitter}
                text={post.twitter.value} show={post.twitter.show}/>
              <TextIconL color={"white"} isPNG={isPNG} icon={FaReddit}
                text={post.reddit.value} show={post.reddit.show}/>
            </div>
          )}

          {/* SKILLS */}
          {!isPreview ? (
            <div className="flex flex-col items-start justify-start gap-3">
              <h2 className="text-2xl font-semibold uppercase text-white tracking-widest text-nowrap">
                {t("skill")}
              </h2>
              <SplitLine className={"w-full"} style={{ backgroundColor: "#FFFFFF80" }} />
              {post.skill.map((d, i) => (
                <ListElementInput
                  change={change}
                  name="skill"
                  titleClr={"text-white"}
                  desCrl={"text-white"}
                  dateClr={"text-[#efefeff5]"}
                  index={i}
                  key={i}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                />
              ))}
              <AddNewBtn onClick={() => change.add("skill")} Clr={"text-white"} borderClr={"border-white"} />
            </div>
          ) : post.skill.length ? (
            <div className="flex flex-col items-start justify-start gap-3">
              <h2 className="text-2xl font-semibold uppercase text-white tracking-widest text-nowrap">
                {t("skill")}
              </h2>
              <SplitLine className={"w-full"} style={{ backgroundColor: "#FFFFFF80" }} />
              {post.skill.map((d, i) => (
                <ListElement
                  key={i}
                  titleClr={"text-white text-xl"}
                  desCrl={"text-white text-lg"}
                  dateClr={"text-[#efefeff5] text-md"}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                />
              ))}
            </div>
          ) : null}

          {/* LANGUAGES */}
          {!isPreview ? (
            <div className="flex flex-col items-start justify-start gap-3">
              <h2 className="text-2xl font-semibold uppercase text-white tracking-widest text-nowrap">
                {t("language")}
              </h2>
              <SplitLine className={"w-full"} style={{ backgroundColor: "#FFFFFF80" }} />
              {post.language.map((d, i) => (
                <ListElementInput
                  change={change}
                  name="language"
                  titleClr={"text-white"}
                  desCrl={"text-white"}
                  dateClr={"text-[#efefeff5]"}
                  index={i}
                  key={i}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                />
              ))}
              <AddNewBtn onClick={() => change.add("language")} Clr={"text-white"} borderClr={"border-white"} />
            </div>
          ) : post.language.length ? (
            <div className="flex flex-col items-start justify-start gap-3">
              <h2 className="text-2xl font-semibold uppercase text-white tracking-widest text-nowrap">
                {t("language")}
              </h2>
              <SplitLine className={"w-full"} style={{ backgroundColor: "#FFFFFF80" }} />
              {post.language.map((d, i) => (
                <ListElement
                  key={i}
                  titleClr={"text-white text-xl"}
                  desCrl={"text-white text-lg"}
                  dateClr={"text-[#efefeff5] text-md"}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                />
              ))}
            </div>
          ) : null}

          {/* HOBBIES */}
          {!isPreview ? (
            <div className="flex flex-col items-start justify-start gap-3">
              <h2 className="text-2xl font-semibold uppercase text-white tracking-widest text-nowrap">
                {t("hobby")}
              </h2>
              <SplitLine className={"w-full"} style={{ backgroundColor: "#FFFFFF80" }} />
              {post.hobby.map((d, i) => (
                <ListElementInput
                  change={change}
                  name="hobby"
                  titleClr={"text-white"}
                  desCrl={"text-white"}
                  dateClr={"text-[#efefeff5]"}
                  index={i}
                  key={i}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                />
              ))}
              <AddNewBtn onClick={() => change.add("hobby")} Clr={"text-white"} borderClr={"border-white"} />
            </div>
          ) : post.hobby.length ? (
            <div className="flex flex-col items-start justify-start gap-3">
              <h2 className="text-2xl font-semibold uppercase text-white tracking-widest text-nowrap">
                {t("hobby")}
              </h2>
              <SplitLine className={"w-full"} style={{ backgroundColor: "#FFFFFF80" }} />
              {post.hobby.map((d, i) => (
                <ListElement
                  key={i}
                  titleClr={"text-white text-xl"}
                  desCrl={"text-white text-lg"}
                  dateClr={"text-[#efefeff5] text-md"}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                />
              ))}
            </div>
          ) : null}
        </div>

        {/* MAIN CONTENT - NỀN TRẮNG NHƯ MẪU */}
        <div className="flex-3/4 py-8 px-7 flex flex-col gap-5" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="flex flex-col justify-start items-start gap-3">
            <p className="text-3xl font-semibold uppercase" style={{ color: TEXT_DARK, marginBottom: "8px" }}>
              {t("about_me")}
            </p>
            <SplitLine className={"w-full"} style={{ backgroundColor: "#5a5a5a5a" }} />
            {!isPreview ? (
              <textarea
                className="text-2xl leading-9 w-full outline-none min-h-80 max-h-200 rounded-lg p-3"
                style={{ backgroundColor: "#f5f5f5", color: TEXT_DARK }}
                name="descript"
                onChange={(e) => change.valueSinge(e)}
                placeholder={t("about_me")}
                value={post.descript}
              />
            ) : (
              <p className="text-2xl leading-9" style={{ color: TEXT_DARK }}>
                {post.descript}
              </p>
            )}
          </div>

          {/* EXPERIENCE */}
          {!isPreview ? (
            <div className="flex flex-col justify-start items-start gap-3">
              <h2 className="text-3xl font-semibold uppercase" style={{ color: TEXT_DARK, marginBottom: "8px" }}>
                {t("work_experiences")}
              </h2>
              <SplitLine className={"w-full"} style={{ backgroundColor: "#5a5a5a5a" }} />
              {post.experience.map((d, i) => (
                <ListElementInput
                  change={change}
                  name="experience"
                  titleClr={"text-[#4B5563]"}
                  desCrl={"text-[#4B5563]"}
                  dateClr={"text-[#687688]"}
                  index={i}
                  key={i}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                />
              ))}
              <AddNewBtn onClick={() => change.add("experience")} Clr={"text-[#2B86C5]"} borderClr={"border-[#2B86C5]"} />
            </div>
          ) : post.experience.length ? (
            <div className="flex flex-col justify-start items-start gap-3">
              <h2 className="text-3xl font-semibold uppercase" style={{ color: TEXT_DARK, marginBottom: "8px" }}>
                {t("work_experiences")}
              </h2>
              <SplitLine className={"w-full"} style={{ backgroundColor: "#5a5a5a5a" }} />
              {post.experience.map((d, i) => (
                <ListElement
                  key={i}
                  titleClr={"text-[#4B5563]"}
                  desCrl={"text-[#4B5563]"}
                  dateClr={"text-[#687688]"}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                />
              ))}
            </div>
          ) : null}

          {/* CERTIFICATES */}
          {!isPreview ? (
            <div className="flex flex-col justify-start items-start gap-3">
              <h2 className="text-3xl font-semibold uppercase" style={{ color: TEXT_DARK, marginBottom: "8px" }}>
                {t("certificates")}
              </h2>
              <SplitLine className={"w-full"} style={{ backgroundColor: "#5a5a5a5a" }} />
              {post.certificate.map((d, i) => (
                <ListElementInput
                  change={change}
                  name="certificate"
                  titleClr={"text-[#4B5563]"}
                  desCrl={"text-[#4B5563]"}
                  dateClr={"text-[#687688]"}
                  index={i}
                  key={i}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                />
              ))}
              <AddNewBtn onClick={() => change.add("certificate")} Clr={"text-[#2B86C5]"} borderClr={"border-[#2B86C5]"} />
            </div>
          ) : post.certificate.length ? (
            <div className="flex flex-col justify-start items-start gap-3">
              <h2 className="text-3xl font-semibold uppercase" style={{ color: TEXT_DARK, marginBottom: "8px" }}>
                {t("certificates")}
              </h2>
              <SplitLine className={"w-full"} style={{ backgroundColor: "#5a5a5a5a" }} />
              {post.certificate.map((d, i) => (
                <ListElement
                  key={i}
                  titleClr={"text-[#4B5563]"}
                  desCrl={"text-[#4B5563]"}
                  dateClr={"text-[#687688]"}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                />
              ))}
            </div>
          ) : null}

          {/* EDUCATION */}
          {!isPreview ? (
            <div className="flex flex-col justify-start items-start gap-3">
              <h2 className="text-3xl font-semibold uppercase" style={{ color: TEXT_DARK, marginBottom: "8px" }}>
                {t("education")}
              </h2>
              <SplitLine className={"w-full"} style={{ backgroundColor: "#5a5a5a5a" }} />
              {post.education.map((d, i) => (
                <ListElementInput
                  change={change}
                  name="education"
                  titleClr={"text-[#4B5563]"}
                  desCrl={"text-[#4B5563]"}
                  dateClr={"text-[#687688]"}
                  index={i}
                  key={i}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                />
              ))}
              <AddNewBtn onClick={() => change.add("education")} Clr={"text-[#2B86C5]"} borderClr={"border-[#2B86C5]"} />
            </div>
          ) : post.education.length ? (
            <div className="flex flex-col justify-start items-start gap-3">
              <h2 className="text-3xl font-semibold uppercase" style={{ color: TEXT_DARK, marginBottom: "8px" }}>
                {t("education")}
              </h2>
              <SplitLine className={"w-full"} style={{ backgroundColor: "#5a5a5a5a" }} />
              {post.education.map((d, i) => (
                <ListElement
                  key={i}
                  titleClr={"text-[#4B5563]"}
                  desCrl={"text-[#4B5563]"}
                  dateClr={"text-[#687688]"}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                />
              ))}
            </div>
          ) : null}

          {/* ACTIVITIES */}
          {!isPreview ? (
            <div className="flex flex-col justify-start items-start gap-3">
              <h2 className="text-3xl font-semibold uppercase" style={{ color: TEXT_DARK, marginBottom: "8px" }}>
                {t("activities")}
              </h2>
              <SplitLine className={"w-full"} style={{ backgroundColor: "#5a5a5a5a" }} />
              {post.activity.map((d, i) => (
                <ListElementInput
                  change={change}
                  name="activity"
                  titleClr={"text-[#4B5563]"}
                  desCrl={"text-[#4B5563]"}
                  dateClr={"text-[#687688]"}
                  index={i}
                  key={i}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                />
              ))}
              <AddNewBtn onClick={() => change.add("activity")} Clr={"text-[#2B86C5]"} borderClr={"border-[#2B86C5]"} />
            </div>
          ) : post.activity.length ? (
            <div className="flex flex-col justify-start items-start gap-3">
              <h2 className="text-3xl font-semibold uppercase" style={{ color: TEXT_DARK, marginBottom: "8px" }}>
                {t("activities")}
              </h2>
              <SplitLine className={"w-full"} style={{ backgroundColor: "#5a5a5a5a" }} />
              {post.activity.map((d, i) => (
                <ListElement
                  key={i}
                  titleClr={"text-[#4B5563]"}
                  desCrl={"text-[#4B5563]"}
                  dateClr={"text-[#687688]"}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                />
              ))}
            </div>
          ) : null}

          {/* PROJECTS */}
          {!isPreview ? (
            <div className="flex flex-col justify-start items-start gap-3">
              <h2 className="text-3xl font-semibold uppercase" style={{ color: TEXT_DARK, marginBottom: "8px" }}>
                {t("projects")}
              </h2>
              <SplitLine className={"w-full"} style={{ backgroundColor: "#5a5a5a5a" }} />
              {post.project.map((d, i) => (
                <ListElementInput
                  change={change}
                  name="project"
                  titleClr={"text-[#4B5563]"}
                  desCrl={"text-[#4B5563]"}
                  dateClr={"text-[#687688]"}
                  index={i}
                  key={i}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                />
              ))}
              <AddNewBtn onClick={() => change.add("project")} Clr={"text-[#2B86C5]"} borderClr={"border-[#2B86C5]"} />
            </div>
          ) : post.project.length ? (
            <div className="flex flex-col justify-start items-start gap-3">
              <h2 className="text-3xl font-semibold uppercase" style={{ color: TEXT_DARK, marginBottom: "8px" }}>
                {t("projects")}
              </h2>
              <SplitLine className={"w-full"} style={{ backgroundColor: "#5a5a5a5a" }} />
              {post.project.map((d, i) => (
                <ListElement
                  key={i}
                  titleClr={"text-[#4B5563]"}
                  desCrl={"text-[#4B5563]"}
                  dateClr={"text-[#687688]"}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
