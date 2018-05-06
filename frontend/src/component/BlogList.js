import React, {Component} from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./Detail.css";
import { formatYMD, changePageTitle } from '../action';

class BlogList extends Component {
	render() {
        changePageTitle("Wakim");

		return (
            <div className="detail-container">
                {this.props.items.map((blog, index) => {
                    return (
                        <div key={index}>
                            <Card className="detail-card">
                                <CardTitle title={blog.title} subtitle={formatYMD(blog.posted)}/>
                                <CardText>{blog.short_content}</CardText>
                                <CardActions>
                                    <RaisedButton primary={true} label="Read More" containerElement={<Link to={"/post/"+blog.id} />} />
                                </CardActions>
                            </Card>
                            <div style={{marginBottom: '3%'}} />
                        </div>
                    );
                })}
            </div>
		);
	};
}

BlogList.propTypes = {
    items: PropTypes.array.isRequired,
}

export default BlogList;