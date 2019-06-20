/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'Mdx emotion',
		description: 'a site built with Gatsby'
	},
	plugins: [
		'gatsby-plugin-emotion',
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		// now images will work in markdown

		{
			resolve: 'gatsby-mdx',
			options: {
				defaultLayouts: {
					default: require.resolve('./src/components/layout.js')
				},
				gatsbyRemarkPlugins: [
					{
						resolve: 'gatsby-remark-images'
					}
				]
			}
		},
		//this guy looks for posts and resolves mdx
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'posts',
				path: `posts`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `images`
			}
		},
		{
			resolve: 'gatsby-source-instagram',
			options: {
				username: 'one.punch.man'
			}
		},
		{
			resolve: 'gatsby-plugin-webpack-bundle-analyzer',
			options: {
				production: true,
				disable: !process.env.ANALYZE_BUNDLE_SIZE,
				generateStatsFile: true,
				analyzerMode: 'static'
			}
		}
	]
}
