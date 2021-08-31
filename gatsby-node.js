const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query Posts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: "/posts/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/post-details.tsx"),
      context: { slug: node.frontmatter.slug },
    })
  })
}
