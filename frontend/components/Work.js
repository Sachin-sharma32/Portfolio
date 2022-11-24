import React from "react";
import AppWrapp from "../wrapper/AppWrapp";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import WorkCard from "./WorkCard";
import { client } from "../sanity";

const Work = () => {
    const [categories, setCategories] = useState(null);
    const [works, setWorks] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const query = `*[_type == "category"]`;
            const query2 = `*[_type == "work"]{
              title,url,github,description,image,
              "category": category.category->name
            }`;
            const categories = await client.fetch(query);
            const works = await client.fetch(query2);
            console.log(works)
            setCategories(categories);
            setWorks(works);
        }
        fetchData();
    }, [selectedCategory]);
    return (
        <div className="min-h-screen pt-20 px-10 mx-auto">
            <div className="flex flex-col gap-14 items-center">
                <h2 className="w-full text-center text-3xl font-semibold">
                    My Creative{" "}
                    <span className=" text-blue-500">Portfolio</span> Section
                </h2>
                {categories && (
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 flex-wrap">
                        {categories.map((category, index) => (
                            <Button
                                key={index}
                                className={`hover:bg-blue-400 hover:text-white text-xs sm:text-md ${
                                    selectedCategory == category.name
                                        ? "bg-blue-500 text-white"
                                        : "bg-white"
                                }`}
                                onClick={() => {
                                    setSelectedCategory(category.name);
                                }}
                            >
                                {category.name}
                            </Button>
                        ))}
                    </div>
                )}
                {works && (!selectedCategory || selectedCategory == "All") && (
                    <div className=" text-center gap-4 w-full grid grid-cols-1 justify-center justify-items-center sm:grid-cols-2 lg:grid-cols-3">
                        {works.map((work, index) => (
                            <WorkCard work={work} key={index} />
                        ))}
                    </div>
                )}
                {works && selectedCategory && selectedCategory != "All" && (
                    <div className=" text-center gap-4 w-full grid grid-cols-1 justify-center justify-items-center sm:grid-cols-2 lg:grid-cols-3">
                        {works
                            .filter((work) => work.category == selectedCategory)
                            .map((work, index) => (
                                <WorkCard work={work} key={index}/>
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AppWrapp(Work, "WORK");
