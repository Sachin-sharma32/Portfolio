import React from "react";
import { useState, useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AppWrapp from "../wrapper/AppWrapp";
import { client } from "../sanity";
import { imageBuilder } from "../sanity";
import Image from "next/image";

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState(null);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const query = `*[_type == "testimonials"]`;
            const data = await client.fetch(query);
            setTestimonials(data);
            console.log(data);
        }
        fetchData();
    }, []);
    return (
        <div className="mt-20 min-h-screen flex flex-col items-center p-20 bg-white gap-10">
            <h2 className="mb-10 text-3xl text-blue-500">Testimonials</h2>
            {testimonials && (
                <div className="flex flex-col items-center w-screen mx-2 sm:w-[100%]">
                    <div className="w-auto bg-blue-100 p-14 text-justify rounded-lg h-[20rem] pb-10">
                        <p>{testimonials[counter].feedback}</p>
                        <div className="flex gap-2 mt-6 items-center">
                            <img
                                src={imageBuilder(testimonials[counter].image)}
                                alt=""
                                className="w-12 rounded-xl"
                            />
                            <div>
                                <h5 className=" text-blue-700">
                                    {testimonials[counter].name}
                                </h5>
                                <h6 className=" font-bold">
                                    {testimonials[counter].company}
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-10 mt-8">
                        <div
                            className=" bg-blue-100 p-2 rounded-full hover:bg-blue-500 hover:text-white cursor-pointer"
                            onClick={() => {
                                counter == 0
                                    ? setCounter(testimonials.length - 1)
                                    : setCounter(counter - 1);
                            }}
                        >
                            <ArrowBackIcon />
                        </div>
                        <div
                            className=" bg-blue-100 p-2 rounded-full hover:bg-blue-500 hover:text-white cursor-pointer"
                            onClick={() => {
                                counter == testimonials.length - 1
                                    ? setCounter(0)
                                    : setCounter(counter + 1);
                            }}
                        >
                            <ArrowForwardIcon />
                        </div>
                    </div>
                </div>
            )}
            <div className="items-center gap-x-20 gap-y-4 hidden sm:grid sm:grid-cols-4">
                {["uber", "google", "facebook", "adidas"].map((item, index) => (
                    <Image
                        src={`/${item}.png`}
                        alt=""
                        className="grayscale"
                        key={index}
                        width={80}
                        height={50}
                    />
                ))}
            </div>
        </div>
    );
};

export default AppWrapp(Testimonial, "TESTIMONIALS");
