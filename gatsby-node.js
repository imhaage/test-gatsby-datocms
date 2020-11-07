const marked = require("marked")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (
    node.internal.owner === "gatsby-source-datocms" &&
    node.internal.content
  ) {
    createNodeField({
      node,
      name: `html`,
      value: marked(node.internal.content),
    })
  }
}
