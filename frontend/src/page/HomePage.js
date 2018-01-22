import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types'; 

class App extends Component {
    constructor(props) {
		super(props);
		this.state = { posts: []};
    };

    static contextTypes = {
		router: PropTypes.object.isRequired
	};

    style = {
        card: {marginTop: "2%", padding: "3%"}
    };
    
    componentDidMount() {
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
            return response.json()
        }).then(function(json) {
            console.log('parsed json', json)
            _self.setState({
                posts: json
            })
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    };
    
    render() {
        return (
            <div>
                {this.state.posts.map ((post, index) => {
                    return (
                        <Card style={this.style.card} key={index}>
                            <CardTitle title={post.title}/>
                            <CardText>{post.short_content}</CardText>
                            <CardActions>
                            <FlatButton label="Read More" onClick={() => {
                                this.context.router.history.push("/post/"+(index+1))
                            }}/>
                            </CardActions>
                        </Card>
                    );
                })}
            </div>
        )
    };
}

export default App;