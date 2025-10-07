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
}

const AccNewPost = new AccountService();
export default AccNewPost;