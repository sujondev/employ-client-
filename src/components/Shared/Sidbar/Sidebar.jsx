import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mt-10 ml-5">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-slate-200">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80">
                        <li><Link to='/'>Add Employee</Link></li>
                        <li><Link to='/employeelist'>Employee List</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;