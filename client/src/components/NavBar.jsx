import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <div className=" w-full flex border-gray-700 items-center justify-between px-4 bg-black border-b-[0.1px] py-3">
            
            <Link to="/" className=" font-bold text-xl text-[rgb(72,202,155)] hover:text-[rgb(72,202,155)] ">
                Track-Bill
            </Link> 
        
            <Link to="/groups" className=" text-md text-[#48CA9B] hover:bg-stone-900 rounded hover:text-white px-5 py-2">
                Groups
            </Link>
            
        </div>
    )
}