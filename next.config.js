const { i18n } = require("./next-i18next.config")

module.exports = {
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'icalmyou.com',
        port: '',
      },
    ],
  },
}

// pathname: '/cms/**',
// https://icalmyou.com/cms/uploads/large_meeting_online_therap_b4b6128680.jpg
// images: {
//   domains: ["amazonaws.com"],
// },