module.exports = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
            config.resolve.fallback = {
                fs: false,
                path: false,
                os: false,
                module: false,
            }
        }

        return config;
    },
    images: {
        domains: ['localhost'],
    }
}

// module.exports = {
//     webpackDevMiddleware: config => {
//         config.watchOptions.poll = 300;
//         return config;
//     }
// };