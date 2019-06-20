import React from 'react'
import { Box, Text } from '@rebass/emotion'
import { colors } from '../globals'
import { Link as GatsbyLink } from 'gatsby'
import styled from '@emotion/styled'

const Header = ({ visible }) => {
	return (
		<BoxHeader width={1} visible={visible}>
			<Text>Logo</Text>
			<Box>
				<Link activeClassName='active' to='/'>
					Home
				</Link>
				<Link activeClassName='active' to='/contact'>
					Contact
				</Link>
			</Box>
		</BoxHeader>
	)
}

export default Header

const BoxHeader = styled(Box)`
position:fixed;
z-index:1000;
top:0;
left:0;
background-color: ${colors['dark-blue']};
color: ${props => (props.visible ? colors.blacks[8] : colors.whites[8])};
padding: .5rem calc((100vw - 650px) / 2) ;
display:flex;
justify-content:space-between;

`
const Link = styled(GatsbyLink)`
color:${colors.whites[8]};
text-decoration:none;
margin-right:1.5rem;
&:last-of-type {
  margin-right:0;
}
&.active {
  color: ${colors.whites[10]};
  border-bottom:1px solid ${colors.whites[10]};
}
`
