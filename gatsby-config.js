module.exports = {
  siteMetadata: {
    title: `Stefan Anderson`,
    name: `Stefan Anderson`,
    siteUrl: `https://stefanmanderson.xyz`,
    description: `Stefan Anderson is a Finance graduate and is teaching about finance in this blog.`,
    hero: {
      heading: `Hi, my name is Stefan Anderson, let's learn together!`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/stefanmanderson`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/stefanmanderson`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/stefanmanderson/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stefan Anderson`,
        short_name: `Stefan`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
