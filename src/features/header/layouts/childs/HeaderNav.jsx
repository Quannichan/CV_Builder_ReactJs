/* eslint-disable react/prop-types */
import NavEl from "../../components/NavEl";

function HeaderNav({navEl = []}){

    return(
        <ul className="flex justify-center items-center gap-5">
            {
                navEl.length > 0 
                ?
                    navEl.map((d, i)=>{
                        return <NavEl
                            key={i}
                            name={d.name}
                            pathName={d.path}
                        />
                    })
                :
                <></>
            }
        </ul>
    )
}

export default HeaderNav;