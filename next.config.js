/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	webpack: (config) => {
		config.module.rules.push({
			test: /\.(glsl|frag|vert)$/,
			type: "asset/source",
		});
		return config;
	},
};
const withTM = require("next-transpile-modules")(["three"]);

module.exports = nextConfig;
