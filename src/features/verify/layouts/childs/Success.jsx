/* eslint-disable react/prop-types */
import { BsShieldFillCheck } from "react-icons/bs";

export default function Success(){
    return(
        <div className="w-full flex flex-col items-center justify-center h-150 px-5 gap-3">
            <BsShieldFillCheck className="text-[#22C55E] text-7xl"/>
            <h1 className="text-2xl font-semibold">Bạn đã xác minh tài khoản thành công!</h1>
            <p className="text-md text-[#374151]">Bạn đã xác minh tài khoản thành công</p>
        </div>
    )
}