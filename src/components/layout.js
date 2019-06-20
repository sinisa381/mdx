import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import styled from '@emotion/styled'
import { theme } from '../globals'
const Layout = props => {
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<Global
					styles={css`
						* {
							margin: 0;
							box-sizing: border-box;
						}
						html,
						body {
							margin: 0;
							background-color: ${theme.colors.blue};
							color: ${theme.colors.whites[9]};
						}
						* + * {
							margin-top: 1rem;
						}
					`}
				/>
				<Header />
				<Main>{props.children}</Main>
				<Footer />
			</ThemeProvider>
		</React.Fragment>
	)
}

export default Layout
const Main = styled.main`
	color: #000;
	max-width: 90vw;
	width: 650px;
	margin: 4rem auto 4rem;
`
