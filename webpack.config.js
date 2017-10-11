var config = {
    entry: './main.js',
    output: {
        path: '/',
        filename: 'index.js',
    },
    watch: true,
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    devtool: 'source-map'
};

module.exports = config;
