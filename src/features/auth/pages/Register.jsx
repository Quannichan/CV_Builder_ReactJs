/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";
import RegisterForm from "../layouts/form/register/RegisterForm";
import AuthImages from "../layouts/images/AuthImages";

function Register(){

    return(
        <>
            <Helmet><title>CV Builder | Đăng ký</title></Helmet>
            <div className="flex items-start justify-evenly w-screen gap-3 p-5" >
            {/* register form */}
            <div className="w-full flex-1/2 ">
                <RegisterForm/>
            </div>
            {/* img view slide */}
            <div className="w-full flex-2/3 hidden sm:hidden md:hidden lg:flex xl:flex items-center h-screen justify-center">
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

export default Register;