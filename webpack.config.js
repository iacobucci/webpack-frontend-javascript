import path from "path";

const __dirname = path.resolve();

export default {
	entry: './src/index.js',
	mode: 'development',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist'),
	},
	resolve: {
		extensions: ['.js'],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 3000,
		hot: true,
	},
	target: ['web', 'es2020'],
};
