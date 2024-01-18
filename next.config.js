const { i18n } = require("./next-i18next.config")

module.exports = {
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '184.72.123.46',
        port: '',
      },
    ],
  },
}

// pathname: '/cms/**',
// http://184.72.123.46/cms/uploads/large_meeting_online_therap_b4b6128680.jpg
// images: {
//   domains: ["amazonaws.com"],
// },