import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AppWrapp from "../wrapper/AppWrapp";

const Header = () => {
    return (
        <div>
            <div className="p-20 p w-fit m-auto relative h-screen hidden sm:flex">
                <div>
                    <img src="/man.png" width="500px" height="600px" />
                </div>
                <motion.div
                    whileInView={{ x: [-100, 0] }}
                    className=" flex gap-6 items-center bg-white w-60 px-6 justify-evenly py-4 shadow-lg rounded-2xl absolute top-[130px] left-0 z-10"
                >
                    <div>
                        <Image src="/wave.png" height="30px" width="30px" />
                    </div>
                    <div>
                        <h5>Hello, I am</h5>
                        <h1 className=" text-2xl font-semibold">Sachin</h1>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ x: [-100, 0] }}
                    className=" flex flex-col bg-white w-40 justify-center items-center shadow-lg rounded-xl px-4 py-2 text-gray-600 absolute top-[350px] left-[100px] z-10"
                >
                    <h3>WEB DEVELOPER</h3>
                    <h3>FREELANCER</h3>
                </motion.div>
                <motion.img
                    whileInView={{ x: [-200, 0, -20] }}
                    src="/bubble.png"
                    width="100"
                    className=" absolute top-[250px]"
                />
                <motion.img
                    whileInView={{ x: [-50, 0, -10] }}
                    src="/bubble.png"
                    width="20"
                    alt=""
                    className=" absolute top-[430px] left-[240px] opacity-0 sm:opacity-100"
                />
                <motion.img
                    whileInView={{ x: [100, 0, 20] }}
                    transition={{ delay: 1 }}
                    src="/react.png"
                    width="100"
                    className=" bg-white rounded-full p-4 absolute top-[100px] right-[150px]"
                />
                <motion.img
                    whileInView={{ x: [100, 0, 20] }}
                    transition={{ delay: 0.8 }}
                    src="/next.png"
                    width="100"
                    className=" bg-white rounded-full p-10 absolute top-[200px] right-[110px]"
                />
                <motion.img
                    whileInView={{ x: [100, 0, 20] }}
                    transition={{ delay: 0.6 }}
                    src="/python.png"
                    width="100"
                    className=" bg-white rounded-full p-4 absolute top-[300px] right-[90px]"
                />
                <motion.img
                    whileInView={{ x: [100, 0, 20] }}
                    transition={{ delay: 0.4 }}
                    src="/git.png"
                    width="100"
                    className=" bg-white rounded-full p-4 absolute top-[420px] right-[100px]"
                />
                <motion.img
                    whileInView={{ x: [100, 0, 20] }}
                    transition={{ delay: 0.2 }}
                    src="/node.png"
                    width="100"
                    className=" bg-white rounded-full p-4 absolute top-[530px] right-[120px]"
                />
            </div>
            <div className="p-20 m-auto h-screen sm:hidden w-screen flex flex-col justify-center items-center gap-4 cursor-default">
                <motion.div
                    whileInView={{ y: [-100, 0] }}
                    className=" flex gap-6 items-center bg-white w-60 px-6 justify-evenly py-4 shadow-lg rounded-2xl"
                >
                    <div>
                        <Image src="/wave.png" height="30px" width="30px" />
                    </div>
                    <div>
                        <h5>Hello, I am</h5>
                        <h1 className=" text-2xl font-semibold">Sachin</h1>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ y: [-100, 0] }}
                    transition={{ delay: 0.5 }}
                    className=" flex flex-col bg-white w-40 justify-center items-center shadow-lg rounded-xl px-4 py-2 text-gray-600 mt-2"
                >
                    <h3>WEB DEVELOPER</h3>
                    <h3>FREELANCER</h3>
                </motion.div>
                <div className=" grid grid-cols-2 gap-4">
                    <motion.div
                        className=" bg-[#54d4df] flex flex-col text-[10px] mobile:text-base  w-24 mobile:w-40 justify-center items-center shadow-lg rounded-xl px-4 py-2 text-white mt-2"
                        whileInView={{ x: [100, -50, 0] }}
                        transition={{ delay: 0.1 }}
                    >
                        REACTJS
                    </motion.div>
                    <motion.div
                        className=" bg-black text-white flex flex-col text-[10px] mobile:text-base  w-24 mobile:w-40 justify-center items-center shadow-lg rounded-xl px-4 py-2 mt-2"
                        whileInView={{ x: [100, -50, 0] }}
                        transition={{ delay: 0.2 }}
                    >
                        NEXTJS
                    </motion.div>
                    <motion.div
                        className=" bg-[#7bc328] flex flex-col text-[10px] mobile:text-base  w-24 mobile:w-40 justify-center items-center shadow-lg rounded-xl px-4 py-2 text-white mt-2"
                        whileInView={{ x: [100, -50, 0] }}
                        transition={{ delay: 0.3 }}
                    >
                        NODEJS
                    </motion.div>
                    <motion.div
                        className=" bg-[#96c16a] flex flex-col text-[10px] mobile:text-base  w-24 mobile:w-40 justify-center items-center shadow-lg rounded-xl px-4 py-2 text-white mt-2"
                        whileInView={{ x: [100, -50, 0] }}
                        transition={{ delay: 0.4 }}
                    >
                        EXPRESSJS
                    </motion.div>
                    <motion.div
                        className=" bg-[#880000] text-white flex flex-col text-[10px] mobile:text-base  w-24 mobile:w-40 justify-center items-center shadow-lg rounded-xl px-4 py-2  mt-2"
                        whileInView={{ x: [-100, 50, 0] }}
                        transition={{ delay: 0.1 }}
                    >
                        MONGOOSE
                    </motion.div>
                    <motion.div
                        className=" bg-[#38bdf8] text-white flex flex-col text-[10px] mobile:text-base  w-24 mobile:w-40 justify-center items-center shadow-lg rounded-xl px-4 py-2  mt-2"
                        whileInView={{ x: [-100, 50, 0] }}
                        transition={{ delay: 0.2 }}
                    >
                        TAILWIND CSS
                    </motion.div>
                    <motion.div
                        className=" bg-[#e44735]  text-white flex flex-col text-[10px] mobile:text-base  w-24 mobile:w-40 justify-center items-center shadow-lg rounded-xl px-4 py-2 mt-2"
                        whileInView={{ x: [-100, 50, 0] }}
                        transition={{ delay: 0.3 }}
                    >
                        SANITY CMS
                    </motion.div>
                    <motion.div
                        className=" bg-[#007fff] text-white flex flex-col text-[10px] mobile:text-base  w-24 mobile:w-40 justify-center items-center shadow-lg rounded-xl px-4 py-2 mt-2"
                        whileInView={{ x: [-100, 50, 0] }}
                        transition={{ delay: 0.4 }}
                    >
                        MATERIAL UI
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

//? HIGHER ORDER FN
export default AppWrapp(Header, "HOME");
