//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  experimental: {
    forceSwcTransforms: true,
  },
  transpilePackages: [
    'react-native',
    `react-native-web`,
    `react-native-vector-icons`,
    `react-native-safe-area-context`,
    `react-native-svg`,
  ],
  webpack: config => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': require.resolve(`react-native-web`),
    }
    config.resolve.extensions = [
      `.web.js`,
      `.web.jsx`,
      `.web.ts`,
      `.web.tsx`,
      ...config.resolve.extensions,
    ]
    config.resolve.fallback = { fs: false }
    return config
  }

};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
