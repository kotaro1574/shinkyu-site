/** @type {import('next-sitemap').IConfig} */
module.exports = {
  generateRobotsTxt: true,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || '',
}
