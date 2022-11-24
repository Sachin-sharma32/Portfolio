import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import { imageBuilder } from "../sanity";

const WorkCard = ({ work }) => {
    return (
        <div className="relative">
            <motion.div
                whileInView={{ y: [100, 0] }}
                animate={{ opacity: [0, 1] }}
                className="bg-white p-4 w-[300px] rounded-lg flex flex-col gap-2 min-h-[350px]"
            >
                <img
                    src={imageBuilder(work.image)}
                    alt=""
                    className=" rounded-lg"
                />
                <h5 className=" bg-white rounded-lg p-2 absolute top-[30px] left-1/2 -translate-x-1/2 opacity-70">
                    {work.category}
                </h5>
                <p className=" font-semibold">{work.title}</p>
                <p className=" text-gray-500">{work.description}</p>
                <div className="flex gap-4 w-full justify-center text-blue-500">
                    <a href={work.url}>
                        <LaunchIcon className=" hover:text-blue-300" />
                    </a>
                    <a href={work.github}>
                        <GitHubIcon className=" hover:text-blue-300" />
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default WorkCard;
