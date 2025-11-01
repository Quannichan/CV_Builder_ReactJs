/* eslint-disable react/prop-types */
import { FiAlertTriangle } from "react-icons/fi";

export default function Caution(){
    return(
        <div className="w-full flex flex-col items-center justify-center h-150 px-5 gap-3">
            <FiAlertTriangle className="text-[#ffd303] text-7xl"/>
            <h1 className="text-2xl font-semibold">Xác minh không hợp lệ!</h1>
            <p className="text-md text-[#374151]">Xác minh không hợp lệ</p>
        </div>
    )
}