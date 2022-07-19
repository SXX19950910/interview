const path = require('path')
const addPath = dir => path.join(__dirname,dir)
module.exports = {
    webpack:{
        alias:{
            '@': addPath('src')
        }
    },
    style: {
        postcssOptions: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
}