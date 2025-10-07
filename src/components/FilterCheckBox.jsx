
/* eslint-disable react/prop-types */
function FilterCheckBox({ value, input_name, name, isChecked, onChange, onClick }){
    return(
        <div className="flex justify-start items-center gap-3">
            <label className="container_check">
                <input onClick={onClick} checked={isChecked ? "checked" : null} onChange={onChange} type="checkbox" value={value} name={input_name}/>
                <div className="checkmark"></div>
            </label>
            <p className="text-sm sm:text-md md:text-md lg:text-md xl:text-md">{name}</p>
        </div>
    );
}

export default FilterCheckBox;