// vue.config.js
module.exports = {
    outputDir: '../app/wwwroot',
    devServer: {
        proxy: 'https://localhost:5001'
    },
    productionSourceMap: false
};