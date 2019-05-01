
const path = require('path')
const babelOptions = require('./babel.config')

module.exports = {
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    module: {
      rules: [
        {
          test: [/\.tsx?$/],
          use: {
              loader: 'babel-loader',
              options: babelOptions,
          },
          exclude: /node_modules/
          
        },
        {
          test: /\.js$/,
          use: ["source-map-loader"],
          enforce: "pre",
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      modules: [     
        path.resolve(__dirname, 'src'),        
        path.resolve(__dirname, '..', 'lib'),
        'node_modules',
      ]      
    },
    devtool: 'source-map',

    devServer: {
        inline: true
    }
};
