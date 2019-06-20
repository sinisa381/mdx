import { useStaticQuery, graphql } from 'gatsby'

const useInstagram = props => {
	const data = useStaticQuery(graphql`
		{
			instagram: allInstaNode {
				nodes {
					id
					username
					file: localFile {
						sharp: childImageSharp {
							fluid(maxHeight: 400, maxWidth: 400) {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
				}
			}
		}
	`)
	return data.instagram.nodes.map(photo => ({
		image: photo.file.sharp.fluid,
		id: photo.id,
		username: photo.username
	}))
}

export default useInstagram
