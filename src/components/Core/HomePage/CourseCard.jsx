import React from "react";
import { FaUserFriends } from "react-icons/fa";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
    return (
        <div className="w-[360px] lg:w-[30%] bg-richblack-800  text-richblack-25 h-[300px] box-border cursor-pointer">
            <div className="border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3">
                <div className=" false font-semibold text-[20px]">
                    Learn CSS
                </div>
                <div className="text-richblack-400">
                    This course explores advanced topics in HTML5 and CSS3,
                    including animations, transitions, and layout techniques
                </div>
            </div>
            <div className="flex justify-between text-richblack-300 px-6 py-3 font-medium">
                <div className="flex items-center gap-2 text-[16px]">
                    <FaUserFriends />
                    <p>Beginner</p>
                </div>
                <div className="flex items-center gap-2 text-[16px]">
                    {/* svg */}
                    <p>6 lessions</p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
