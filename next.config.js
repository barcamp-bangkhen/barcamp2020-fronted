module.exports = {
    async redirects() {
		return [
			{
				source: '/home',
				destination: '/',
				permanent: true,
			},
		]
	},
    // Target must be serverless
    target: "serverless",
  };