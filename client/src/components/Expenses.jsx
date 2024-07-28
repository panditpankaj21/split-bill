import { useState, useEffect } from "react"
import ExpenseCard from "./ExpenseCard";
import CreateExpenseForm from "../forms/CreateExpenseForm";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectGroupById, fetchGroupById } from "../store/groupSlice";


export default function Expenses(){
    const { groupId } = useParams();
    const [group, setGroup] = useState([]);
    const [isFormPageActive, setIsFormPageActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchGroup(){
            setIsLoading(true)
            const response = await fetch(`http://localhost:8000/api/v1/groups/${groupId}`);
            const data = await response.json();
            console.log("data", data)
            setGroup(data);
            setIsLoading(false);
        }

        fetchGroup();
        
    }, []);


    if(isLoading) return <div>Loading...</div>

    const expensesHistory = group.expensesHistory;

    console.log(expensesHistory)

    return(
        <div>
        { !isFormPageActive && <div className="bg-stone-800 w-full px-4 py-2 rounded mt-5">
            <div className="">
                <div className="flex justify-between">
                    <p className="font-semibold text-2xl">Expenses</p>
                    <button 
                        className="bg-[#48CA9B] text-black px-4 rounded font-bold"
                        onClick={()=>setIsFormPageActive(true)}
                    >
                        +
                    </button>
                </div>
                
                <p className="text-sm text-gray-400">Here are the expenses that you created for your group.</p>
            </div>

            <div>
                {
                    expensesHistory?.length ? expensesHistory.map((expense, index)=> <ExpenseCard key={index}/>) : 
                    <p 
                        className="py-7"
                    >
                        Your group doesn't contain any expense yet.&nbsp; 
                        <span 
                            className="text-[#48CA9B] hover:underline cursor-pointer"
                            onClick={()=>setIsFormPageActive(true)}
                        >   
                            Create the first one
                        </span>
                    </p>
                }
            </div>
            
        </div>
        }
        {
            isFormPageActive &&
            <CreateExpenseForm 
                setIsFormPageActive={setIsFormPageActive}
                group={group}
            />
        }

        </div>
            

    )
}