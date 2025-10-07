import {Navigate, Route, Routes} from "react-router-dom";
import HeaderLayout from "../../header/layouts/HeaderLayout";
import HomeLayout from "../../home/layouts/HomeLayout";
import FooterLayout from "../../footer/layouts/FooterLayout";
import PostLayout from "../../post/layouts/PostLayout";
import AccountLayout from "../../account/layouts/AccountLayout";
import PostSampleList from "../../postSample_list/layouts/PostSampleListLayout";
import FeatureLayout from "../../home/layouts/FeatureLayout";
import PriceLayout from "../../home/layouts/PriceLayouts";
import SupportLayout from "../../home/layouts/SupportLayout";
import PaymentLayouts from "../../payment/layouts/PaymentLayouts";
import PostWorkspaceLayout from "../../post_workspace/layouts/PostWorkspaceLayout";
import common from "../../../utils/common";
import { useEffect } from "react";
import PostSampleWorkspaceLayout from "../../postsample_workspace/layouts/PostSampleWorkspaceLayout";

function Main(){

    useEffect(()=>{
        common.Update_uD();
    }, [])

    return(
        <>
        {/* Layout header */}
        <HeaderLayout/>
        <Routes>
            <Route path="/" element={<HomeLayout/>}/>

            <Route path="/cv/view" element={<PostLayout/>}/>
            <Route path="/cv/workspace" element={<PostWorkspaceLayout/>}/>
            <Route path="/account" element={<AccountLayout/>}/>

            {
                common.UROLE === "SUPADM"
                ?
                    <Route path="/cvsample/workspace" element={<PostSampleWorkspaceLayout/>}/>
                :
                null
            }

            <Route path="/cv" element={<PostSampleList/>}/>
            <Route path="/feature" element={<FeatureLayout/>}/>
            <Route path="/price" element={<PriceLayout/>}/>
            <Route path="/support" element={<SupportLayout/>}/>
            <Route path="/payment" element={<PaymentLayouts/>}/>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        {/* Layout footer */}
        <FooterLayout/>
        </>
    );
}

export default Main;