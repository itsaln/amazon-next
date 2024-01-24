/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true, // swcMinify: true,
	// poweredByHeader: false,
	// optimizeFonts: false,
	env: {
		SERVER_URL: process.env.SERVER_URL,
		APP_URL: process.env.APP_URL
	},
	images: {
		domains: ['loremflickr.com', 'www.supershield.pl', 'avatars.githubusercontent.com']
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:5200/uploads/:path*'
			}
		]
	}
}

module.exports = nextConfig
