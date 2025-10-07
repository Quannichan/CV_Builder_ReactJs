import Loading from "../../../../components/Loading";

export default function Pending(){
    return(
        <div className="w-full flex flex-col items-center justify-center h-150 px-5 gap-3">
            <Loading spinClassName="w-10 h-10"/>
            <h1 className="text-2xl font-semibold">Giao dịch đang chờ thanh toán</h1>
        </div>
    )
}