module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&redirect-url=https%3A%2F%2Fmy-headless-application.com&production-deploy-hook=MyHeadlessProject",
      apiToken: "PkSxV7taWQJqBnMfCk9qUUGR",
      appFilter: "appstrapi",
      teamFilter: "strapi",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
