const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    assetPrefix: isProd ? 'https://torijacarlos.com' : '',
    devIndicators: {
        autoPrerender: false,
    }
}