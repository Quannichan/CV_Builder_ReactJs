import Button from "../../../../components/Button";
import InputSelect from "../../../../components/InputSelect";
import { IoSearchSharp } from "react-icons/io5";

/* eslint-disable react/prop-types */
export default function Filter({value, change, callback}){
    return(
        <div className="flex justify-center items-baseline-last gap-6 px-30 pt-5 pb-5">
            <div className="w-full">
                <label className="text-sm text-[#374151]">Lọc theo nghành nghề</label>
                <div className="h-1"></div>
                <InputSelect
                    InputclassName={"border-[#D1D5DB] text-md"}
                    onChange={(e)=>change(e)}
                    inputName="typ01"
                    options={
                        value.typ01 && value.typ01.length
                        ?
                            [
                                {
                                    name : "Chọn ngành nghề",
                                    id: ""
                                },
                                ...value.typ01
                            ]
                        :
                        [
                            {
                                name : "Không có ngành nghề",
                                id: ""
                            },
                        ]
                    }
                />
            </div>
            <div className="w-full">
                <label className="text-sm text-[#374151]">Phong cách</label>
                <div className="h-1"></div>
                <InputSelect
                    InputclassName={"border-[#D1D5DB] text-md"}
                    onChange={(e)=>change(e)}
                    inputName="typ02"
                    options={
                        value.typ02 && value.typ02.length
                        ?
                            [
                                {
                                    name : "Chọn phong cách",
                                    id: ""
                                },
                                ...value.typ02
                            ]
                        :
                        [
                            {
                                name : "Không có phong cách",
                                id: ""
                            },
                        ]
                    }
                />
            </div>
            <div className="w-full">
                <label className="text-sm text-[#374151]">Màu sắc</label>
                <div className="h-1"></div>
                <InputSelect
                    InputclassName={"border-[#D1D5DB] text-md"}
                    onChange={(e)=>change(e)}
                    inputName="typ03"
                    options={
                        value.typ03 && value.typ03.length
                        ?
                            [
                                {
                                    name : "Chọn màu săc",
                                    id: ""
                                },
                                ...value.typ03
                            ]
                        :
                        [
                            {
                                name : "Không có màu sắc",
                                id: ""
                            },
                        ]
                    }
                />
            </div>
            <Button
                className="bg_base text-white px-4 py-2 flex items-center justify-center gap-1 rounded-lg hover:scale-105 transition ease-in-out focus:scale-95"
                childs={
                    <>
                        <IoSearchSharp className="text-lg"/>
                        <p className="text-nowrap text-sm">Tìm kiếm</p>
                    </>
                }
                click={()=>callback()}
            />
        </div>
    )
}
