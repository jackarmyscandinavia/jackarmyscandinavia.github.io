/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
  // your configuration values.
  convertFormat: [
    ['png', 'webp'],
    ['jpeg', 'webp'],
    ['jpg', 'webp'],
    ['avif', 'webp'],
  ],
};

module.exports = config;
