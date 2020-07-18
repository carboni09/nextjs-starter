// next.config.js
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images');
const withFonts = require('next-fonts')

module.exports = withPlugins(
    [
        withImages,
        withFonts
    ]
)

//withImages();
