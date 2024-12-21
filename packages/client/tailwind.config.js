/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ], theme: {
        container: {
            DEFAULT: "2rem",
        },
        extend: {

            colors: {
                'text': '#e1e0ec',
                'background': '#090813',
                'primary': '#9388e0',
                'secondary': '#23138d',
                'accent': '#4b31f9',
            },
        },
        fontFamily: {
            "serif": ['"Domine"', 'serif'],
            'mono': ['"Jetbrains Mono"', 'monospace'],
        },
    },
    plugins: [],
}

