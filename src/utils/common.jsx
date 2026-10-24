/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import $ from "jquery";
import CryptoJS from 'crypto-js';
import moment from 'moment';
import mapping from "./mapping";

 class comm{

    scrool_to_top       =()=>{
        $('html, body').animate({ scrollTop: 0 });
    }

    scroll_to_el= (el)=>{
        $('html, body').animate({
            scrollTop: $(el).offset().top
        }, 500);    
    }

    check_login       = (para)=>{
        var {suc, err}             = para
        if(suc === undefined)
            suc = null;
        if(err === undefined)
            err = null;
        $.ajax({
            url    : this.URL_BE_BASE + this.URL_BE_ISLOGIN,
            crossDomain:true,
            type   : "POST",
            timeout: 10000,
            headers :{
                tokenizer : localStorage.getItem("%UT%") ? localStorage.getItem("%UT%") : ""
            },
            data   : {
                ID      : this.UID ? this.UID : "",
                name    : this.UNAME ? this.UNAME : "",
                role    : this.UROLE ? this.UROLE : ""
            },
            success: (d)=>{
                suc(d);
            },
            error  : (e)=>{
                localStorage.clear();
                console.log(e);
                err(e);
            },
        })
    }

    Hash = (d)=>{
        const hash = CryptoJS.SHA256(d).toString();
        return hash;
    }

    UID = localStorage.getItem("%UI%") ? localStorage.getItem("%UI%") : null;

    UNAME = localStorage.getItem("%UN%") ? localStorage.getItem("%UN%") : null;

    UCOMPA = localStorage.getItem("%UCOMPA%") ? localStorage.getItem("%UCOMPA%") : null;

    USEX = localStorage.getItem("%USEX%") ? localStorage.getItem("%USEX%") : null;
    
    UADDRESS = localStorage.getItem("%UADDR%") ? localStorage.getItem("%UADDR%") : null;

    UMAIL = localStorage.getItem("%UM%") ? localStorage.getItem("%UM%") : null;

    UIMG = localStorage.getItem("%UAVA%") ? localStorage.getItem("%UAVA%") : null;

    UATYPE = localStorage.getItem("%UAT%") ? localStorage.getItem("%UAT%") : null;

    UDT01 = localStorage.getItem("%UDT01%") ? localStorage.getItem("%UDT01%") : null;

    UDT02 = localStorage.getItem("%UDT02%") ? localStorage.getItem("%UDT02%") : null;

    UROLE = localStorage.getItem("%UR%") ? localStorage.getItem("%UR%") : null;

    Update_uD = ()=>{
        this.UID = localStorage.getItem("%UI%") ? localStorage.getItem("%UI%") : null;
        
        this.UNAME = localStorage.getItem("%UN%") ? localStorage.getItem("%UN%") : null;

        this.USEX = localStorage.getItem("%USEX%") ? localStorage.getItem("%USEX%") : null;

        this.UADDRESS = localStorage.getItem("%UADDR%") ? localStorage.getItem("%UADDR%") : null;

        this.UMAIL = localStorage.getItem("%UM%") ? localStorage.getItem("%UM%") : null;

        this.UIMG = localStorage.getItem("%UAVA%") ? localStorage.getItem("%UAVA%") : null;

        this.UATYPE = localStorage.getItem("%UAT%") ? localStorage.getItem("%UAT%") : null;

        this.UCERT = localStorage.getItem("%UCERT%") ? localStorage.getItem("%UCERT%") : null;

        this.UDT01 = localStorage.getItem("%UDT01%") ? localStorage.getItem("%UDT01%") : null;

        this.UDT02 = localStorage.getItem("%UDT02%") ? localStorage.getItem("%UDT02%") : null;

        this.UROLE = localStorage.getItem("%UR%") ? localStorage.getItem("%UR%") : null;
    }

    Save_uD = async (u)=>{
        if(u.userdata.id){
            localStorage.setItem("%UI%",u.userdata.id);
            this.UID = localStorage.getItem("%UI%") ? localStorage.getItem("%UI%") : null;
        }
        if(u.userdata.name){
            localStorage.setItem("%UN%",u.userdata.name);
            this.UNAME = localStorage.getItem("%UN%") ? localStorage.getItem("%UN%") : null;
        }
        if(u.userdata.name){
            localStorage.setItem("%UDN%",u.userdata.name);
            this.UDISNAME = localStorage.getItem("%UDN%") ? localStorage.getItem("%UDN%") : null;
        }else{
            this.UDISNAME = null;
        }
        if(u.userdata.sex !== null){
            localStorage.setItem("%USEX%",`"${u.userdata.sex}"`);
            this.USEX = localStorage.getItem("%USEX%") ? localStorage.getItem("%USEX%") : null;
        }else{
            this.USEX = "0";
        }
        if(u.userdata.phone){
            localStorage.setItem("%UP%",u.userdata.phone);
            this.UPHONE = localStorage.getItem("%UP%") ? localStorage.getItem("%UP%") : null;
        }
        if(u.userdata.address){
            localStorage.setItem("%UADDR%",u.userdata.address);
            this.UADDRESS = localStorage.getItem("%UADDR%") ? localStorage.getItem("%UADDR%") : null;
        }else{
            this.UADDRESS = null;
        }
        if(u.userdata.mail){
            localStorage.setItem("%UM%",u.userdata.mail);
            this.UMAIL = localStorage.getItem("%UM%") ? localStorage.getItem("%UM%") : null;
        }
        if(u.userdata.ava){
            if(u.userdata.ava.includes("http")){
                localStorage.setItem("%UAVA%",u.userdata.ava);
            }else{
                localStorage.setItem("%UAVA%",this.URL_BE_BASE_IMG + u.userdata.ava);
            }
            this.UIMG = localStorage.getItem("%UAVA%") ? localStorage.getItem("%UAVA%") : null;
        }
        if(u.userdata.accountType){
            localStorage.setItem("%UAT%",u.userdata.accountType);
            this.UATYPE = localStorage.getItem("%UAT%") ? localStorage.getItem("%UAT%") : null;
        }
        if(u.userdata.date01){
            localStorage.setItem("%UDT01%",u.userdata.date01);
            this.UDT01 = localStorage.getItem("%UDT01%") ? localStorage.getItem("%UDT01%") : null;
        }else{
            this.UDT01 = null;
        }
        if(u.userdata.date02){
            localStorage.setItem("%UDT02%",u.userdata.date02);
            this.UDT02 = localStorage.getItem("%UDT02%") ? localStorage.getItem("%UDT02%") : null;
        }else{
            this.UDT02 = null;
        }

        if(u.tokenizer){
            localStorage.setItem("%UT%",u.tokenizer);
        }

        if(u.role){
            localStorage.setItem("%UR%",u.role);
            this.UROLE = localStorage.getItem("%UR%") ? localStorage.getItem("%UR%") : ""
        }
  
    }

    ajax               = (param)=>{
        var {url, type, data, suc, err}  = param;
        if(url){
            if(!type){
                type = "POST"
            }
            $.ajax({
                url    : this.URL_BE_BASE + url,
                crossDomain: true,
                type   : type,
                data   : data,
                timeout: 10000,
                success: (d)=>{
                    suc(d);
                },
                error  : (e)=>{
                    err(e);
                },
            })
        }else{
            console.log("=== CANNOT CALL BE WITH NULL URL ===")
        }
    }

    ajax_secu_header              = (param)=>{
        var {url, type, data, suc, err}  = param;
        if(url){
            if(!type){
                type = "POST"
            }
            $.ajax({
                url    : this.URL_BE_BASE + url,
                crossDomain: true,
                type   : type,
                headers : {
                    tokenizer : localStorage.getItem("%UT%")
                },
                data   : data,
                timeout: 99999999,
                success: (d)=>{
                    suc(d);
                },
                error  : (e)=>{
                    err(e);
                },
            })
        }else{
            console.log("=== CANNOT CALL BE WITH NULL URL ===")
        }
    }

    async convertToBase64(file){
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
    };

    DateDisplay = (dateString, type="-") => {
        const formattedDate = moment(dateString).format(`DD${type}MM${type}YYYY`);
        return formattedDate;
    };

    DateDisplayCustom = (dateString, format="HH:mm DD-MM-YYYY") => {
        const formattedDate = moment(dateString).format(format);
        return formattedDate;
    };

    AmountFormatNoVND    = (amount)=>{
        var a = amount*1;
        var af = a.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        var aspli = af.split(".");
        if(aspli.length <= 3){            
            return  af.replace("₫", "").trimEnd().trimStart();
        }

        if(aspli.length >= 4){
            return aspli[0].trimEnd().trimStart();
        }

    }

    SaveLocal       = (key, value)=>{
        localStorage.setItem(key, value);
    }

    GetLocal        = (key)=>{
        return localStorage.getItem(key);
    }

    RemoveLocal     = (key)=>{
        localStorage.removeItem(key)
    }

    ClearLocal     = ()=>{
        localStorage.clear();
        this.Update_uD();
    }


    VAR_FILE_SIZE_LIM  = 31457280;

    URL_BE_BASE_IMG    = import.meta.env.VITE_BASE_URL_IMG;
    URL_BE_BASE        = import.meta.env.VITE_BASE_URL;

    // auth
    URL_BE_REGISTER    = "account/register";
    URL_BE_LOGIN       = "account/login";
    URL_BE_ISLOGIN     = "account/islogin";
    URL_BE_LOGOUT      = "account/logout";

    URL_BE_AMD_POSTSAMPLE = "admin/postsample";

    //user
    URL_BE_USER        = "accSetting";

    //user public
    URL_BE_USER_PUBL   = "userPubl"

    //vnpay
    URL_BE_VNPAY       = "vnpay";

    // post
    URL_BE_POST        = "postSetting";
    URL_BE_POST_SAMPLE = "postSamplePubl";
    URL_BE_POST_PUBL   = "postPubl";

    //AI
    URL_BE_AI          = "AI";

    //service
    SV_CHECK_VERIFY    = "SvCheckVerify";
    SV_MOD             = "SvMod";
    SV_COUNT           = "SvCount";
    SV_NEW             = "SvNew";
    SV_GET             = "SvGet";
    SV_GET_PENDING     = "SvGetPending";
    SV_MOD_AVA         = "SvModAva"
    SV_MOD_PASS        = "SvModPass";
    SV_GET_LST         = "SvGetLst";
    SV_PAGI            = "SvPage";
    SV_DEL             = "SvDel";
    SV_GET_DET         = "SvGetDet";
    SV_STATISTIC       = "SvGetStatistic";
    SV_GETAUTH         = "SvGetAuth";
    SV_UP_CERT         = "SvUplCerti";
    SV_UP_FACE         = "SvUplFace";
    SV_UP_IDENT        = "SvUplIdentify";
    SV_GEN             = "SvGen";
    SV_FIX             = "SvFix";
    SV_GEN_BASE        = "SvGenBase";

    CODE_OK            = 2000;
    CODE_DATA_ERR      = 2001;
    CODE_SERVER_ERR    = 2005;
    CODE_NOT_AUTH      = 2003;
    CODE_ERR_NOT_EXT   = 2004;
}

export default new comm();