import { useState } from "react"
import ExpenseCard from "./ExpenseCard";
import CreateExpenseForm from "../forms/CreateExpenseForm";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectGroupById } from "../store/groupSlice";


export default function Expenses(){
    const {groupId} = useParams();
    const group = useSelector((state)=> selectGroupById(state, groupId));
    const [expensesHistory, setExensesHistory] = useState([]);
    const [isFormPageActive, setIsFormPageActive] = useState(false);

    //using useEffect set the expensesHistory by calling api

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
                    expensesHistory.length ? expensesHistory.map((expense, index)=> <ExpenseCard key={index}/>) : 
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