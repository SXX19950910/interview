const path = require('path')
const addPath = dir => path.join(__dirname,dir)
const WebpackCopyPlugin = require('./config/plugins/copy')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    webpack:{
        alias:{
            '@': addPath('src')
        },
        configure:(webpackConfig,{env, paths}) => {
            if (isProd) {
                paths.appBuild = 'build';
                webpackConfig.plugins.push(new WebpackCopyPlugin({
                    from: path.resolve(__dirname, './build/index.html'),
                    to: path.resolve(__dirname, './index.html')
                }))
                webpackConfig.output = {
                    ...webpackConfig.output,
                    path: path.resolve(__dirname,'build'),
                    publicPath:'/interview'
                }
            }
            return webpackConfig
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