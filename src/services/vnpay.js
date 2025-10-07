import common from "../utils/common";

class VnpayService {

    get(id, suc, err){
        common.ajax_secu_header({
            url : common.URL_BE_VNPAY,
            data: {
                serv: common.SV_GET,
                orderId : id,
                iduser : common.UID
            },
            suc: suc,
            err: err
        })
    }

    create_payment(type, suc, err){
        common.ajax_secu_header({
            url : common.URL_BE_VNPAY,
            data: {
                serv: common.SV_NEW,
                type: type
            },
            suc: suc,
            err: err
        })
    }

    cancel(suc, err){
        common.ajax_secu_header({
            url : common.URL_BE_VNPAY,
            data: {
                serv: common.SV_DEL,
                iduser : common.UID
            },
            suc: suc,
            err: err
        })
    }

    getPending(suc, err){
        common.ajax_secu_header({
            url : common.URL_BE_VNPAY,
            data: {
                serv: common.SV_GET_PENDING,
                iduser : common.UID
            },
            suc: suc,
            err: err
        })
    }

}

const vnpayService = new VnpayService();
export default vnpayService;