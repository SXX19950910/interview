const path = require('path')
const addPath = dir => path.join(__dirname,dir)
const WebpackCopyPlugin = require('./config/plugins/copy')


module.exports = {
    publicUrl: 'build',
    webpack:{
        alias:{
            '@': addPath('src')
        },
        configure:(webpackConfig,{env, paths}) => {
            paths.appBuild = 'build';
            webpackConfig.plugins.push(new WebpackCopyPlugin({
                from: path.resolve(__dirname, './build/index.html'),
                to: path.resolve(__dirname, './index.html')
            }))
            webpackConfig.output = {
                ...webpackConfig.output,
                path: path.resolve(__dirname,'build'),
                publicPath:'build'
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