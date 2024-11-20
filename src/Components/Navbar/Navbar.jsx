import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [theme, setTheme] = useState('light');
    const handleToggleTheme = (e) => {
        if (e.target.checked) {
            setTheme('retro')
        } else {
            setTheme('light')
        }
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme',localTheme)
    }, [theme])

   console.log(theme)


    const links = <>
        <li className="font-semibold " ><NavLink to="/">Home</NavLink></li>
        <li className="font-semibold"><NavLink to='/listed-books'>Listed Books </NavLink></li>
        <li className="font-semibold"><NavLink to='/page-to-reload'>Pages to Read</NavLink></li>
        <li className="font-semibold"><NavLink to='/blogs'>Blogs</NavLink></li>
        <li className="font-semibold"><NavLink to='/about-us'>About Us</NavLink></li>

    </>
    return (
        <div className="navbar  shadow-lg bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-lg lg:text-3xl font-bold"><span className="text-[#23BE0A]">Book</span> <span className="text-[#59C6D2]">Beat</span></a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 ">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn mr-3 bg-[#23BE0A] text-white">Sign In</a>
                <a className="btn mr-3 bg-[#59C6D2] text-white">Sign Up</a>
                <label className="grid cursor-pointer place-items-center">
                    <input
                        onChange={handleToggleTheme}
                        type="checkbox"

                        className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                    <svg
                        className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <svg
                        className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;