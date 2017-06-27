module.exports = {
    entry:{
        app: ['./src/index.js']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: __dirname + '/src/',
            loader: 'babel-loader'
        }]
    },
    output:{
        path: __dirname + '/dist', 
        filename:'bundle.js'
    }
}