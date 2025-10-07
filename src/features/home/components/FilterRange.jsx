import { forwardRef } from "react";

/* eslint-disable react/prop-types */
const FilterRange = forwardRef(function FilterRange({min, max, minName, maxName, minId, maxId, className, isDisabled, onChange}, ref){
    return(
        <div className={"flex justify-start items-center gap-4 w-full " + className} ref={ref}>
            <input id={minId} type="number" value={min} onChange={onChange} name={minName} disabled={isDisabled ? true : false} className="w-20 bg-[#e2e2e2] rounded-sm focus:outline-0 py-1 px-2 text-[16px]"/>đ
            <p className="">-</p>
            <input id={maxId} type="number" value={max} onChange={onChange} name={maxName} disabled={isDisabled ? true : false} className="w-20 bg-[#e2e2e2] rounded-sm focus:outline-0 py-1 px-2 text-[16px]"/>đ
        </div>
    );
})

export default FilterRange;