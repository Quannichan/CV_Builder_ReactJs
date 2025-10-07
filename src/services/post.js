import common from "../utils/common";

class PostService{

    get(id, suc, err){
        common.ajax_secu_header({
            url: common.URL_BE_POST_PUBL,
            data: {
                serv: common.SV_GET,
                id: id
            },
            suc : suc,
            err : err
        })
    }

    new(data, suc, err){
        common.ajax_secu_header(
        {
            url : common.URL_BE_POST,
            data: {
                serv : common.SV_NEW,
                ...data
            },
            suc,
            err
        })
    }

    mod(data, suc, err){
        common.ajax_secu_header(
        {
            url : common.URL_BE_POST,
            data: {
                serv : common.SV_MOD,
                ...data
            },
            suc,
            err
        })
    }

    getAuth(data, suc, err){
        common.ajax_secu_header(
        {
            url : common.URL_BE_POST,
            data: {
                serv : common.SV_GETAUTH,
                ...data
            },
            suc,
            err
        })
    }

}

const postService = new PostService();
export default postService;