import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../components/Core/HomePage/HighlightText";
import CTAButton from "../components/Core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/Core/HomePage/CodeBlocks";
import Footer from "../components/Core/HomePage/Footer";

const Home = () => {
    return (
        <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
            {/* section 1 */}
            <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
                <Link to="/signup">
                    <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
                        <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
                            <p>Become an Instructor</p>
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>
                <div className="text-center text-4xl font-semibold">
                    Empower Your Future with
                    <HighlightText text={"Coding Skills"} />
                </div>
                <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
                    With our online coding courses, you can learn at your own
                    pace, from anywhere in the world, and get access to a wealth
                    of resources, including hands-on projects, quizzes, and
                    personalized feedback from instructors.
                </div>

                <div className="flex flex-row gap-7 mt-8">
                    <CTAButton
                        active={true}
                        linkto={"/signup"}
                    >
                        Learn More
                    </CTAButton>
                    <CTAButton
                        active={false}
                        linkto={"/login"}
                    >
                        Book a Demo
                    </CTAButton>
                </div>

                <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
                    <video
                        className="shadow-[20px_20px_rgba(255,255,255)]"
                        loop
                        muted
                        autoPlay
                    >
                        {" "}
                        <source
                            src={Banner}
                            type="video/mp4"
                        />
                    </video>
                </div>

                {/* code section 1 */}
                <div>
                    <CodeBlocks
                        position={"lg:flex-row"}
                        heading={
                            <div className="text-4xl font-semibold">
                                Unlock your
                                <HighlightText text={"coding potential "} />
                                with our online courses.
                            </div>
                        }
                        subheading={
                            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                        }
                        ctabtn1={{
                            btnText: "Try it Yourself",
                            linkto: "signup",
                            active: true,
                        }}
                        ctabtn2={{
                            btnText: "Learn More",
                            linkto: "login",
                            active: false,
                        }}
                        codeblock={`<!DOCTYPE html> \n <html lang="en"> \n <head> \n <title>My Web Page</title> \n </head> \n <body> \n <h1>Welcome to my Web Page</h1> \n <p>This is a paragraph of text.</p> \n <img src="image.jpg" alt="My Image"> \n </body> \n </html>`}
                        codeColor={"text-yellow-25"}
                        backgroundGradient={"codeblock1"}
                    />
                </div>

                {/* code section 2 */}
                <div>
                    <CodeBlocks
                        position={"lg:flex-row-reverse"}
                        heading={
                            <div className="text-4xl font-semibold">
                                Start
                                <HighlightText text={"coding in seconds "} />
                            </div>
                        }
                        subheading={
                            "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                        }
                        ctabtn1={{
                            btnText: "Try it Yourself",
                            linkto: "signup",
                            active: true,
                        }}
                        ctabtn2={{
                            btnText: "Learn More",
                            linkto: "login",
                            active: false,
                        }}
                        codeblock={`import React, { useState } from 'react'; \n const App = () => { \n const [count, setCount] = useState(0); \n return <div> \n \t <h1>React Counter</h1> \n \t <p>Count: {count}</p> \n \t <button onClick={() => setCount(count + 1)}>Increment</button> \n \t </div>; \n \t }; \n export default App;`}
                        codeColor={"text-yellow-25"}
                        backgroundGradient={"codeblock2"}
                    />
                </div>
            </div>
            {/* section 2 */}
            {/* section 3 */}
            {/* footer */}
            <Footer />
        </div>
    );
};

export default Home;
