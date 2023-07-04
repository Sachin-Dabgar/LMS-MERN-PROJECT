import React, { useEffect, useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropDown from "../Core/Auth/ProfileDropDown";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { SlArrowDown } from "react-icons/sl";

const Navbar = () => {
    const location = useLocation();

    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const { totalItems } = useSelector((state) => state.cart);

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    };

    const [subLinks, setSubLinks] = useState([
        {
            title: "python",
            link: "/catalog/python",
        },
        {
            title: "web dev",
            link: "/catalog/web-development",
        },
    ]);

    const fetchSubLinks = async () => {
        try {
            const result = await apiConnector("GET", categories.CATEGORIES_API);
            // TODO
            // setSubLinks(result?.data?.data);
        } catch (err) {
            console.log("Couldn't fetch the category list.");
        }
    };

    useEffect(() => {
        fetchSubLinks();
    }, []);

    return (
        <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700  transition-all duration-200">
            <div className="flex w-11/12 max-w-maxContent items-center justify-between">
                {/* logo */}
                <Link to={"/"}>
                    <img
                        src={Logo}
                        alt="logo"
                        width={160}
                        height={32}
                        loading="lazy"
                    />
                </Link>

                {/* nav links */}
                <nav>
                    <ul className="flex gap-x-6 text-richblack-25">
                        {NavbarLinks.map((element, index) => {
                            return (
                                <li key={index}>
                                    {element?.title === "Catalog" ? (
                                        <div className="group relative flex cursor-pointer items-center gap-1 text-richblack-25">
                                            <p>Catalog</p>
                                            <SlArrowDown size={12} />
                                            <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                                                <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                                                {subLinks.map(
                                                    (sublink, index) => (
                                                        <Link
                                                            className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                                            key={index}
                                                            to={sublink.link}
                                                        >
                                                            <p>
                                                                {sublink.title}
                                                            </p>
                                                        </Link>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link to={element?.path}>
                                            <p
                                                className={`${
                                                    matchRoute(element?.path)
                                                        ? "text-yellow-25"
                                                        : "text-richblack-25"
                                                }`}
                                            >
                                                {element?.title}
                                            </p>
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* login signup dashboard */}
                <div className="flex gap-x-4 items-center">
                    {/* showing cart */}
                    {user && user?.accountType !== "Instructor" && (
                        <Link
                            to={"/dashboard/cart"}
                            className="relative"
                        >
                            <AiOutlineShoppingCart />
                            {totalItems > 0 && <span>{totalItems}</span>}
                        </Link>
                    )}

                    {/* show login or not */}
                    {token === null && (
                        <Link to={"/login"}>
                            <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
                                Log in
                            </button>
                        </Link>
                    )}
                    {token === null && (
                        <Link to={"/signup"}>
                            <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
                                Sign up
                            </button>
                        </Link>
                    )}
                    {token !== null && <ProfileDropDown />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
