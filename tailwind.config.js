/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "light-blue": "#6BD0FF",
                "normal-blue": "#3FA0EF",
                "dark-blue": "#1A74E2",
                "background-light": "#262626",
            },
        },
    },
    plugins: [],
};