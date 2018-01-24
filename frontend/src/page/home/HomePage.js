import React, { Component } from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import "./HomePage.css"

class HomePage extends Component {

    constructor(props) {
		super(props);
        this.state = { posts: []};
    };

    static contextTypes = {
        formatYMD: PropTypes.func.isRequired,
        changeSelectedPath: PropTypes.func.isRequired,
        pushRouter: PropTypes.func.isRequired,
    };
    
    componentDidMount() {
        this.context.changeSelectedPath("/", "Ying");

        var url = "/api/blogs/";
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        var request = new Request(url, {
            headers: headers,
            method:"GET"
        });
        
        let _self = this;
        fetch(request)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            // console.log('parsed json', json);
            _self.setState({
                posts: json
            });
        }).catch(function(ex) {
            console.log('parsing failed', ex);
        })
    };
    
    render() {
        console.warn("HomePage render");

        return (
            <div className="card-container">
                {this.state.posts.map ((post, index) => {
                    return (
                        <Card className="card" key={index}>
                            <CardTitle title={post.title} subtitle={this.context.formatYMD(post.posted)}/>
                            <CardText>{post.short_content}</CardText>
                            <CardActions>
                                <RaisedButton primary={true}  label="Read More" onClick={() => {
                                    this.context.pushRouter("/post/"+(index+1));
                                }}/>
                            </CardActions>
                        </Card>
                    );
                })}
            </div>
        );
    };
}

export default HomePage;