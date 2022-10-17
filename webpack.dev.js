const { resolve } = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: resolve(__dirname, 'dist'),
        clean: true
    },
    target: ['node', 'es5'],
    mode: 'production',

    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                "useBuiltIns": "usage",
                                "corejs": 3
                            }]
                        ],
                    }
                }
            }

        ]
    }
}