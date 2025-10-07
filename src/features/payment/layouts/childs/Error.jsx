import common from "../../../../utils/common";
import { RxCrossCircled } from "react-icons/rx";

/* eslint-disable react/prop-types */
export default function Error({payment}){
    return(
        <div className="w-full flex flex-col items-center justify-center h-150 px-5 gap-3">
            <RxCrossCircled className="text-[#c52222] text-7xl"/>
            <h1 className="text-2xl font-semibold">Giao dịch thất bại</h1>
            <p className="text-md text-[#374151]">Giao dịch gói <span className="font-bold">{payment.amount === 1 ? "Tiêu chuẩn" : "Chuyên nghiệp"}</span> thất bại</p>
            <p className="text-[#374151] text-sm">Ngày giao dịch: <span className="font-semibold">{payment.date01 ? `${common.DateDisplayCustom(payment.date01,"DD/MM/yyyy HH:mm")}`: ""}</span></p>
        </div>
    )
}