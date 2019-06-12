module.exports = {
    module: {
        rules: [
            {
                test: /\.(jpg|png|ttf|woff2?)$/,
                use: [{
                    loader: 'file-loader'
                }],
            },
            {
                test: /\.svg$/,
                use: [{ loader: 'babel-loader' }, { loader: 'react-svg-loader' }],
              },
        ],
    },
}