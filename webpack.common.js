const path = require('path');
const stripConstEnumsTransformer = require('ts-transformer-strip-const-enums').default;

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        // use: 'ts-loader',
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {     
            getCustomTransformers: program => ({
                before: [
                    stripConstEnumsTransformer(program, { entrySourceFiles: ['./src/index.ts'] })
                ]
            }) 
        }
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'lib'),
    globalObject: 'this',
    library: {
        name: 'cashlink-sdk',
        type: 'umd',
    },
  },
};