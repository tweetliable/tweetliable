import { GrFormNextLink } from "react-icons/gr"
import { GrFormPreviousLink } from "react-icons/gr"

export const Pagination = ({}) => {
    return (
        <div className="flex justify-center m-5">
            <button className="border-gray-500 border-2 rounded px-3 py-1 mx-5 flex justify-center items-center hover:bg-blue-200 dark:hover:bg-blue-900"> 
                <GrFormPreviousLink style={{width: "20px", height: "20px"}}/> Prev
            </button>
            <button className="border-gray-500 border-2 rounded px-3 py-1 mx-5 flex justify-center items-center hover:bg-blue-200 dark:hover:bg-blue-900"> 
                Next <GrFormNextLink style={{width: "20px", height: "20px"}}/> 
            </button>
        </div>
    );
};