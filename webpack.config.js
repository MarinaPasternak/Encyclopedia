module.exports ={
   mode: "development",

   module: {
       rules: [
           {
               test: /\.(png|jpg|jpeg)$/,
               use: [{ 
                   loader: 'file-loader',
                   options: {
                      outputPath: 'images',
                   }
                }]
           },
           {
                test: /\.(css)$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ]
            },
            
       ]
   }
};
