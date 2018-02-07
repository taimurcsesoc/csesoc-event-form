import React from 'react'
import { Box, Email, Image, Item, Span, A } from 'react-html-email'
import logo from '../static/csesocwhiteblue.png'

const css = `
@media only screen and (max-device-width: 480px) {
  font-size: 20px !important;
}`.trim()

const sourceURL = 'https://raw.githubusercontent.com/chromakode/react-html-email/master/examples/kitchenSink.js'

export default class CustomEmail extends React.Component {
	
	render() {
		const {title, subject} = this.props
		return(
		  <Email title={title} headCSS={css}>
		    <Item>
		      <Span fontSize={15}>REQUEST: {subject}</Span>
		    </Item>
		    <Item>
		      <Box cellSpacing={20} width="100%" style={{ borderTop: '3px solid black' }}>
		        <Item>
		          <Image data-mc-bar="bar" data-mc-baz="baz" alt="react" src={logo} width={100} height={100} />
		          <A download={sourceURL} href={sourceURL}>Source code</A>
		        </Item>
		      </Box>
		    </Item>
		  </Email>
  	)
	}

} 
