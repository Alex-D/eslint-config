/* eslint-env node, browser:false */

module.exports = {
	env: {
		es6: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:n/recommended',
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
		// Disallow crappy things
		'no-console': [
			'error',
			{
				allow: [
					'info',
					'warn',
					'error',
				],
			},
		],
		'@typescript-eslint/ban-ts-comment': [
			'error',
			{
				'ts-ignore': 'allow-with-description',
			},
		],

		// Variables
		'one-var': [
			'error',
			'never',
		],
		'no-var': [
			'error',
		],
		'prefer-const': [
			'error',
			{
				destructuring: 'all',
			},
		],
		'@typescript-eslint/no-unused-vars': [
			'error',
		],

		// Quotes
		'quotes': [
			'error',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: false,
			},
		],

		// Punctuation
		'semi': [
			'error',
			'never',
		],
		'curly': [
			'error',
			'multi-line',
		],
		'dot-location': [
			'error',
			'property',
		],
		'dot-notation': [
			'error',
			{
				allowKeywords: true,
			},
		],
		'@typescript-eslint/comma-dangle': [
			'error',
			'always-multiline',
		],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'none',
				},
			},
		],

		// Formatting & Spacing
		'array-bracket-newline': [
			'error',
			'consistent',
		],
		'array-element-newline': [
			'error',
			'consistent',
		],
		'comma-spacing': [
			'error',
			{
				before: false,
				after: true,
			},
		],
		'func-call-spacing': [
			'error',
			'never',
		],
		'generator-star-spacing': [
			'error',
			{
				before: false,
				after: true,
			},
		],
		'indent': [
			'error',
			'tab',
			{
				SwitchCase: 1,
				VariableDeclarator: 1,
				outerIIFEBody: 1,
				MemberExpression: 1,
				FunctionDeclaration: {
					parameters: 1,
					body: 1,
				},
				FunctionExpression: {
					parameters: 1,
					body: 1,
				},
				CallExpression: {
					arguments: 1,
				},
				ArrayExpression: 1,
				ObjectExpression: 1,
				ImportDeclaration: 1,
				flatTernaryExpressions: false,
				ignoreComments: false,
				ignoredNodes: [
					'TemplateLiteral *',
				],
				offsetTernaryExpressions: true,
			},
		],
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true,
			},
		],
		'keyword-spacing': [
			'error',
			{
				before: true,
				after: true,
			},
		],
		'linebreak-style': [
			'error',
			'unix',
		],
		'lines-around-comment': [
			'error',
		],
		'multiline-ternary': [
			'error',
			'always-multiline',
		],
		'new-parens': [
			'error',
		],
		'object-curly-newline': [
			'error',
			{
				multiline: true,
				consistent: true,
			},
		],
		'object-curly-spacing': [
			'error',
			'always',
		],
		'object-property-newline': [
			'error',
			{
				allowMultiplePropertiesPerLine: false,
			},
		],
		'operator-linebreak': [
			'error',
			'after',
			{
				overrides: {
					'?': 'before',
					':': 'before',
					'|>': 'before',
				},
			},
		],
		'padded-blocks': [
			'error',
			{
				blocks: 'never',
				switches: 'never',
				classes: 'never',
			},
		],
		'prefer-promise-reject-errors': [
			'error',
		],
		'prefer-regex-literals': [
			'error',
			{
				disallowRedundantWrapping: true,
			},
		],
		'quote-props': [
			'error',
			'consistent-as-needed',
		],
		'semi-spacing': [
			'error',
			{
				before: false,
				after: true,
			},
		],
		'space-before-blocks': [
			'error',
			'always',
		],
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		'space-in-parens': [
			'error',
			'never',
		],
		'space-infix-ops': [
			'error',
		],
		'space-unary-ops': [
			'error',
			{
				words: true,
				nonwords: false,
			},
		],
		'spaced-comment': [
			'error',
			'always',
			{
				line: {
					markers: [
						'*package',
						'!',
						'/',
						',',
						'=',
					],
				},
				block: {
					balanced: true,
					markers: [
						'*package',
						'!',
						',',
						':',
						'::',
						'flow-include',
					],
					exceptions: [
						'*',
					],
				},
			},
		],
		'symbol-description': [
			'error',
		],
		'template-curly-spacing': [
			'error',
			'never',
		],
		'template-tag-spacing': [
			'error',
			'never',
		],
		'unicode-bom': [
			'error',
			'never',
		],
		'use-isnan': [
			'error',
			{
				enforceForSwitchCase: true,
				enforceForIndexOf: true,
			},
		],
		'valid-typeof': [
			'error',
			{ requireStringLiterals: true },
		],
		'wrap-iife': [
			'error',
			'any',
			{ functionPrototypeMethods: true },
		],
		'yield-star-spacing': [
			'error',
			'after',
		],

		// Imports
		'simple-import-sort/imports': [
			'error',
		],
		'simple-import-sort/exports': [
			'error',
		],
		'sort-imports': [
			'off',
		],
		'import/order': [
			'off',
		],
		'import/first': [
			'error',
		],
		'import/newline-after-import': [
			'error',
		],
		'import/no-duplicates': [
			'error',
		],

		// Static analysis
		'array-callback-return': [
			'error',
			{
				allowImplicit: false,
				checkForEach: false,
			},
		],
		'default-case-last': [
			'error',
		],
		'eqeqeq': [
			'error',
		],
		'no-array-constructor': [
			'error',
		],
		'no-async-promise-executor': [
			'error',
		],
		'no-caller': [
			'error',
		],
		'no-class-assign': [
			'error',
		],
		'no-compare-neg-zero': [
			'error',
		],
		'no-cond-assign': [
			'error',
		],
		'no-const-assign': [
			'error',
		],
		'no-useless-backreference': [
			'error',
		],
		'no-empty': [
			'error',
			{
				allowEmptyCatch: true,
			},
		],
		'no-eval': [
			'error',
		],
		'no-ex-assign': [
			'error',
		],
		'no-extend-native': [
			'error',
		],
		'no-extra-bind': [
			'error',
		],
		'no-extra-boolean-cast': [
			'error',
		],
		'no-extra-parens': [
			'error',
			'functions',
		],
		'no-floating-decimal': [
			'error',
		],
		'no-implied-eval': [
			'error',
		],
		'no-invalid-regexp': [
			'error',
		],
		'no-irregular-whitespace': [
			'error',
		],
		'no-iterator': [
			'error',
		],
		'no-labels': [
			'error',
			{
				allowLoop: false,
				allowSwitch: false,
			},
		],
		'no-lone-blocks': [
			'error',
		],
		'no-misleading-character-class': [
			'error',
		],
		'no-prototype-builtins': [
			'error',
		],
		'no-useless-catch': [
			'error',
		],
		'no-mixed-operators': [
			'error',
			{
				groups: [
					[
						'==',
						'!=',
						'===',
						'!==',
						'>',
						'>=',
						'<',
						'<=',
					],
					[
						'&&',
						'||',
					],
					[
						'in',
						'instanceof',
					],
				],
				allowSamePrecedence: true,
			},
		],
		'no-multi-spaces': [
			'error',
		],
		'no-multi-str': [
			'error',
		],
		'no-multiple-empty-lines': [
			'error',
			{
				max: 2,
				maxEOF: 0,
			},
		],
		'no-new': [
			'error',
		],
		'no-new-func': [
			'error',
		],
		'no-new-object': [
			'error',
		],
		'no-new-wrappers': [
			'error',
		],
		'no-octal-escape': [
			'error',
		],
		'no-proto': [
			'error',
		],
		'no-return-assign': [
			'error',
			'except-parens',
		],
		'no-self-compare': [
			'error',
		],
		'no-sequences': [
			'error',
		],
		'no-template-curly-in-string': [
			'error',
		],
		'no-throw-literal': [
			'error',
		],
		'no-trailing-spaces': [
			'error',
		],
		'no-undef-init': [
			'error',
		],
		'no-unmodified-loop-condition': [
			'error',
		],
		'no-unneeded-ternary': [
			'error',
			{
				defaultAssignment: false,
			},
		],
		'no-unreachable-loop': [
			'error',
		],
		'no-unused-expressions': [
			'error',
			{
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true,
			},
		],
		'no-use-before-define': [
			'error',
			{
				functions: false,
				classes: false,
				variables: false,
			},
		],
		'no-useless-call': [
			'error',
		],
		'no-useless-computed-key': [
			'error',
		],
		'no-useless-constructor': [
			'error',
		],
		'no-useless-rename': [
			'error',
		],
		'no-useless-return': [
			'error',
		],
		'no-void': [
			'error',
		],
		'no-whitespace-before-property': [
			'error',
		],
		'no-with': [
			'error',
		],
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
				'import/order': [
					'error',
					{
						'newlines-between': 'always',
					},
				],
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
}
