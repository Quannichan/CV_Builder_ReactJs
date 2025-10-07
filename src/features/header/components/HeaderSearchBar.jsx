import { forwardRef } from "react";

// eslint-disable-next-line react/prop-types
const HeaderSearchBar = forwardRef(function HeaderSearchBar({value, className, placeholder, onChange}, ref){
    return(
        <input type="text" value={value} className={className} onChange={onChange} ref={ref} placeholder={placeholder}/>
    );
})

export default HeaderSearchBar;