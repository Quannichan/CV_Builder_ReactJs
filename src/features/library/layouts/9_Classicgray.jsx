/* eslint-disable react/prop-types */
import common from "../../../utils/common";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FaHome, FaReddit, FaFacebook, FaTwitter, FaRegUserCircle } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import SplitLine from "../../../components/SplitLine";
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

  const BLACK = "#111827";       // text black (tailwind gray-900)
  const ICON_BG = "text-[#1a1f22]";

  return (
    <div className="relative">
      {isPreview && isWaterMark && (
        <div className="absolute inset-0 opacity-10 flex justify-center items-center pointer-events-none">
          <Logo
            className="border-0 px-3 py-3 rounded-xl"
            nameClassName={`text-black text-4xl ${isPNG ? "" : "pb-8"}`}
            iconClassName={`text-2xl m-5 text-white bg_base ${isPNG ? "p-1" : ""}`}
          />
        </div>
      )}

      {/* Header */}
      <div className="pt-10 bg-white pl-20 pr-20 pb-8 gap-7 flex justify-between items-center">
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
            <h1 className="text-5xl font-bold text-black pb-1 text-nowrap">{post ? post.name : ""}</h1>
            <h3 className="text-xl text-gray-600 text-nowrap">{post ? post.job : ""}</h3>
          </div>
        </div>

        {/* Right contact */}
        {!isPreview ? (
          <div className="flex flex-col items-end gap-3">
            <InputIconR ico={ICON_BG} color={BLACK} icon={LiaBirthdayCakeSolid}
              text={post.birthdate ? post.birthdate.value ? common.DateDisplayCustom(post.birthdate.value, "DD/MM/YYYY") : null : null}
              show={!!post.birthdate?.show} name="birthdate" change={change} />
            <InputIconR ico={ICON_BG} color={BLACK} icon={FaHome}
              text={post.address?.value || ""} show={!!post.address?.show} name="address" change={change} />
            <InputIconR ico={ICON_BG} color={BLACK} icon={MdOutlineLocalPhone}
              text={post.phone?.value || ""} show={!!post.phone?.show} name="phone" change={change} />
            <InputIconR ico={ICON_BG} color={BLACK} icon={IoIosMail}
              text={post.mail?.value || ""} show={!!post.mail?.show} name="mail" change={change} />
          </div>
        ) : !post.birthdate?.show && !post.address?.show && !post.phone?.show && !post.mail?.show ? null : (
          <div className="flex flex-col items-end gap-3">
            <TextIconR ico={ICON_BG} color={BLACK} isPNG={isPNG} icon={LiaBirthdayCakeSolid}
              text={post.birthdate ? post.birthdate.value ? common.DateDisplayCustom(post.birthdate.value, "DD/MM/YYYY") : null : null} show />
            <TextIconR ico={ICON_BG} color={BLACK} isPNG={isPNG} icon={FaHome}
              text={post.address?.value || ""} show />
            <TextIconR ico={ICON_BG} color={BLACK} isPNG={isPNG} icon={MdOutlineLocalPhone}
              text={post.phone?.value || ""} show />
            <TextIconR ico={ICON_BG} color={BLACK} isPNG={isPNG} icon={IoIosMail}
              text={post.mail?.value || ""} show />
          </div>
        )}
      </div>

      <SplitLine className="w-full bg-gray-300" />

      <div className="flex justify-between items-stretch">
        {/* Left column */}
        <div className="bg-gray-300 flex-1/4 px-6 py-8 flex flex-col gap-5 rounded-bl-lg border-r border-gray-200">
          {/* Socials */}
          {!isPreview ? (
            <div className="flex flex-col items-start justify-start gap-2">
              <InputIconL ico={ICON_BG} color={BLACK} icon={FaRegUserCircle} text={post.portfolio?.value || ""} show={!!post.portfolio?.show} name="portfolio" change={change} />
              <InputIconL ico={ICON_BG} color={BLACK} icon={FaLinkedin} text={post.linkedin.value} show={post.linkedin.show} name="linkedin" change={change} />
              <InputIconL ico={ICON_BG} color={BLACK} icon={FaSquareGithub} text={post.github.value} show={post.github.show} name="github" change={change} />
              <InputIconL ico={ICON_BG} color={BLACK} icon={FaFacebook} text={post.facebook.value} show={post.facebook.show} name="facebook" change={change} />
              <InputIconL ico={ICON_BG} color={BLACK} icon={FaTwitter} text={post.twitter.value} show={post.twitter.show} name="twitter" change={change} />
              <InputIconL ico={ICON_BG} color={BLACK} icon={FaReddit} text={post.reddit.value} show={post.reddit.show} name="reddit" change={change} />
            </div>
          ) : !post.portfolio.show && !post.linkedin.show && !post.github.show && !post.facebook.show && !post.twitter.show && !post.reddit.show ? null : (
            <div className="flex flex-col items-start justify-start gap-2">
              <TextIconL ico={ICON_BG} color={BLACK} isPNG={isPNG} icon={FaRegUserCircle} text={post.portfolio.value} show />
              <TextIconL ico={ICON_BG} color={BLACK} isPNG={isPNG} icon={FaLinkedin} text={post.linkedin.value} show />
              <TextIconL ico={ICON_BG} color={BLACK} isPNG={isPNG} icon={FaSquareGithub} text={post.github.value} show />
              <TextIconL ico={ICON_BG} color={BLACK} isPNG={isPNG} icon={FaFacebook} text={post.facebook.value} show />
              <TextIconL ico={ICON_BG} color={BLACK} isPNG={isPNG} icon={FaTwitter} text={post.twitter.value} show />
              <TextIconL ico={ICON_BG} color={BLACK} isPNG={isPNG} icon={FaReddit} text={post.reddit.value} show />
            </div>
          )}

          {/* Skills */}
          {!isPreview ? (
            <div className="flex flex-col items-start justify-start gap-3">
              <h2 className="text-2xl font-semibold uppercase text-gray-800 tracking-widest">{t("skill")}</h2>
              <SplitLine className="w-full bg-gray-200" />
              {post.skill.map((d, i) => (
                <ListElementInput
                  key={i}
                  change={change}
                  name="skill"
                  index={i}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                  titleClr="text-gray-900"
                  desCrl="text-gray-800"
                  dateClr="text-gray-500"
                />
              ))}
              <AddNewBtn onClick={() => change.add("skill")} Clr="text-gray-800" borderClr="border-gray-800" />
            </div>
          ) : post.skill.length ? (
            <div className="flex flex-col items-start justify-start gap-3">
              <h2 className="text-2xl font-semibold uppercase text-gray-800 tracking-widest">{t("skill")}</h2>
              <SplitLine className="w-full bg-gray-200" />
              {post.skill.map((d, i) => (
                <ListElement
                  key={i}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                  titleClr="text-gray-900 text-xl"
                  desCrl="text-gray-800 text-lg"
                  dateClr="text-gray-500 text-md"
                />
              ))}
            </div>
          ) : null}

          {/* Languages */}
          {!isPreview ? (
            <div className="flex flex-col items-start justify-start gap-3">
              <h2 className="text-2xl font-semibold uppercase text-gray-800 tracking-widest">{t("language")}</h2>
              <SplitLine className="w-full bg-gray-200" />
              {post.language.map((d, i) => (
                <ListElementInput
                  key={i}
                  change={change}
                  name="language"
                  index={i}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                  titleClr="text-gray-900"
                  desCrl="text-gray-800"
                  dateClr="text-gray-500"
                />
              ))}
              <AddNewBtn onClick={() => change.add("language")} Clr="text-gray-800" borderClr="border-gray-800" />
            </div>
          ) : post.language.length ? (
            <div className="flex flex-col items-start justify-start gap-3">
              <h2 className="text-2xl font-semibold uppercase text-gray-800 tracking-widest">{t("language")}</h2>
              <SplitLine className="w-full bg-gray-200" />
              {post.language.map((d, i) => (
                <ListElement
                  key={i}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                  titleClr="text-gray-900 text-xl"
                  desCrl="text-gray-800 text-lg"
                  dateClr="text-gray-500 text-md"
                />
              ))}
            </div>
          ) : null}

          {/* Hobbies */}
          {!isPreview ? (
            <div className="flex flex-col items-start justify-start gap-3">
              <h2 className="text-2xl font-semibold uppercase text-gray-800 tracking-widest">{t("hobby")}</h2>
              <SplitLine className="w-full bg-gray-200" />
              {post.hobby.map((d, i) => (
                <ListElementInput
                  key={i}
                  change={change}
                  name="hobby"
                  index={i}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                  titleClr="text-gray-900"
                  desCrl="text-gray-800"
                  dateClr="text-gray-500"
                />
              ))}
              <AddNewBtn onClick={() => change.add("hobby")} Clr="text-gray-800" borderClr="border-gray-800" />
            </div>
          ) : post.hobby.length ? (
            <div className="flex flex-col items-start justify-start gap-3">
              <h2 className="text-2xl font-semibold uppercase text-gray-800 tracking-widest">{t("hobby")}</h2>
              <SplitLine className="w-full bg-gray-200" />
              {post.hobby.map((d, i) => (
                <ListElement
                  key={i}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                  titleClr="text-gray-900 text-xl"
                  desCrl="text-gray-800 text-lg"
                  dateClr="text-gray-500 text-md"
                />
              ))}
            </div>
          ) : null}
        </div>

        {/* Right column */}
        <div className="flex-3/4 py-8 px-7 flex flex-col gap-5 bg-white">
          {/* Summary */}
          <div className="flex flex-col justify-start items-start gap-3">
            <p className="text-3xl font-semibold uppercase text-gray-800 tracking-widest" style={{ marginBottom: "8px" }}>
              {t("about_me")}
            </p>
            <SplitLine className="w-full bg-gray-200" />
            {!isPreview ? (
              <textarea
                className="text-2xl leading-9 text-gray-900 w-full outline-none min-h-80 max-h-200 bg-gray-50 rounded-lg p-3"
                name="descript"
                onChange={(e) => change.valueSinge(e)}
                placeholder={t("about_me")}
                value={post.descript}
              />
            ) : (
              <p className="text-2xl leading-9 text-gray-900">{post.descript}</p>
            )}
          </div>

          {/* Experience */}
          {!isPreview ? (
            <div className="flex flex-col justify-start items-start gap-3">
              <h2 className="text-3xl font-semibold uppercase text-gray-800 tracking-widest" style={{ marginBottom: "8px" }}>
                {t("work_experiences")}
              </h2>
              <SplitLine className="w-full bg-gray-200" />
              {post.experience.map((d, i) => (
                <ListElementInput
                  key={i}
                  change={change}
                  name="experience"
                  index={i}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                  titleClr="text-gray-900"
                  desCrl="text-gray-800"
                  dateClr="text-gray-500"
                />
              ))}
              <AddNewBtn onClick={() => change.add("experience")} Clr="text-gray-800" borderClr="border-gray-800" />
            </div>
          ) : post.experience.length ? (
            <div className="flex flex-col justify-start items-start gap-3">
              <h2 className="text-3xl font-semibold uppercase text-gray-800 tracking-widest" style={{ marginBottom: "8px" }}>
                {t("work_experiences")}
              </h2>
              <SplitLine className="w-full bg-gray-200" />
              {post.experience.map((d, i) => (
                <ListElement
                  key={i}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                  titleClr="text-gray-900"
                  desCrl="text-gray-800"
                  dateClr="text-gray-500"
                />
              ))}
            </div>
          ) : null}

          {/* Certificates */}
          {!isPreview ? (
            <div className="flex flex-col justify-start items-start gap-3">
              <h2 className="text-3xl font-semibold uppercase text-gray-800 tracking-widest" style={{ marginBottom: "8px" }}>
                {t("certificates")}
              </h2>
              <SplitLine className="w-full bg-gray-200" />
              {post.certificate.map((d, i) => (
                <ListElementInput
                  key={i}
                  change={change}
                  name="certificate"
                  index={i}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                  titleClr="text-gray-900"
                  desCrl="text-gray-800"
                  dateClr="text-gray-500"
                />
              ))}
              <AddNewBtn onClick={() => change.add("certificate")} Clr="text-gray-800" borderClr="border-gray-800" />
            </div>
          ) : post.certificate.length ? (
            <div className="flex flex-col justify-start items-start gap-3">
              <h2 className="text-3xl font-semibold uppercase text-gray-800 tracking-widest" style={{ marginBottom: "8px" }}>
                {t("certificates")}
              </h2>
              <SplitLine className="w-full bg-gray-200" />
              {post.certificate.map((d, i) => (
                <ListElement
                  key={i}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                  titleClr="text-gray-900"
                  desCrl="text-gray-800"
                  dateClr="text-gray-500"
                />
              ))}
            </div>
          ) : null}

          {/* Education */}
          {!isPreview ? (
            <div className="flex flex-col justify-start items-start gap-3">
              <h2 className="text-3xl font-semibold uppercase text-gray-800 tracking-widest" style={{ marginBottom: "8px" }}>
                {t("education")}
              </h2>
              <SplitLine className="w-full bg-gray-200" />
              {post.education.map((d, i) => (
                <ListElementInput
                  key={i}
                  change={change}
                  name="education"
                  index={i}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                  titleClr="text-gray-900"
                  desCrl="text-gray-800"
                  dateClr="text-gray-500"
                />
              ))}
              <AddNewBtn onClick={() => change.add("education")} Clr="text-gray-800" borderClr="border-gray-800" />
            </div>
          ) : post.education.length ? (
            <div className="flex flex-col justify-start items-start gap-3">
              <h2 className="text-3xl font-semibold uppercase text-gray-800 tracking-widest" style={{ marginBottom: "8px" }}>
                {t("education")}
              </h2>
              <SplitLine className="w-full bg-gray-200" />
              {post.education.map((d, i) => (
                <ListElement
                  key={i}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                  titleClr="text-gray-900"
                  desCrl="text-gray-800"
                  dateClr="text-gray-500"
                />
              ))}
            </div>
          ) : null}

          {/* Activities */}
          {!isPreview ? (
            <div className="flex flex-col justify-start items-start gap-3">
              <h2 className="text-3xl font-semibold uppercase text-gray-800 tracking-widest" style={{ marginBottom: "8px" }}>
                {t("activities")}
              </h2>
              <SplitLine className="w-full bg-gray-200" />
              {post.activity.map((d, i) => (
                <ListElementInput
                  key={i}
                  change={change}
                  name="activity"
                  index={i}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                  titleClr="text-gray-900"
                  desCrl="text-gray-800"
                  dateClr="text-gray-500"
                />
              ))}
              <AddNewBtn onClick={() => change.add("activity")} Clr="text-gray-800" borderClr="border-gray-800" />
            </div>
          ) : post.activity.length ? (
            <div className="flex flex-col justify-start items-start gap-3">
              <h2 className="text-3xl font-semibold uppercase text-gray-800 tracking-widest" style={{ marginBottom: "8px" }}>
                {t("activities")}
              </h2>
              <SplitLine className="w-full bg-gray-200" />
              {post.activity.map((d, i) => (
                <ListElement
                  key={i}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                  titleClr="text-gray-900"
                  desCrl="text-gray-800"
                  dateClr="text-gray-500"
                />
              ))}
            </div>
          ) : null}

          {/* Projects */}
          {!isPreview ? (
            <div className="flex flex-col justify-start items-start gap-3">
              <h2 className="text-3xl font-semibold uppercase text-gray-800 tracking-widest" style={{ marginBottom: "8px" }}>
                {t("projects")}
              </h2>
              <SplitLine className="w-full bg-gray-200" />
              {post.project.map((d, i) => (
                <ListElementInput
                  key={i}
                  change={change}
                  name="project"
                  index={i}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                  titleClr="text-gray-900"
                  desCrl="text-gray-800"
                  dateClr="text-gray-500"
                />
              ))}
              <AddNewBtn onClick={() => change.add("project")} Clr="text-gray-800" borderClr="border-gray-800" />
            </div>
          ) : post.project.length ? (
            <div className="flex flex-col justify-start items-start gap-3">
              <h2 className="text-3xl font-semibold uppercase text-gray-800 tracking-widest" style={{ marginBottom: "8px" }}>
                {t("projects")}
              </h2>
              <SplitLine className="w-full bg-gray-200" />
              {post.project.map((d, i) => (
                <ListElement
                  key={i}
                  title={d.title}
                  descript={d.descript}
                  fromdate={d.from}
                  todate={d.to}
                  titleClr="text-gray-900"
                  desCrl="text-gray-800"
                  dateClr="text-gray-500"
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
