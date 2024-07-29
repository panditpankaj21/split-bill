import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectGroupById } from "../store/groupSlice";
import { useState, useEffect } from "react";

export default function Balances(){
    const { groupId } = useParams();
    const [group, setGroup] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchGroup(){
            setIsLoading(true)
            const response = await fetch(`http://localhost:8000/api/v1/groups/${groupId}`);
            const data = await response.json();
            console.log("data pankaj", data)
            setGroup(data);
            setIsLoading(false);
        }

        fetchGroup();
        
    }, []);


    if(isLoading) return <div>Loading...</div>
    console.log(group)


    return(
        <div className="mt-5 w-full pb-5">
            <div className="bg-stone-900 rounded-lg p-5">
                <div>
                    <p className="font-bold text-lg">Balances</p>
                    <p className="text-sm text-gray-500">This is the amount that each participant paid or was paid for.</p>
                </div>
                <div className="flex justify-center items-center mt-5">
                    <ul>
                        {
                            group && 
                            group.groupMembers.map((member) => <li className="mb-2" key={member._id}>{member.name}: {group.symbol}{member.currentBalance}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}