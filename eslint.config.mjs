import config from '@iobroker/eslint-config';

export default [
    ...config,
    {
        languageOptions: {
            parserOptions: {
                projectService: {
                    allowDefaultProject: ['*.mjs'],
                },
                tsconfigRootDir: import.meta.dirname,
                project: './tsconfig.json',
            },
        },
    },
    {
        ignores: [
            'src-admin/**/*',
            'admin/**/*',
            'node_modules/**/*',
            'test/**/*',
            'build/**/*',
            'tasks.js',
            'tmp/**/*',
            '.**/*',
        ],
    },
    {
        // disable temporary the rule 'jsdoc/require-param' and enable 'jsdoc/require-jsdoc'
        rules: {
            'jsdoc/require-jsdoc': 'off',
            'jsdoc/require-param': 'off',
            'jsdoc/require-param-description': 'off',
            'jsdoc/no-defaults': 'off',
            'jsdoc/no-types': 'off',

            '@typescript-eslint/no-require-imports': 'off',
        },
    },
];
