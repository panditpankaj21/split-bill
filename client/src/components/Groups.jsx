import { useState } from "react"
import {
    Link,
    Outlet
} from "react-router-dom"
import CreateGroup from "./CreateGroup";

export default function Groups(){
    const [isSelect, setIsSelect] = useState(false);
    const [groups, setGroups] = useState([]);

    // using useEffect get data of all groups create by current user


    return(
        <div>
            {!isSelect && <div className="flex justify-center mt-5 ">
                <button
                    className=" text-md  rounded hover:text-black px-5 py-2 bg-[#48CA9B] text-black "
                    onClick={()=> setIsSelect(true)}
                >
                    + New Group
                </button>
            </div>}
            {isSelect && <CreateGroup setIsSelect={setIsSelect}/>}

        </div>
        
    )
}