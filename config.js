const config = {
    development: {
        name: 'DDS',
        description: 'Desenvolvimento Distribuído de Software',
        twitterHandle: '@welington',
        baseUrl: 'http://localhost:4965',
        sourcesExt: 'markdown',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 8,
        plugins: [
            {
                name: 'search',
                options: {}
            }
        ],
        postBuild: [
            {
                name: 'zip',
                options: {}
            }
        ]
    },
    production: {
        name: 'DDS',
        description: 'Desenvolvimento Distribuído de Software',
        twitterHandle: '@welington',
        baseUrl: 'https://wemomax.github.io',
        sourcesExt: 'markdown',
        sourceDir: 'source',
        buildDir: 'docs',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 8,
        plugins: [
            {
                name: 'search',
                options: {}
            },
            {
                name: 'robots',
                options: {}
            }
        ]
    }
};

module.exports = config;
