import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types'; 

class PostPage extends Component {
    constructor(props) {
		super(props);
		this.state = { post: "加载中..."};
    };

    componentDidMount() {
        var url = "/api/blogs/" + this.props.match.params.id;
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
                post: json.body
            })
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    };

    render() {
        return (
            <ReactMarkdown source={this.state.post} />
        );
    }
}

export default PostPage;