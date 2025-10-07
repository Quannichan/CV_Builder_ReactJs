/* eslint-disable react/prop-types */
import { BsShieldFillCheck } from "react-icons/bs";
import common from "../../../../utils/common";

const after30Days = function(cur){
    let date = new Date(cur);
    date.setDate(date.getDate() + 30);
    return date.toISOString();
}

export default function Success({payment}){
    return(
        <div className="w-full flex flex-col items-center justify-center h-150 px-5 gap-3">
            <BsShieldFillCheck className="text-[#22C55E] text-7xl"/>
            <h1 className="text-2xl font-semibold">Giao dịch thành công</h1>
            <p className="text-md text-[#374151]">Bạn đã giao dịch thành công cho gói <span className="font-bold">{payment.type === 1 ? "Tiêu chuẩn" : "Chuyên nghiệp"}</span></p>
            <p className="text-[#374151] text-sm">Ngày giao dịch: <span className="font-semibold">{payment.date01 ? `${common.DateDisplayCustom(payment.date01,"DD/MM/yyyy HH:mm")}`: ""}</span></p>
            <p className="text-[#374151] text-sm">Hiệu lực từ: <span className="font-semibold">{payment.date02 ? `${common.DateDisplayCustom(payment.date02,"DD/MM/yyyy HH:mm")} đến ${common.DateDisplayCustom(after30Days(payment.date02),"DD/MM/yyyy HH:m")}`: ""}</span></p>
        </div>
    )
}