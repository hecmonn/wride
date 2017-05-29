var path=require('path');
module.exports={
    context:__dirname,
    entry:path.join(__dirname,'/src/index.js'),
    output:{
        path:path.join(__dirname,'/public/static/js/'),
        filename:'bundle.js'
    },
    module:{
        loaders:[{
            test: /\.js?$/,
            loader:'babel-loader'
        }]
    }
}
