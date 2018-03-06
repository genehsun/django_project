import React, {Component} from 'react';
import "./AppFooter.css";

class AppFooter extends Component {

	render() {
		console.warn("AppFooter render");

		return (
			<div className="footer">
				<p className="copy-right">Made by Wakim Sun &copy; 2018</p>
			</div>
		);
	};
}
export default AppFooter;