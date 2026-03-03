/** @type {import('next').NextConfig} */
export default {
    turbopack: {},
    webpack: (config, { isServer }) => {
      return config;
    },
  };
