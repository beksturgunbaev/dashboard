import React from "react";
import Widgets from "./Widgets";

const HomePage = () => {
    return ( 
        <div>
            <h1 className='p-3 text-2xl font-bold'>Recent Activities</h1>
            <div className='p-3 flex flex-wrap space-x-5 space-y-5'>
                < Widgets type="users" />
                < Widgets type="orders" />
                < Widgets type="earnings" />
                < Widgets type="balance" />
            </div>
        </div>
     );
}
 
export default HomePage;