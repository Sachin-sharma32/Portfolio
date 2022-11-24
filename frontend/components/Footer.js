import { Button } from "@mui/material";
import React, { useState } from "react";
import AppWrapp from "../wrapper/AppWrapp";
import { Alert } from "@mui/material";
import { AlertTitle } from "@mui/material";
import { client } from "../sanity";


const Footer = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const contact = {
            _type: "contact",
            name: name,
            email: email,
            message: message,
        };
        if (name && email && message) {
            client.create(contact);
            setSubmitted(true);

            setTimeout(() => {
                setSubmitted(false);
            }, 2000);
        }
    };

    return (
        <div className="relative">
            <div className="flex flex-col items-center mt-20 min-h-screen pt-20 bg-white">
                <h2 className="text-3xl text-blue-500 mb-20">Contact Me</h2>
                <div className="flex flex-col gap-8">
                    <div className="bg-blue-200 flex items-center px-4 py-2 rounded-lg gap-2">
                        <img src="/iphone.png" alt="" className="w-10" />
                        <a href="tel: +91 6367212438" className="text-sm">
                            +91 6367212438
                        </a>
                    </div>
                    <div className="bg-blue-200 flex items-center px-4 py-2 rounded-lg gap-2">
                        <img src="/email.png" alt="" className="w-10" />
                        <a
                            href="mailto:sachin2sharma001@gmail.com"
                            className="text-sm"
                        >
                            sachin2sharma001@gmail.com
                        </a>
                    </div>
                </div>
                <form
                    className="flex flex-col gap-2 mt-20 p-10 mb-10 mx-auto justify-center items-center w-[100%] sm:w-[70%]"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        className="bg-blue-200 p-5 placeholder:text-gray-500 rounded-lg w-[90%] outline-none"
                        placeholder="You Name"
                        required="true"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        className="bg-blue-200 p-5 placeholder:text-gray-500 rounded-lg w-[90%] outline-none"
                        placeholder="Your Email"
                        required="true"
                    />
                    <textarea
                        type="textarea"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                        className="bg-blue-200 p-5 placeholder:text-gray-500 rounded-lg row w-[90%] outline-none"
                        placeholder="Leave A Message"
                        rows={10}
                        required="true"
                    />
                    <Button
                        type="submit"
                        className=" bg-blue-500 text-white hover:bg-blue-400 items-start"
                    >
                        Send Message
                    </Button>
                    {submitted && (
                        <div className="w-[70%] mx-auto shadow-lg fixed top-20 left-1/2 -translate-x-1/2">
                            <Alert severity="success">
                                <AlertTitle>Success</AlertTitle>
                                <strong>
                                    Form has been successfully submitted
                                </strong>
                            </Alert>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default AppWrapp(Footer, "FOOTER");
