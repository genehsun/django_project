import React, {Component} from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import PropTypes from 'prop-types';
import hljs from 'highlight.js';
import marked from 'marked';
import "./Detail.css";
import { formatYMD, changePageTitle } from '../action';

marked.setOptions({
    highlight: code => hljs.highlightAuto(code).value,
});

class Detail extends Component {
	render() {
        changePageTitle(this.props.content.title);

		return (
			<div className="detail-container">
                <Card className="detail-card">
                    <CardTitle title={this.props.content.title} subtitle={formatYMD(this.props.content.posted)}/>
                    <CardText>
                        <div className="article-detail" dangerouslySetInnerHTML={{ __html: marked(this.props.content.body) }} />
                    </CardText>
                </Card>
            </div>
		);
	};
}

Detail.propTypes = {
    content: PropTypes.object.isRequired,
}

export default Detail;