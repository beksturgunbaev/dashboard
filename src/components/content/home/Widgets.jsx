import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import GroupIcon from '@mui/icons-material/Group';

const Widgets = ({ type }) => {

    let data;

    switch(type) {
        case "users":
        data = {
            title: "USERS",
            link: "See all users",
            count: 100,
            icon: (
                < GroupIcon />
            )
        }
        break;
        case "orders":
        data = {
            title: "ORDERS",
            link: "See all ordesr",
            count: 94,
            icon: (
                < GroupIcon />
            )
        }
        break;
        case "earnings":
        data = {
            title: "EARNINGS",
            link: "See all earnings",
            count: 50,
            icon: (
                < GroupIcon />
            )
        }
        break;
        case "balance":
        data = {
            title: "BALANCE",
            link: "See all balances",
            count: 80,
            icon: (
                < GroupIcon />
            )
        }
        break;
        default:
            break;
    }
    

    return (
        <div className='w-80 px-3 py-4 mt-5 shadow-xl hover:shadow-2xl duration-200'>
            <div className='flex justify-between items-center'>
                <span className='text-md font-bold uppercase opacity-50'>{data.title}</span>
                <span className='text-green-500'>
                < KeyboardArrowUpIcon /> 20%
                </span>
            </div>
            <h1 className='text-4xl my-3'>{data.count}</h1>
            <div className="flex justify-between items-center mt-5">
                <a className='text-sm font-medium opacity-80 underline' href="#">{data.link}</a>
                {data.icon}
            </div>
        </div>
    )
}

export default Widgets;