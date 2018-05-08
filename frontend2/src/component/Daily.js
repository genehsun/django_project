import React, {Component} from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import "./Detail.css";
import { formatYMD, changePageTitle } from '../action';

class Daily extends Component {
	render() {
        let title = "";
        let body = "";
        let originalLink = "";
        if (this.props.id === "1") {
            title = this.props.content.title_1;
            body = this.props.content.body_1;
            originalLink = this.props.content.originalLink_1;
        } else if (this.props.id === "2") {
            title = this.props.content.title_2;
            body = this.props.content.body_2;
            originalLink = this.props.content.originalLink_2;
        } else if (this.props.id === "3") {
            title = this.props.content.title_3;
            body = this.props.content.body_3;
            originalLink = this.props.content.originalLink_3;
        } else {
        }

        changePageTitle(title);

        let counter = '第' + this.props.content.id + '期';
        let subtitle = formatYMD(this.props.content.posted) + ' · ' + counter;

		return (
			<div>
                <Card>
                    <div className="article-detail" style={{backgroundColor: "#f36c3d"}}>
                        <CardTitle title={title} titleColor="#ffffff" subtitleColor="#ffffff" subtitle={subtitle} />
                    </div>
                    <div className="article-detail">
                        <CardText className="article-content" dangerouslySetInnerHTML={{ __html: body }} />
                    </div>
                    <div className="article-detail">
                        <CardActions>
                            <FlatButton 
                                style={{color: '#f36c3d'}} 
                                label="原文链接"
                                href={originalLink}
                                target="_blank" />
                        </CardActions>
                    </div>
                </Card>
            </div>
		);
	};
}

Daily.propTypes = {
    content: PropTypes.object.isRequired,
}

export default Daily;