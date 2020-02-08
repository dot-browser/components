import path from 'path';
import WriteFilePlugin from 'write-file-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { EnvironmentPlugin } from 'webpack';

export const aliases = {
    '~/renderer': path.resolve(__dirname, 'src', 'renderer'),
    '~/main': path.resolve(__dirname, 'src', 'main'),
    '~/shared': path.resolve(__dirname, 'src', 'shared'),
}

const config = {
    mode: process.env.ENV === 'dev' ? 'development' : 'production',
    target: 'web',
    entry: path.resolve(__dirname, 'src', 'renderer', 'settings', 'index.tsx'),
    plugins: [
        new WriteFilePlugin(),
        new HtmlWebpackPlugin({  
            template: path.resolve(__dirname, 'static', 'pages', 'app.html'),
            inject: true,
            filename: `index.html`
        }),
        new EnvironmentPlugin({
            'ENV': process.env.ENV,
            'dev': process.env.ENV === "dev"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: 4446,
        inline: false,
        disableHostCheck: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        publicPath: '',
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    devtool: 'source-map',
    watchOptions: {
      ignored: [
        path.resolve(__dirname, 'node_modules'),
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
      alias: aliases,
      modules: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, './'),
      ]
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'awesome-typescript-loader',
            options: {
              transpileOnly: true,
              experimentalWatchApi: true,
              useCache: true
            },
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
            },
          },
          {
            test: /\.(ttf|eot|woff|woff2)$/,
            use: {
              loader: 'url-loader',
              options: {
                name: 'fonts/[name].[ext]',
              },
            },
          },
        ],
    },
};
  
export default config;