/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/personal-portfolio.tsx', 
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				include: path.resolve(__dirname, 'src'),
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.scss$/i,
				include: path.resolve(__dirname, 'src'),
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/images/[name][ext]',
				  },
			}
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		port: 3000,
		historyApiFallback: true,
		open: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html', // Specify the template file
		}),
	],
};
