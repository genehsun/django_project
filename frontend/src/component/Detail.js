import React, {Component} from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import PropTypes from 'prop-types';
import "./Detail.css";
import { formatYMD, changePageTitle } from '../action';

class Detail extends Component {
	render() {
        changePageTitle(this.props.content.title);

		return (
			<div>
                <Card className="detail-card">
                    <CardTitle title={this.props.content.title} subtitle={formatYMD(this.props.content.posted)}/>
                    <CardText className="article-detail" dangerouslySetInnerHTML={{ __html: this.props.content.body }} />
                </Card>
            </div>
		);
	};
}

Detail.propTypes = {
    content: PropTypes.object.isRequired,
}

export default Detail;