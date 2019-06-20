import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-mdx'

const PostTemplate = ({ pageContext, data }) => {
	const { title, author } = data.mdx.frontmatter
	const { excerpt, code: { body } } = data.mdx
	return (
		<Layout>
			<h1>{title}</h1>
			<p>posted by {author}</p>
			<p>{excerpt}</p>
			<MDXRenderer>{body}</MDXRenderer>
			<pre>{JSON.stringify(pageContext, null, 2)}</pre>
			<Link to='/'>&larr;back to posts</Link>
		</Layout>
	)
}

export default PostTemplate

export const Query = graphql`
	query($slug: String) {
		mdx(frontmatter: { slug: { eq: $slug } }) {
			frontmatter {
				title
				author
			}
			code {
				body
			}
			excerpt
		}
	}
`
