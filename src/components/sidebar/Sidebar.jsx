import React from "react";
import { Home, TrendingUp, Category, Group, Paid, Report, Settings, LocalPostOffice, QuestionAnswer, SwapCalls, ArrowBack, Analytics } 
    from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = function() {
    return (
        <aside className="relative text-white min-h-screen p-4 bg-slate-800 max-w-xs w-1/5">
            <h3 className="text-3xl font-bold">LOGO</h3>

                <div className="pt-7">
                    <h5 className="font-semibold text-sm opacity-60">Dashboard</h5>
                    <ul>
                        <li className="mt-2 mb-1">
                            <Link to="/" className="flex items-center p-2 hover:bg-slate-700 rounded-md duration-200">
                                < Home className="opacity-80 mr-2" />Home
                            </Link>
                        </li>
                        <li className="mb-1">
                            <Link to="/analytics" className="flex items-center p-2 hover:bg-slate-700 rounded-md duration-200">
                                < TrendingUp className="opacity-80 mr-2" />Analytics
                            </Link>
                        </li>
                        <li className="mb-1">
                            <a className="flex items-center p-2 hover:bg-slate-700 rounded-md duration-200" href="#">
                                < Group className="opacity-80 mr-2" />
                                Users</a>
                        </li>
                    </ul>    
                </div>
                <div className="pt-7">
                    <h5 className="font-semibold text-sm opacity-60">Quick menu</h5>
                    <ul>
                        <li className="mt-2 mb-1">
                            <a className="flex items-center p-2 hover:bg-slate-700 rounded-md duration-200" href="#">
                                < Category className="opacity-80 mr-2" />
                                Products</a>
                        </li>
                        <li className="mb-1">
                            <a className="flex items-center p-2 hover:bg-slate-700 rounded-md duration-200" href="#">
                                < Paid className="opacity-80 mr-2" />
                                Transactions</a>
                        </li>
                        <li className="mb-1">
                            <a className="flex items-center p-2 hover:bg-slate-700 rounded-md duration-200" href="#">
                                < Report className="opacity-80 mr-2" />
                                Reports</a>
                        </li>
                    </ul>    
                </div>
                <div className="pt-7">
                    <h5 className="font-semibold text-sm opacity-60">Notifications</h5>
                    <ul>
                        <li className="mt-2 mb-1">
                            <a className="flex justify-between items-center p-2 hover:bg-slate-700 rounded-md duration-200" href="#">
                                <span>< SwapCalls className="opacity-80 mr-2" />
                                    Calls
                                </span>
                                <span className="py-1 px-3 bg-green-700 rounded-md">+5</span>
                            </a>
                        </li>
                        <li className="mb-1">
                            <a className="flex justify-between items-center p-2 hover:bg-slate-700 rounded-md duration-200" href="#">
                                <span>
                                    < QuestionAnswer className="opacity-80 mr-2" />
                                    Reviews
                                </span>
                                <span className="py-1 px-3 bg-green-700 rounded-md">+285</span>    
                            </a>
                        </li>
                        <li className="mb-1">
                            <a className="flex justify-between items-center p-2 hover:bg-slate-700 rounded-md duration-200" href="#">
                                <span>< LocalPostOffice className="opacity-80 mr-2" />
                                    Messages
                                </span>
                                <span className="py-1 px-3 bg-green-700 rounded-md">+28</span>    
                            </a>
                        </li>
                        <li className="mb-1">
                            <a className="flex items-center p-2 hover:bg-slate-700 rounded-md duration-200" href="#">
                                < Settings className="opacity-80 mr-2" />
                                Settings
                            </a>
                        </li>
                    </ul>    
                </div>    

            <div className="absolute bottom-0 left-0 p-4">
                <a className="text-xl font-bold flex items-center p-2" href="#">
                    < ArrowBack className="opacity-80 mr-2" />
                    Log out</a>
            </div>
        </aside>
    )
}

export default Sidebar;