/* eslint-disable react/prop-types */
export default function Switch({check, onChange, disabled=false}){
    return(
        <label className="group relative inline-flex cursor-pointer flex-col items-center">
            <input disabled={disabled} checked={check} onChange={onChange} className="disabled:opacity-55 peer sr-only" type="checkbox" />
            <div className="relative h-7 w-12 rounded-full bg-[#d7d9dc] transition-all duration-500 after:bg-[white] after:absolute after:left-1 after:top-1 after:h-5 after:w-5 after:rounded-full after:transition-all after:duration-500 peer-disabled:opacity-50 peer-checked:bg-[#3b82f6] peer-checked:after:translate-x-5 peer-checked:after:from-white peer-checked:after:to-gray-100 hover:after:scale-95 active:after:scale-90" >
                <span className="absolute inset-1 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-transparent"></span>
                <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 peer-checked:animate-glow peer-checked:opacity-100 [box-shadow:0_0_15px_rgba(167,139,250,0.5)]" ></span>
            </div>
        </label>
    )
}