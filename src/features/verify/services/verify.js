import common from "../../../utils/common";

class VerifyService{

    Checkverify(id, mail, t, suc, err){
        common.ajax_secu_header({
            url: common.URL_BE_USER_PUBL,
            data: {
                serv: common.SV_CHECK_VERIFY,
                verifyToken: t,
                id : id,
                mail : mail
            },
            suc : suc,
            err : err
        })
    }

}

const verifyService = new VerifyService();
export default verifyService;