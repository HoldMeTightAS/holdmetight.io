module.exports = {
	root: true,
	env: {
		browser: true,
		amd: true,
		node: true,
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
	rules: {
		'prettier/prettier': ['error', {}, { usePrettierrc: true }],
		'react/prop-types': 'off',
	},
};
