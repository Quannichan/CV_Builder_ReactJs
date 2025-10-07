import common from "../utils/common";

class AIService{

    gen(data, suc, err){
        common.ajax_secu_header({
            url : common.URL_BE_AI,
            data: {
                serv: common.SV_GEN,
                ...data,
            },
            suc: suc,
            err: err
        })
    }

    genBase(data, suc, err){
        common.ajax_secu_header({
            url : common.URL_BE_AI,
            data: {
                serv: common.SV_GEN_BASE,
                ...data,
            },
            suc: suc,
            err: err
        })
    }

    Fix(data, suc, err){
        common.ajax_secu_header({
            url : common.URL_BE_AI,
            data: {
                serv: common.SV_FIX,
                ...data,
            },
            suc: suc,
            err: err
        })
    }

}

const aiService = new AIService();
export default aiService;