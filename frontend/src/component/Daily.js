import React, {Component} from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import PropTypes from 'prop-types';
import "./Detail.css";
import { formatYMD, changePageTitle } from '../action';

class Daily extends Component {
	render() {
        changePageTitle(this.props.content.title_1);

        let title = "";
        let body = "";
        if (this.props.id === "1") {
            title = this.props.content.title_1;
            body = this.props.content.body_1;
        } else if (this.props.id === "2") {
            title = this.props.content.title_2;
            body = this.props.content.body_2;
        } else if (this.props.id === "3") {
            title = this.props.content.title_3;
            body = this.props.content.body_3;
        } else {
        }

        let counter = '第' + this.props.content.id + '期';
        let subtitle = formatYMD(this.props.content.posted) + ' · ' + counter;

		return (
			<div>
                <Card>
                    <CardTitle title={title} style={{backgroundColor: "#f36c3d"}} titleColor="#ffffff" subtitleColor="#ffffff" subtitle={subtitle} />
                    <CardText className="article-detail" dangerouslySetInnerHTML={{ __html: body }} />
                </Card>
            </div>
		);
	};
}

Daily.propTypes = {
    content: PropTypes.object.isRequired,
}

export default Daily;