module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby Blog",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://strapi-gatsby-psgql.herokuapp.com/`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`article`]
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
      nodeType: 'cover', // Created Node type name
      imagePath: 'imgUrl' // The image url name in test node type
      }
  }
  ],
};
