import Button from "../../../components/Button";
import { FaTrashCan } from "react-icons/fa6";
import { I18N } from "../../../i18n/i18n";

/* eslint-disable react/prop-types */
export default function ListElementInput({name, index, title, descript, fromdate, todate, titleClr, desCrl, dateClr, change}){

    const {t} = I18N();

    return(
        <div className="flex flex-col items-start justify-start w-full gap-2">
            <input type="text" className={`${titleClr} font-semibold text-2xl w-full`} name="title" onChange={(e)=>change.valueArr(e, name, index)} value={title} placeholder={t("title")}/>
            <textarea type="text" className={`${desCrl} w-full text-xl`} value={descript} name="descript" onChange={(e)=>change.valueArr(e, name, index)}  placeholder={t("descript")}/>
            <p className="flex items-center justify-start gap-3 text-md">
                <input type="date" className={`${dateClr}`} value={fromdate} name="from" onChange={(e)=>change.valueArr(e, name, index)}/>
                <p className={`${dateClr}`}>{t("to")}</p>
                <input type="date" className={`${dateClr}`} value={todate} name="to" onChange={(e)=>change.valueArr(e, name, index)}/>
            </p>
            <Button
                className="border-2 border-red-500 px-3 py-3 w-full flex justify-center items-center opacity-40 hover:opacity-100 transition ease-in-out rounded-lg"
                childs={
                    <FaTrashCan className="text-red-500"/>
                }
                click={()=>change.remove(name, index)}
            />
        </div>
    );
}