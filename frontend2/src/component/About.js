import React, {Component} from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import PropTypes from 'prop-types';
import "./Detail.css";
import { formatYMD, changePageTitle } from '../action';

class About extends Component {
	render() {
        changePageTitle(this.props.content.title);

		return (
			<div>
                <Card>
                    <div className="article-detail" style={{backgroundColor: "#f36c3d"}}>
                        <CardTitle title={this.props.content.title} titleColor="#ffffff" subtitleColor="#ffffff" subtitle={formatYMD(this.props.content.posted)} />
                    </div>
                    <div className="article-detail">
                        <CardText className="article-content" dangerouslySetInnerHTML={{ __html: this.props.content.body }} />
                    </div>
                </Card>
            </div>
		);
	};
}

About.propTypes = {
    content: PropTypes.object.isRequired,
}

export default About;