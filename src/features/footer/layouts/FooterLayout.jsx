import SplitLine from "../../../components/SplitLine";
import Footer from "../pages/Footer";
import RightsLayout from "./right/RightsLayout";

function FooterLayout(){
    return(
        <div className="bg-[#111827]">
            <Footer/>
            <div className="flex justify-center">
                <SplitLine className="w-[85%] bg-[#ffffff27] px-30"/>    
            </div>
            <RightsLayout/>
        </div>
    );
}

export default FooterLayout;