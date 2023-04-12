import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex flex-col md:flex-row justify-around mx-auto items-center h-32">
            <div>
                <Link to='/'>
                    <p className="text-3xl font-bold">JobsHero</p>
                </Link>
            </div>
            {/* navigation links */}
            <ul className=" flex items-center space-x-8 text-gray-700 text-sm">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "active" : "default"
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/statistics"
                        className={({ isActive }) =>
                            isActive ? "active" : "default"
                        }
                    >
                        Statistics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/applied-jobs"
                        className={({ isActive }) =>
                            isActive ? "active" : "default"
                        }
                    >
                        Applied Jobs
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                            isActive ? "active" : "default"
                        }
                    >
                        Blog
                    </NavLink>
                </li>
            </ul>
            {/* buttons */}
            <div>
                <button className="btn-primary">Start Applying</button>
            </div>

        
        </div>
    );
};

export default Navbar;
