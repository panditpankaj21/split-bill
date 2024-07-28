import { NavLink, Outlet } from "react-router-dom"
import { useParams } from "react-router-dom"

export default function TrackNavBar(){
    const {groupId} = useParams();
    return(
        <div className="w-full px-56 mt-5">
            <div className="bg-stone-800 max-w-max px-2 py-1 flex gap-3 rounded">
                <NavLink 
                    to={`/${groupId}/expenses`} 
                    className={({ isActive }) =>
                    `font-semibold px-2 py-1 rounded ${isActive ? 'bg-black' : ''}`}
                >
                    Expenses
                </NavLink>
                <NavLink 
                    to={`/${groupId}/balances`} 
                    className={({ isActive }) =>
                    `font-semibold px-2 py-1 rounded ${isActive ? 'bg-black' : ''}`}
                >
                    Balances
                </NavLink>
                <NavLink 
                    to={`/${groupId}/stats`} 
                    className={({ isActive }) =>
                    `font-semibold px-2 py-1 rounded ${isActive ? 'bg-black' : ''}`}
                >
                    Status
                </NavLink>
                <NavLink 
                    to={`/${groupId}/activity`} 
                    className={({ isActive }) =>
                    `font-semibold px-2 py-1 rounded ${isActive ? 'bg-black' : ''}`}
                >
                    Activity
                </NavLink>
                <NavLink 
                    to={`/${groupId}/settings`} 
                    className={({ isActive }) =>
                    `font-semibold px-2 py-1 rounded ${isActive ? 'bg-black' : ''}`}
                >
                    Settings
                </NavLink>
            </div>
            <Outlet/>
        </div>
    )
}