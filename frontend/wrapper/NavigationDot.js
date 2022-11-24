import React from "react";
import { Link } from "react-scroll";

const NavigationDot = ({ active }) => {
    return (
        <div className="flex flex-col gap-4 dots">
            {["HOME", "ABOUT", "WORK", "TESTIMONIALS", "FOOTER"].map(
                (item, index) => (
                    <div className=" w-20 h-2 text-white" key={index}>
                        <Link
                            ctiveClass="active"
                            to={item}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            href={`#${item}`}
                            key={index}
                            style={
                                active === item
                                    ? {
                                          backgroundColor: "#313EAC",
                                          display: "block",
                                          width: "10px",
                                          height: "10px",
                                          borderRadius: "100px",
                                      }
                                    : //? DISPLAY BLOCK
                                      {
                                          backgroundColor: "#949aa3",
                                          display: "block",
                                          width: "10px",
                                          height: "10px",
                                          borderRadius: "100px",
                                      }
                            }
                        ></Link>
                    </div>
                )
            )}
        </div>
    );
};

export default NavigationDot;
