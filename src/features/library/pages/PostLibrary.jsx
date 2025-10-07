/* eslint-disable react/prop-types */
import { forwardRef } from "react"
import BlueModernPost from "../layouts/1_BlueModernPost"
import ClassicPost from "../layouts/2_ClassicPost";
import CreativePost from "../layouts/3_CreativePost";
import SimplePost from "../layouts/4_SimplePost";
import BussinessPost from "../layouts/5_BussinessPost";
import ITPost from "../layouts/6_ITPost";
import PolitePost from "../layouts/7_PolitePost";
import MedicalPost from "../layouts/8_MedicalPost";

const PostLibrary = forwardRef(function PostLibrary({isWaterMark, post, change, isPreview, type, font, isPNG, state}, ref){

    const getCV_Type = function(typ){
        switch(typ){
            case 1:
                return <BlueModernPost isWaterMark={isWaterMark} isPNG={isPNG} isPreview={isPreview} post={post} change={change} />

            case 2:
                return <ClassicPost isWaterMark={isWaterMark} isPNG={isPNG} isPreview={isPreview} post={post} change={change} />

            case 3:
                return <CreativePost isWaterMark={isWaterMark} isPNG={isPNG} isPreview={isPreview} post={post} change={change} />

            case 4:
                return <SimplePost isWaterMark={isWaterMark} isPNG={isPNG} isPreview={isPreview} post={post} change={change} />

            case 5:
                return <BussinessPost isWaterMark={isWaterMark} isPNG={isPNG} isPreview={isPreview} post={post} change={change} />

            case 6:
                return <ITPost isWaterMark={isWaterMark} isPNG={isPNG} isPreview={isPreview} post={post} change={change} />

            case 7:
                return <PolitePost isWaterMark={isWaterMark} isPNG={isPNG} isPreview={isPreview} post={post} change={change} />

            case 8:
                return <MedicalPost isWaterMark={isWaterMark} isPNG={isPNG} isPreview={isPreview} post={post} change={change} />
            
            default:
                state(false);
                break;
        }
    }

    return(
        <>
            <div ref={ref} className={` ${font} bg-[#e3e3e3] p-5`}>
                {        
                    getCV_Type(type)
                }
            </div>
        </>
    )
})

export default PostLibrary