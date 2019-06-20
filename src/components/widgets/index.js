import React, { Fragment } from 'react'
import { Box, Text, Card, Heading } from '@rebass/emotion'
import { Link as GatsbyLink } from 'gatsby'
import styled from '@emotion/styled'
import { colors } from '../../globals'

const PostPreview = ({ post }) => {
	const { title, excerpt, slug, author } = post
	return (
		<Fragment>
			<Card bg={colors.black} py={[ 2, 3 ]} borderRadius={2} my={[ 2, 3 ]} mx='2' px='3'>
				<CenterText>
					<Box>
						<Heading my={[ 1, 2 ]} color={colors.whites[9]}>
							{title}
						</Heading>
						<Text my={[ 1, 2 ]} color={colors.whites[9]}>
							{excerpt}
						</Text>
						<Link my={[ 1, 2 ]} to={`/${slug}/`}>
							{slug}
						</Link>
						<Text my={[ 1, 2 ]} color={colors.whites[7]}>
							Written by {author}
						</Text>
					</Box>
				</CenterText>
			</Card>
		</Fragment>
	)
}

export default PostPreview

const Link = styled(GatsbyLink)`
text-decoration:none;
color:blue;
`
const CenterText = styled.div`text-align: center;`
