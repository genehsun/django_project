import React, {Component} from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

class AppFooter extends Component {

	render() {
		return (
			<div className="footer">
                <p className="link-container">
                    <Link className="a" to="/about">关于本站</Link>
                    {' | '}
                    <Link className="a" to="https://github.com/genehsun/django_project" target="_blank">GitHub</Link>
                    {' | '}
                    <Link className="a" to="https://github.com/genehsun/django_project/issues" target="_blank">反馈问题</Link>
                    {' | '}Made by Wakim Sun &copy; 2018
                </p>
			</div>
		);
	};
}
export default AppFooter;