import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import useSiteMetadata from '../components/hooks/metadata'
import useInstagram from '../components/hooks/use-instagram'
import usePosts from '../components/hooks/use-posts'
import PostPreview from '../components/widgets'
import Hero from '../components/hero'
import Adventure from '../components/adventure'
import { Flex, Box } from '@rebass/emotion'
import Img from 'gatsby-image'
import { BckContainer, Bck } from '../components/shared'

const Main = props => {
	const { title, description } = useSiteMetadata()
	const posts = usePosts()
	const photos = useInstagram()

	return (
		<Layout>
			<Helmet>
				<html lang='en' />
				<title>{title}</title>
				<meta name='description' content={description} />
			</Helmet>

			<div> what is going on &hearts;</div>
			<Flex alignItems='center'>
				<Hero />
				<Box mx='2' />
				<Adventure />
			</Flex>
			<div>
				<Link to='/about-me/'>link to about me &rarr;</Link>
			</div>
			{photos.map(photo => (
				<div key={photo.id}>
					<a href={`https://instagram.com/p/${photo.id}`}>One punch man Instagram</a>
					<BckContainer>
						<Bck fluid={photo.image} />
					</BckContainer>
				</div>
			))}
			{posts.map(post => (
				<div key={post.slug}>
					<BckContainer>
						<Img fluid={post.image} alt={post.name} />
					</BckContainer>
					<PostPreview post={post} />
				</div>
			))}
			<div />
		</Layout>
	)
}

export default Main
