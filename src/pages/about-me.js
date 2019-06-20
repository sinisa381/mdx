import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Avatar from '../components/hero'

const AboutMe = props => {
	return (
		<Layout>
			<Avatar />
			<h1>something about me</h1>
			<Link to='/'>&larr; back to home</Link>
		</Layout>
	)
}

export default AboutMe
