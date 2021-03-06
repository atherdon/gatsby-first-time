import React from 'react'
import Helmet from 'react-helmet'

const Template = ({ data }) => {
	const post = data.markdownRemark;
	return (
		<div className="blog-post-container">
			<Helmet title={'WEBSITE TITLE - ${post.frontmatter.title}'}/>
			<div className="blog-post">
				<h1>
				{post.frontmatter.title}
				</h1>
				<div 
					className="blog-post-content"
					dangerouslySetInnerHTML={{ __html: post.html }} 
				/>

			</div>
		</div>
	);
}

export default Template;

export const pageQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }){
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
			}
		}
	}
`
;

