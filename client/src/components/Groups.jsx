import { useState } from "react"
import {
    Link,
    Outlet
} from "react-router-dom"
import CreateGroup from "./CreateGroup";
import GroupCard from "./GroupCard";

export default function Groups(){
    const [isSelect, setIsSelect] = useState(false);
    const [groups, setGroups] = useState([{name: "pankaj"}, {name: "pankaj"}, {name: "pankaj"}, {name: "pankaj"}]);

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
            {
                isSelect && <CreateGroup setIsSelect={setIsSelect}/>
            }

            {
                !isSelect &&
                <div className="grid grid-cols-2 px-52 gap-x-2 gap-y-2 mt-4">

                    {groups.map((group, index) => <GroupCard key={index}/>)}
                </div>
            }

        </div>
        
    )
}