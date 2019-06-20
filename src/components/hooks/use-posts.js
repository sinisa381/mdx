import { useStaticQuery, graphql } from 'gatsby'

const usePosts = () => {
	const data = useStaticQuery(graphql`
		query {
			allMdx {
				nodes {
					frontmatter {
						title
						author
						slug
						image {
							sharp: childImageSharp {
								fluid(maxHeight: 200, maxWidth: 200) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
					excerpt
				}
			}
		}
	`)
	return data.allMdx.nodes.map(post => ({
		title: post.frontmatter.title,
		author: post.frontmatter.author,
		slug: post.frontmatter.slug,
		excerpt: post.excerpt,
		image: post.frontmatter.image.sharp.fluid
	}))
}

export default usePosts
