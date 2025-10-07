import common from "../../../utils/common";

class UserService{
    getLst(search, suc, err){
        common.ajax_secu_header({
            url : common.URL_BE_USER_PUBL,
            data : {
                serv: common.SV_GET_LST,
                search : search
            },
            suc: suc,
            err: err
        })
    }
}

const userService = new UserService();
export default userService;