module.exports = {
    plugins:{
        'autoprefixer': {
            browsers: 'last 20 versions',
        },
        "@moohng/postcss-px2vw":{
            rootValue: 75,
            unitPrecision: 5,
            propList: ['*'],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 5
        }
    }

}
