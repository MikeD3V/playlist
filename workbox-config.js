module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,js,mp3,png,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};