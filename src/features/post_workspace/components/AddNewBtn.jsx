/* eslint-disable react/prop-types */
import Button from "../../../components/Button";
import { IoMdAdd } from "react-icons/io";

export default function AddNewBtn({className = "", borderClr , Clr, onClick}){
    return(
        <Button
            click={onClick}
            className={`${className} ${borderClr ? `border-2 ${borderClr}` :""} opacity-40 rounded-lg hover:opacity-100 transition ease-in-out w-full px-5 py-4 flex justify-center items-center`}
            childs={
                <IoMdAdd className={`${Clr} text-3xl`}/>
            }
        />
    )
}