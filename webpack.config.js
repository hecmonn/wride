var path=require('path');
module.exports={
    target:'web',
    context:__dirname,
    entry:path.join(__dirname,'/src/index.js'),
    output:{
        path:path.join(__dirname,'/public/static/js/'),
        filename:'bundle.js'
    },
    module:{
        loaders:[{
            test: /\.js?$/,
            exclude: path.join(__dirname,'node_modules'),
            loader:'babel-loader'
        }]
    },
    externals:['ws'],
}
