/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";
import LoginForm from "../layouts/form/login/LoginForm";
import AuthImages from "../layouts/images/AuthImages";

function Login(){

    return(
        <>
        <Helmet><title>CV Builder | Đăng nhập</title></Helmet>
        <div className="flex items-center justify-evenly w-screen gap-3 p-5" >
            {/* login form */}
            <div className="w-full flex-1/2 ">
                <LoginForm/>
            </div>
            {/* img view slide */}
            <div className="w-full hidden sm:hidden md:hidden lg:flex xl:flex flex-2/3  items-center justify-center">
                <AuthImages image={[
                    "/auth1.jpg",
                    "/auth2.jpg",
                    "/auth3.jpg",
                    "/auth4.jpg",
                ]}/>
            </div>
        </div>
        </>
    );
}

export default Login;