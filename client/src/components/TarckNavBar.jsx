import { NavLink, Outlet } from "react-router-dom"

export default function TrackNavBar(){
    return(
        <div className="w-full px-56 mt-5">
            <div className="bg-stone-800 max-w-max px-2 py-1 flex gap-3 rounded">
                <NavLink 
                    to="/1/expenses" 
                    className={({ isActive }) =>
                    `font-semibold px-2 py-1 rounded ${isActive ? 'bg-black' : ''}`}
                >
                    Expenses
                </NavLink>
                <NavLink 
                    to="/1/balances" 
                    className={({ isActive }) =>
                    `font-semibold px-2 py-1 rounded ${isActive ? 'bg-black' : ''}`}
                >
                    Balances
                </NavLink>
                <NavLink 
                    to="/1/status" 
                    className={({ isActive }) =>
                    `font-semibold px-2 py-1 rounded ${isActive ? 'bg-black' : ''}`}
                >
                    Status
                </NavLink>
                <NavLink 
                    to="/1/activity" 
                    className={({ isActive }) =>
                    `font-semibold px-2 py-1 rounded ${isActive ? 'bg-black' : ''}`}
                >
                    Activity
                </NavLink>
                <NavLink 
                    to="/1/settings" 
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