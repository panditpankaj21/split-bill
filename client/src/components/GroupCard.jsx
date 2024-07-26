import { useNavigate } from "react-router-dom"

export default function GroupCard(){
    const navigate = useNavigate();

    function handleClick(){
        navigate("/1/expenses")
    }

    return(
        <div 
            className=" bg-stone-900 hover:bg-gray-900 cursor-pointer px-4  py-3 rounded-md pt-5"
            onClick={handleClick}
        >
            <div className="flex justify-between mb-2">
                <p className="font-bold">Summer Vacations</p>
                <button className="text-red-600 text-xs hover:bg-stone-800 px-4 rounded">Delete</button>
            </div>
            <div className="flex justify-between">
                <p className="text-xs">👥 4</p>
                <p className="text-xs">July 26, 2024</p>
            </div>
        </div>
    )
}