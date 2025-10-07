import common from "../../../utils/common";

class UserService{

    getAuth(suc, err){
        common.ajax_secu_header({
            url : common.URL_BE_USER,
            data : {
                serv: common.SV_GETAUTH,
                id: common.UID
            },
            suc: suc,
            err: err
        })
    }

}

const userService = new UserService();
export default userService;