import common from "../../../utils/common";

class AccountService{
    getInfo(data, suc, err){
        common.ajax_secu_header(
            {
                url: common.URL_BE_USER,
                data: {
                    serv : common.SV_GETAUTH,
                    ...data
                },
                suc : suc,
                err : err
            }
        )
    }

    changePass(data, suc, err){
        common.ajax_secu_header(
            {
                url: common.URL_BE_USER,
                data: {
                    serv : common.SV_MOD_PASS,
                    ...data
                },
                suc : suc,
                err : err
            }
        )
    }

    updateInfo(data, suc, err){
        common.ajax_secu_header(
            {
                url: common.URL_BE_USER,
                data: {
                    serv : common.SV_MOD,
                    ...data
                },
                suc : suc,
                err : err
            }
        )
    }

    updateAva(data, suc, err){
        common.ajax_secu_header(
            {
                url: common.URL_BE_USER,
                data: {
                    serv : common.SV_MOD_AVA,
                    ...data
                },
                suc : suc,
                err : err
            }
        )
    }

    uploadBusiness(data, suc, err){
        common.ajax_secu_header(
            {
                url: common.URL_BE_USER,
                data: {
                    serv : common.SV_UP_CERT,
                    ...data
                },
                suc : suc,
                err : err
            }
        )
    }

    uploadFace(data, suc, err){
        common.ajax_secu_header(
            {
                url: common.URL_BE_USER,
                data: {
                    serv : common.SV_UP_FACE,
                    ...data
                },
                suc : suc,
                err : err
            }
        )
    }

    uploadIdentify(data, suc, err){
        common.ajax_secu_header(
            {
                url: common.URL_BE_USER,
                data: {
                    serv : common.SV_UP_IDENT,
                    ...data
                },
                suc : suc,
                err : err
            }
        )
    }

    async fetchBusiness(suc, err){
        try{
            const res = await fetch(common.URL_BE_BASE + common.URL_BE_PRIVATE_IMG_BUSINESS, {
                method: "POST",
                headers: {
                    "tokenizer": common.GetLocal("%UT%"),
                },
            });

            if (!res.ok) {
                err()
            }else{
                suc(res);
            }
        }catch(e){
            console.log(e);
            err();
        }
    }

    async fetchFace(suc, err){
        try{
            const res = await fetch(common.URL_BE_BASE + common.URL_BE_PRIVATE_IMG_FACE, {
                method: "POST",
                headers: {
                    "tokenizer": common.GetLocal("%UT%"),
                },
            });

            if (!res.ok) {
                err()
            }else{
                suc(res);
            }
        }catch(e){
            console.log(e);
            err();
        }
    }

    async fetchIdentify(suc, err){
        try{
            const res = await fetch(common.URL_BE_BASE + common.URL_BE_PRIVATE_IMG_IDENTIFY, {
                method: "POST",
                headers: {
                    "tokenizer": common.GetLocal("%UT%"),
                },
            });

            if (!res.ok) {
                err()
            }else{
                suc(res);
            }
        }catch(e){
            console.log(e);
            err();
        }
    }
}


const Acc = new AccountService();
export default Acc;