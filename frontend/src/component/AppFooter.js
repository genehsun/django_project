import React, {Component} from 'react';
import Section from './Section';

class AppFooter extends Component {
	
	style = {
		footer: {
			marginTop: "0%", marginLeft: "0%",
			marginRight: "0%", marginBottom: "0%",
			textAlign: 'center',
			backgroundColor: '#212121',
		}, p: {
			margin: '0 auto',
			padding: 0,
			color: 'rgba(255, 255, 255, 0.54)',
			maxWidth: 335
		}
	};

	render() {
		return (
			<Section style={this.style.footer}>
				<p style={this.style.p}>Made by Wakim Sun &copy; 2018</p>
			</Section>
		);
	}
}
export default AppFooter;