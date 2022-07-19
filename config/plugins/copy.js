const fs = require('fs')
const copyPlugins = function (options) {
    this.options = options
}

copyPlugins.prototype.apply = function (compiler) {
    const options = this.options
    compiler.hooks.done.tap('WebpackCopyPlugin', function() {
        fs.copyFileSync(options.from, options.to)
    });
}

module.exports = copyPlugins