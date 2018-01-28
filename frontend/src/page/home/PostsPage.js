import React, { Component } from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./PostsPage.css"

class PostsPage extends Component {

    static contextTypes = {
        formatYMD: PropTypes.func.isRequired,
        changeSelectedPath: PropTypes.func.isRequired,

        posts: PropTypes.array.isRequired,
    };
    
    componentDidMount() {
        this.context.changeSelectedPath("/", "Wakim");
    };
    
    render() {
        console.warn("PostsPage render");

        return (
            <div className="card-container">
                {this.context.posts.map ((post, index) => {
                    return (
                        <Card className="card" key={index}>
                            <CardTitle title={post.title} subtitle={this.context.formatYMD(post.posted)}/>
                            <CardText>{post.short_content}</CardText>
                            <CardActions>
                                <RaisedButton primary={true} label="Read More" containerElement={<Link to={"/post/"+index} />} />
                            </CardActions>
                        </Card>
                    );
                })}
            </div>
        );
    };
}

export default PostsPage;