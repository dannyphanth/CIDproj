// tailwind.config.js
module.exports = {
    corePlugins: {
        // preflight: false,
    },
    darkMode: 'class',
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                CIDColor: '#485b99',
            }
        },
    },
    plugins: [],
}