import React from "react";
import { FooterLink2 } from "../../../data/footer-links";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo/Logo-Full-Light.png";

const Footer = () => {
    console.log(FooterLink2);

    return (
        <div className="bg-richblack-800">
            <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
                <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
                    <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
                        <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">
                            <img
                                src={logo}
                                alt=""
                                className="object-contain"
                            />
                            <h1 className="text-richblack-50 font-semibold text-[16px]">
                                Company
                            </h1>
                            <div className="flex flex-col gap-2">
                                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                                    <a href="/about">About</a>
                                </div>
                                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                                    <a href="/careers">Careers</a>
                                </div>
                                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                                    <a href="/affiliates">Affiliates</a>
                                </div>
                            </div>
                            <div className="flex gap-3 text-lg">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                                </svg>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 488 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                                </svg>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                </svg>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 576 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                                </svg>
                            </div>
                            <div></div>
                        </div>
                        <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                            <h1 className="text-richblack-50 font-semibold text-[16px]">
                                Resources
                            </h1>
                            <div className="flex flex-col gap-2 mt-2">
                                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                                    <a href="/articles">Articles</a>
                                </div>
                                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                                    <a href="/blog">Blog</a>
                                </div>
                                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                                    <a href="/chart-sheet">Chart Sheet</a>
                                </div>
                                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                                    <a href="/code-challenges">
                                        Code challenges
                                    </a>
                                </div>
                                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                                    <a href="/docs">Docs</a>
                                </div>
                                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                                    <a href="/projects">Projects</a>
                                </div>
                                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                                    <a href="/videos">Videos</a>
                                </div>
                                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                                    <a href="/workspaces">Workspaces</a>
                                </div>
                            </div>
                            <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                                Support
                            </h1>
                            <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
                                <a href="/help-center">Help Center</a>
                            </div>
                        </div>
                        <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                            <h1 className="text-richblack-50 font-semibold text-[16px]">
                                Plans
                            </h1>
                            <div className="flex flex-col gap-2 mt-2">
                                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                                    <a href="/paid-memberships">
                                        Paid memberships
                                    </a>
                                </div>
                                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                                    <a href="/for-students">For students</a>
                                </div>
                                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                                    <a href="/business-solutions">
                                        Business solutions
                                    </a>
                                </div>
                            </div>
                            <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                                Community
                            </h1>
                            <div className="flex flex-col gap-2 mt-2">
                                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                                    <a href="/forums">Forums</a>
                                </div>
                                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                                    <a href="/chapters">Chapters</a>
                                </div>
                                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                                    <a href="/events">Events</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
                        {FooterLink2.map((footerlink) => {
                            return (
                                <div
                                    key={footerlink?.title}
                                    className="w-[48%] lg:w-[30%] mb-7 lg:pl-0"
                                >
                                    <h1 className="text-richblack-50 font-semibold text-[16px]">
                                        {footerlink?.title}
                                    </h1>
                                    {footerlink.links.map((eachLinks) => {
                                        return (
                                            <div
                                                key={eachLinks?.title}
                                                className="flex flex-col gap-2 mt-2"
                                            >
                                                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                                                    <Link to="/al">
                                                        {eachLinks?.title}
                                                    </Link>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  pb-14 text-sm">
                <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
                    <div className="flex flex-row">
                        <div className=" border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200 px-3 ">
                            <a href="/privacy-policy">Privacy Policy</a>
                        </div>
                        <div className=" border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200 px-3 ">
                            <a href="/cookie-policy">Cookie Policy</a>
                        </div>
                        <div className="  px-3 ">
                            <a href="/terms">Terms</a>
                        </div>
                    </div>
                    <div className="text-center">
                        Made with ❤️ Sachin © 2023 Studynotion
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
