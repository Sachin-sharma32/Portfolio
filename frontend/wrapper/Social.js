import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "@mui/material";

import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

const actions = [
    {
        icon: <InstagramIcon />,
        name: "Instagram",
        url: "https://www.instagram.com/sachinn._.sharmaa/",
    },
    {
        icon: <GitHubIcon />,
        name: "GitHub",
        url: "https://github.com/Sachin-sharma32",
    },
    {
        icon: <TwitterIcon />,
        name: "Twitter",
        url: "https://twitter.com/Sachins27374929",
    },
    {
        icon: <LinkedInIcon />,
        name: "Linkdin",
        url: "https://www.linkedin.com/in/sachin-sharma-38418a210/",
    },
];

export default function Social() {
    return (
        <Box
            sx={{
                height: 320,
                transform: "translateZ(0px)",
                flexGrow: 1,
                position: "absolute",
                bottom: "0px",
                left: "80px",
                zIndex: "10",
            }}
        >
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{
                    position: "absolute",
                    bottom: 16,
                    right: 16,
                    "& .MuiFab-primary": {
                        backgroundColor: "#2563eb",
                        color: "white",
                    },
                }}
                icon={<SpeedDialIcon />}
                FabProps={{
                    sx: {
                        "&:hover": {
                            bgcolor: "#dbeafe",
                            color: "black",
                        },
                    },
                }}
            >
                {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            href={action.url}
                            sx={{
                                width: 50,
                                height: 50,
                                backgroundColor: "lightblue",
                            }}
                            FabProps={{
                                sx: {
                                    "&:hover": {
                                        bgcolor: "#64a2ee",
                                        color: "black",
                                    },
                                },
                            }}
                        />
                ))}
            </SpeedDial>
        </Box>
    );
}
