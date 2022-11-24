import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className=" flex fixed backdrop-blur-sm justify-between w-full sm:p-4 items-center p-2 z-50">
            <div>
                <h3 className=" text-2xl font-semibold text-blue-600">
                    SachinCoding
                </h3>
            </div>
            <div className=" ">
                <ul className=" sm:flex gap-10 hidden text-sm">
                    {["HOME", "ABOUT", "WORK", "TESTIMONIALS", "FOOTER"].map(
                        (item, index) => (
                            <li
                                className="hover:text-blue-200 text-blue-400 transition-all duration-150"
                                key={index}
                            >
                                <Link
                                    activeClass="active"
                                    to={item}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                    href={`#${item}`}
                                >
                                    {item}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </div>
            <div className=" sm:hidden">
                {!toggle && (
                    <Button
                        onClick={() => {
                            setToggle(true);
                        }}
                    >
                        <MenuIcon />
                    </Button>
                )}
                {toggle && (
                    <div className=" absolute top-0 right-0 flex justify-between p-4 h-screen animate bg-white bg-opacity-75 bg-blend-saturation">
                        <ul className=" mt-12 flex flex-col gap-4 w-100%">
                            {[
                                "HOME",
                                "ABOUT",
                                "WORK",
                                "TESTIMONIALS",
                                "FOOTER",
                            ].map((item, index) => (
                                <Button
                                    className=" hover:text-blue-200 text-blue-400 transition-all duration-150 w-full button_animate"
                                    key={index}
                                    onClick={() => {
                                        setToggle(false);
                                    }}
                                >
                                    <Link
                                        activeClass="active"
                                        to={item}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={1000}
                                        href={`#${item}`}
                                    >
                                        {item}
                                    </Link>
                                </Button>
                            ))}
                        </ul>
                        <div className=" absolute top-2 right-0">
                            <Button onClick={() => setToggle(false)}>
                                <CloseIcon />
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
