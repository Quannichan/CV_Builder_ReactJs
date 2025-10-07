import { I18N } from "../../../i18n/i18n";
import common from "../../../utils/common";

/* eslint-disable react/prop-types */
export default function ListElement({title, descript, fromdate, todate, titleClr, desCrl, dateClr}){

    const {t} = I18N();

    return(
        <div className="flex flex-col items-start justify-start gap-1">
            {title ? <h3 className={`${titleClr} font-semibold text-2xl`}>{title}</h3> : null}
            {descript ? <p className={`${desCrl} text-xl `}>{descript}</p> : null}
            <div className="text-lg">
                {fromdate && fromdate !== "" && todate && todate !== "" ? <p className={dateClr}>{common.DateDisplayCustom(fromdate, "DD/MM/YYYY")} {t("to")} {common.DateDisplayCustom(todate, "DD/MM/YYYY")}</p> : fromdate && fromdate !== ""  ? <p className={dateClr}>{common.DateDisplayCustom(fromdate, "DD/MM/YYYY")} đến hiện tại</p> : null}
            </div>
        </div>
    );
}