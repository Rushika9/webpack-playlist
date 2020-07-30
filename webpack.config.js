
const path = require('path');
module.exports = {

    entry: './src/script-1.js',


    output: {

      path: path.resolve(__dirname, 'dist'),
      filename:'bundle.js'
    },
    
    module:{
      rules: [
        {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    cacheDirectory: true
                }
            }
          },
        
        {
          test: /\.css$/,
          use: [
            {
            loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            }
          ]
          
        }
      
      
    ]
         
      
    }

};