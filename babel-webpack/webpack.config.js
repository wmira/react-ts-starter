
module.exports = {
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    module: {
        rules: [
          {
            test: [/\.jsx?$/, /\.tsx?$/],
            use: {
                loader: 'babel-loader',
                options: {
                    "presets": [
                        "@babel/env",     
                        "@babel/preset-react",
                        "@babel/preset-typescript"
                    ],
                    "plugins": [
                        "@babel/proposal-class-properties",
                        "@babel/proposal-object-rest-spread"
                    ]
                }
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

    devtool: 'source-map',

    devServer: {
        inline: true
    }
};
