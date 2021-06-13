/* eslint-env node, browser:false */

module.exports = {
	env: {
		es6: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	plugins: [
		'import',
		'simple-import-sort',
		'@typescript-eslint',
	],
	rules: {
		'no-console': [
			'error',
			{
				'allow': [
					'info',
					'warn',
					'error',
				],
			},
		],
		'semi': [
			'error',
			'never',
		],
		'one-var': [
			'error',
			'never',
		],
		'quotes': [
			'error',
			'single',
			{
				'allowTemplateLiterals': true,
			},
		],
		'@typescript-eslint/no-unused-vars': [
			'error',
		],
		'@typescript-eslint/comma-dangle': [
			'error',
			'always-multiline',
		],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				'multiline': {
					'delimiter': 'none',
				},
			},
		],
		'@typescript-eslint/ban-ts-comment': [
			'error',
			{
				'ts-ignore': 'allow-with-description',
			},
		],
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'sort-imports': 'off',
		'import/order': 'off',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
	},
	overrides: [
		{
			files: '**/*.js',
			extends: [
				'plugin:import/errors',
				'plugin:import/warnings',
			],
			rules: {
				'simple-import-sort/sort': 'off',
				'import/order': ['error', {'newlines-between': 'always'}],
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
}
