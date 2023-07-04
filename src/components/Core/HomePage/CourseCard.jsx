import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { MdClass } from "react-icons/md";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
    console.log("here is current card", currentCard);
    return (
        <div
            onClick={() => setCurrentCard(cardData.heading)}
            className={`w-[360px] lg:w-[30%] ${
                currentCard === cardData?.heading
                    ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
                    : "bg-richblack-800"
            }  text-richblack-25 h-[300px] box-border cursor-pointer`}
        >
            <div
                className={`border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3`}
            >
                <div
                    className={` ${
                        currentCard === cardData?.heading &&
                        "text-richblack-800"
                    } font-semibold text-[20px]`}
                >
                    {cardData.heading}
                </div>
                <div className="text-richblack-400">{cardData.description}</div>
            </div>
            <div
                className={`flex justify-between ${
                    currentCard === cardData?.heading
                        ? "text-blue-300"
                        : "text-richblack-300"
                } px-6 py-3 font-medium`}
            >
                <div className="flex items-center gap-2 text-[16px]">
                    <FaUserFriends />
                    <p>{cardData.level}</p>
                </div>
                <div className="flex items-center gap-2 text-[16px]">
                    <MdClass />
                    <p>{cardData.lessionNumber} lessions</p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
