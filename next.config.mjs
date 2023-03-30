import withExportImages from 'next-export-optimize-images';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withExportImages({
  images: {
    deviceSizes: [640, 960, 1080, 1920],
    imageSizes: [64, 128, 256, 384],
  },
});

export default nextConfig;
