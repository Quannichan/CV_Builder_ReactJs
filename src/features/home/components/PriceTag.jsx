/* eslint-disable react/prop-types */
import { FiCheck } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import Button from "../../../components/Button";

export default function PriceTag({callback, isCommon = false, price, btnColor, btnText, btnTextColor}) {
    return (
        <div className={`${isCommon ? "border-2 border-[#3B82F6]  scale-110" : "border-2 border-[#E5E7EB]  hover:scale-105"} relative  px-7 py-8 flex flex-col items-center justify-center transition ease-in-out rounded-xl`}>
            {isCommon ? <p className="absolute top-[-10px] bg-[#3B82F6] text-white font-semibold text-[12px] px-3 rounded-lg">Phổ biến nhất</p> : <></>}
            <h1 className=" text-[#000000] pb-1 font-bold text-xl">{price.title ? price.title : ""}</h1>
            <h2 className="text-3xl font-semibold text-black pb-4">{price.price ? price.price : ""}đ <span className="text-[12px] text-[#4B5563] font-normal">/tháng</span></h2>
            <div className="w-full flex flex-col items-start gap-2">
                {
                    price.features
                    ?
                        price.features.length
                        ?
                        price.features.map((f, index) => (
                            <div key={index} className="flex items-center justify-start gap-2 mt-3">
                                {
                                    f.check
                                    ?
                                    <FiCheck className="text-[#22C55E] text-[18px]"/>
                                    :
                                    <RxCross2 className="text-[#9CA3AF] text-[16px]"/>
                                }
                                <p key={index} className="text-[14px] text-[#374151] text-wrap w-64 ">{f.feature}</p>
                            </div>
                        ))
                        :
                        <></>
                    :
                    <></>
                }
            </div>
            <div className="h-4"></div>
            <Button
                click={callback}
                className={`${btnColor} ${btnTextColor} font-semibold  rounded-lg w-full py-3 text-sm`}
                childs={btnText}
            />
        </div>
    )
}