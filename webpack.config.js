const path=require('path');
module.exports={
    entry:"./script.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"./dist")
    },
    mode:"none",
    module:{
        rules:[
            {
            test:/\.(png|jpg)$/,
            use:['file-loader']
        },
        {
           test:/\.css$/,
           use:['style-loader','css-loader']
        },
        {
            test:/\.scss$/,
            use:['style-loader',
            'css-loader',
            {
                loader:"sass-loader",
                options:{
                    implementation:require("SASS")
                }
            }
        ]
         }
    ]
       
    }


}