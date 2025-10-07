import { forwardRef } from "react";

/* eslint-disable react/prop-types */
const FilterRatio = forwardRef(function FilterRatio({input_name, value, name, isChecked, onChange, onClick}, ref){
    return(
        <div className="flex justify-start items-center gap-4">
            <label className="container_check">
                <input onClick={onClick} checked={isChecked} onChange={onChange} ref={ref} type="radio" id={input_name+"_"+value} value={value} name={input_name}/>
                <div className="checkmark"></div>
            </label>
            <label className="text-[16px]" htmlFor={input_name+"_"+value} >{name}</label>
        </div>
        
    );
})

export default FilterRatio;