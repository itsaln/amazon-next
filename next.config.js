/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		SERVER_URL: process.env.SERVER_URL
	}
}

module.exports = nextConfig
