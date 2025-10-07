import common from "../../../utils/common";

class AuthServices{

    async login(data, suc, err){
        common.ajax({
            url : common.URL_BE_LOGIN,
            data : data,
            suc : suc,
            err : err
        });
    }

    async register(data, suc, err){
        common.ajax({
            url : common.URL_BE_REGISTER,
            data : data,
            suc : suc,
            err : err
        });
    }

}

const authsv = new AuthServices();
export default authsv;