import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { BckContainer, Bck } from './shared'

const Adventure = props => {
	const data = useStaticQuery(graphql`
		query {
			image: file(relativePath: { eq: "adventure-clouds.jpg" }) {
				sharp: childImageSharp {
					fluid(maxWidth: 500, maxHeight: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)
	return (
		<BckContainer>
			<Bck fluid={data.image.sharp.fluid} />
		</BckContainer>
	)
}

export default Adventure
