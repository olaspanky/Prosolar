const config = {
    siteUrl: 'https://prosolarng.com/',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', disallow: '/private/' },
        { userAgent: '*', allow: '/' },
      ],
    },
  };
  
  module.exports = config;