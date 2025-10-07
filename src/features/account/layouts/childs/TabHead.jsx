/* eslint-disable react/prop-types */
import Tab from "../../components/Tab";

function TabHead({tabs}){
    return(
        <div className="flex justify-center gap-2 items-baseline-last pb-5">
            {
                tabs.length > 0
                ?
                tabs.map((d, i)=>{
                    return <Tab
                        key={i}
                        content={d.name}
                        path={d.path}
                    />
                })
                :
                <></>
            }
        </div>
    );
}

export default TabHead;