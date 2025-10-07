/* eslint-disable no-unused-vars */
import { forwardRef } from "react";

/* eslint-disable react/prop-types */
function InputSelect({inputName, InputclassName, disabled, value = null, options=[], onChange}){
    return(
        <div className={"relative w-full"}>
            <select
                id={inputName}
                name={inputName}
                disabled={disabled}
                onChange={onChange}
                className={"w-full text-md px-2 py-1 focus:outline-none transition ease-in-out border-1 rounded-lg " + InputclassName}>
                {
                    options.length > 0
                    ?
                        options.map((d, i)=>{
                            return value !== null && d.id === value ?
                                <option selected value={d.id} key={i}>{d.name}</option>
                                :
                                <option value={d.id} key={i}>{d.name}</option>
                        })
                    :
                    <option>Không có lựa chọn</option>
                }
            </select>
        </div>
    );
}

export default InputSelect;