module.exports = {
	'src/**/*.(ts{,x}|js{,x})': [
		'prettier --write',
		'eslint --fix',
		'git add -A'
	],
}
