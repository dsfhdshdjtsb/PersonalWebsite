/** @type {import('next').NextConfig} */
export default {


    webpack: (config, { isServer }) => {
      // Extend the Webpack configuration to handle PDFs
      config.module.rules.push({
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/pdf/', // Store the PDFs in the static folder
              publicPath: '/_next/static/pdf/', // Path for accessing the PDFs in production
            },
          },
        ],
      });
  
      return config;
    },

    
  };
