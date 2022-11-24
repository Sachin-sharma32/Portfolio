/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        SANITY_TOKEN:
            "skcRE9Uca5JhbjxO4Jcn28y4fBRxdtf9mjw01cnT2grSLGJhbtepnihJrIOhlW7K5mqgERFYqC7EV0ASj2ni6WUOoEldf7RKefYawTnEaWVBYo5xkU36l4Hbmh22C4cYOVx3hcA4HCnX51gYNvptBD0lX31re7l8y94Oeb3b9VSzvb4dRldi",
        SANITY_PROJECT_ID: "5j51e3db",
        SANITY_DATASET: "production",
    },
};

module.exports = nextConfig;
