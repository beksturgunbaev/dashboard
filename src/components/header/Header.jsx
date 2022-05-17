import React from "react";
import ava from '../../Assets/img/ava.jpeg';
import { NotificationsNone, Search, HelpOutline, Opacity } from '@mui/icons-material'

let styleForNavIcons = {
    fontSize: '2rem',
    opacity: '.7',
    cursor: 'pointer'
}

const Header = function() {
    return (
        <header className="p-3 text-black flex justify-end items-center border-b-2 border-state-800">
            <ul className="flex justify-between items-center">
                <li className="mr-5">
                    < Search style={styleForNavIcons} />
                </li>
                <li className="mr-5 text-2xl">
                    < NotificationsNone style={styleForNavIcons} />
                </li>
                <li className="mr-5">
                    < HelpOutline style={styleForNavIcons} />
                </li>
                <li>
                    <img className="mx-3 w-14 h-14 rounded-full cursor-pointer object-cover" src={ava} alt="ava" />
                </li>
            </ul>
        </header>
    );
}

export default Header;