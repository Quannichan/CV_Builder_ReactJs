import Logo from "../../../components/Logo";

function SplashLogo(){
    return(
        <div className="animate-pulse flex justify-center items-center flex-col flex-wrap">
            <Logo className="border-0" iconClassName="bg-white color_base p-1 text-2xl" nameClassName="text-white text-2xl"/>
        </div>
    )
}

export default SplashLogo;