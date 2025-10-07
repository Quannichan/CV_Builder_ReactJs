import { useEffect, useRef, useState } from "react";
import Success from "../components/Success";
import Error from "../components/Error";
import { useSelector } from "react-redux";

function NotificationLayout(){

    const notiDivRef = useRef();

    const notification = useSelector((state) => state.notification);

    const [noti, setNoti] = useState([]);

    const [count, setCount] = useState(1);

    useEffect(() => {
        if (notification.content) {
            if(notification.type === 1){
                setNoti([...noti, <Success key={count} content={notification.content} second={notification.second}/>])
                setCount(count+1);
            }else if(notification.type === 2){
                setNoti([...noti, <Error key={count} content={notification.content} second={notification.second}/>]);
                setCount(count+1);
            }
        }
    }, [notification]);

    return(
        <div className="fixed top-4 left-4 items-start justify-start h-fit flex-col-reverse z-10000" ref={notiDivRef}>
            {
                noti.map((d)=>{
                    return d
                })
            }
        </div>
    );
}

export default NotificationLayout;