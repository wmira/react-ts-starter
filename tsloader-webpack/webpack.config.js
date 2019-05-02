
module.exports = {
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    module: {
        rules: [
          {
            test: [/\.tsx?$/],            
            loader: 'ts-loader',
            options: {
              // this prevents ts-loader from compiling our tests files
              onlyCompileBundledFiles: true
            },
            exclude: /node_modules/
            
          },
          {
            test: /\.js$/,
            use: 'source-map-loader',
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
