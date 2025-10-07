/* eslint-disable react/prop-types */
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

function Stars({stars}){
    return(
        <>
            {
                     stars === 0 // 0 sao
                    ?
                    <div className="flex justify-start items-center "><IoIosStarOutline className="text-yellow-400 "/><IoIosStarOutline className="text-yellow-400 "/><IoIosStarOutline className="text-yellow-400 "/><IoIosStarOutline className="text-yellow-400 "/><IoIosStarOutline className="text-yellow-400 "/></div>
                    :
                         stars === 0.5 // 0.5 sao
                        ?
                        <div className="flex justify-start items-center"><IoIosStarHalf className="text-yellow-400 "/><IoIosStarOutline className="text-yellow-400 "/><IoIosStarOutline className="text-yellow-400 "/><IoIosStarOutline className="text-yellow-400 "/><IoIosStarOutline className="text-yellow-400 "/></div>
                        :
                             stars === 1 // 1 sao
                            ?
                            <div className="flex justify-start items-center "><IoIosStar className="text-yellow-400 "/><IoIosStarOutline className="text-yellow-400 "/><IoIosStarOutline className="text-yellow-400 "/><IoIosStarOutline className="text-yellow-400 "/><IoIosStarOutline className="text-yellow-400 "/></div>
                            :
                                 stars === 1.5 // 1.5 sao
                                ?
                                <div className="flex justify-start items-center "><IoIosStar className="text-yellow-400 "/><IoIosStarHalf className="text-yellow-400"/><IoIosStarOutline className="text-yellow-400 "/><IoIosStarOutline className="text-yellow-400 "/><IoIosStarOutline className="text-yellow-400 "/></div>
                                :
                                     stars === 2 // 2 sao
                                    ?
                                    <div className="flex justify-start items-center "><IoIosStar className="text-yellow-400 "/><IoIosStar className="text-yellow-400 "/><IoIosStarOutline className="text-yellow-400 "/><IoIosStarOutline className="text-yellow-400 "/><IoIosStarOutline className="text-yellow-400 "/></div>
                                    :
                                         stars === 2.5 // 2.5 sao
                                        ?
                                        <div className="flex justify-start items-center "><IoIosStar className="text-yellow-400 "/><IoIosStar className="text-yellow-400 "/><IoIosStarHalf className="text-yellow-400 "/><IoIosStarOutline className="text-yellow-400 "/><IoIosStarOutline className="text-yellow-400 "/></div>
                                        :
                                             stars === 3 // 3 sao
                                            ? 
                                            <div className="flex justify-start items-center "><IoIosStar className="text-yellow-400 "/><IoIosStar className="text-yellow-400 "/><IoIosStar className="text-yellow-400 "/><IoIosStarOutline className="text-yellow-400"/><IoIosStarOutline className="text-yellow-400 "/></div>
                                            :
                                                 stars === 3.5 // 3.5 sao
                                                ?
                                                <div className="flex justify-start items-center "><IoIosStar className="text-yellow-400 "/><IoIosStar className="text-yellow-400 "/><IoIosStar className="text-yellow-400 "/><IoIosStarHalf className="text-yellow-400 "/><IoIosStarOutline className="text-yellow-400 "/></div>
                                                :
                                                     stars === 4 // 4 sao
                                                    ?
                                                    <div className="flex justify-start items-center "><IoIosStar className="text-yellow-400 "/><IoIosStar className="text-yellow-400 "/><IoIosStar className="text-yellow-400 "/><IoIosStar className="text-yellow-400 "/><IoIosStarOutline className="text-yellow-400 "/></div>
                                                    :
                                                         stars === 4.5 // 4.5 sao
                                                        ?
                                                        <div className="flex justify-start items-center "><IoIosStar className="text-yellow-400 "/><IoIosStar className="text-yellow-400 "/><IoIosStar className="text-yellow-400 "/><IoIosStar className="text-yellow-400 "/><IoIosStarHalf className="text-yellow-400 "/></div>
                                                        :
                                                             stars === 5 // 5 sao
                                                            ?
                                                            <div className="flex justify-start items-center "><IoIosStar className="text-yellow-400 "/><IoIosStar className="text-yellow-400 "/><IoIosStar className="text-yellow-400 "/><IoIosStar className="text-yellow-400 "/><IoIosStar className="text-yellow-400 "/></div>
                                                            :
                                                            <></>
                    }
        </>
    );
}

export default Stars;