/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {},
            colors: {
                "bg-header": "rgba(30,41,59, 0.5)",
            },
            display: ["group-hover"],
            spacing: {
                pb: "2px",
            },
            width: {
                container: "75em",
            },
            maxWidth: {
                "1/2": "50%",
            },
        },
    },
    plugins: [],
};
