import common from "../utils/common";

class PostSampleService{

    getPage(data, suc, err){
        common.ajax_secu_header(
            {
                url : common.URL_BE_POST_SAMPLE,
                data: {
                    serv : common.SV_PAGI,
                    ...data
                },
                suc,
                err
        })
    }

        get(id, suc, err){
        common.ajax_secu_header(
            {
                url : common.URL_BE_AMD_POSTSAMPLE,
                data: {
                    serv : common.SV_GET,
                    id : id
                },
                suc,
                err
            }
        )
    }

    new(data, suc, err){
        common.ajax_secu_header(
            {
                url : common.URL_BE_AMD_POSTSAMPLE,
                data: {
                    serv : common.SV_NEW,
                    ...data
                },
                suc,
                err
            }
        )
    }

    mod(data, suc, err){
        common.ajax_secu_header(
            {
                url : common.URL_BE_AMD_POSTSAMPLE,
                data: {
                    serv : common.SV_MOD,
                    ...data
                },
                suc,
                err
            }
        )
    }

    del(id, suc, err){
        common.ajax_secu_header(
            {
                url : common.URL_BE_AMD_POSTSAMPLE,
                data: {
                    serv : common.SV_DEL,
                    id: id
                },
                suc,
                err
            }
        )
    }

}

const postSampleService = new PostSampleService();
export default postSampleService;