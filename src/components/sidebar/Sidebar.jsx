import React from "react";
import { Home, TrendingUp } from '@mui/icons-material';

const Sidebar = function() {
    return (
        <aside className="text-white min-h-screen p-4 bg-slate-800 max-w-xs w-1/5">
            <h3 className="text-3xl font-bold">LOGO</h3>
            <div className="pt-7">
                <h5 className="font-semibold text-sm opacity-60">Dashboard</h5>
                <ul>
                    <li className="mt-2">
                        <a className="flex items-center p-2 hover:bg-slate-700 rounded-md duration-200" href="#">
                            < Home className="opacity-80 mr-2 mb-1" />
                            Home</a>
                    </li>
                    <li>
                        <a className="flex items-center p-2 hover:bg-slate-700 rounded-md duration-200" href="#">
                            < TrendingUp className="opacity-80 mr-2 mb-1" />
                            Analytics</a>
                    </li>
                    <li>
                        <a className="flex items-center p-2 hover:bg-slate-700 rounded-md duration-200" href="#">
                            < Home className="opacity-80 mr-2 mb-1" />
                            Users</a>
                    </li>
                </ul>    
            </div>
            <div className="pt-7">
                <h5 className="font-semibold text-sm opacity-60">Quick menu</h5>
                <ul>
                    <li className="mt-2">
                        <a className="flex items-center p-2 hover:bg-slate-700 rounded-md duration-200" href="#">
                            < Home className="opacity-80 mr-2 mb-1" />
                            Home</a>
                    </li>
                    <li>
                        <a className="flex items-center p-2 hover:bg-slate-700 rounded-md duration-200" href="#">
                            < TrendingUp className="opacity-80 mr-2 mb-1" />
                            Analytics</a>
                    </li>
                    <li>
                        <a className="flex items-center p-2 hover:bg-slate-700 rounded-md duration-200" href="#">
                            < Home className="opacity-80 mr-2 mb-1" />
                            Users</a>
                    </li>
                </ul>    
            </div>
            <div className="pt-7">
                <h5 className="font-semibold text-sm opacity-60">Notifications</h5>
                <ul>
                    <li className="mt-2">
                        <a className="flex items-center p-2 hover:bg-slate-700 rounded-md duration-200" href="#">
                            < Home className="opacity-80 mr-2 mb-1" />
                            Mail</a>
                    </li>
                    <li>
                        <a className="flex items-center p-2 hover:bg-slate-700 rounded-md duration-200" href="#">
                            < TrendingUp className="opacity-80 mr-2 mb-1" />
                            Feedback</a>
                    </li>
                    <li className="flex items-center justify-between">
                        <a className="flex items-center p-2 hover:bg-slate-700 rounded-md duration-200" href="#">
                            < Home className="opacity-80 mr-2 mb-1" />
                            Messages</a>
                        <span className="py-1 px-3 bg-green-700 rounded-md">+285</span>
                    </li>
                </ul>    
            </div>    
        </aside>
    )
}

export default Sidebar;