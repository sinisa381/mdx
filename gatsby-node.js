// const path = require(`path`)
// // const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = ({ graphql, actions }) => {
// 	const { createPage } = actions

// 	return new Promise((resolve, reject) => {
// 		const blogPostTemplate = path.resolve(`src/templates/post.js`)
// 		// Query for markdown nodes to use in creating pages.
// 		resolve(
// 			graphql(
// 				`
//           {
//             allMdx{
//               nodes{
//                 frontmatter{
//                   slug
//                 }
//               }
//             }
//           }
//         `
// 			).then(result => {
// 				if (result.errors) {
// 					reject(result.errors)
// 				}

// 				result.data.allMdx.nodes.forEach(post => {
// 					const path = `${post.frontmatter.slug}`
// 					createPage({
// 						path,
// 						component: blogPostTemplate,
// 						// In your blog post template's graphql query, you can use path
// 						// as a GraphQL variable to query for data from the markdown file.
// 						context: {
// 							slug: `/${post.frontmatter.slug}/`
// 						}
// 					})
// 				})
// 				return
// 			})
// 		)
// 	})
// }
//
exports.createPages = async ({ actions, graphql, reporter }) => {
	const result = await graphql(`
{
  allMdx{
    nodes{
      frontmatter{
        slug
      }
    }
  }
}
  `)
	if (result.errors) {
		reporter.panic('failed to create posts ', result.errors)
	}
	const posts = result.data.allMdx.nodes

	posts.forEach(post => {
		actions.createPage({
			path: post.frontmatter.slug,
			component: require.resolve('./src/templates/post.js'),
			context: {
				slug: `${post.frontmatter.slug}`
			}
		})
	})
}
