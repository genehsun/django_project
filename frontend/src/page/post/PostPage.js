import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import hljs from 'highlight.js';
import marked from 'marked';
import "./PostPage.css"

class PostPage extends Component {

    constructor(props) {
		super(props);
		this.state = { 
            post: {
                title: "加载中...",
                posted: "加载中...",
                body: "加载中...",
            }
        };
    };

    static contextTypes = {
        formatYMD: PropTypes.func.isRequired,
        changeSelectedPath: PropTypes.func.isRequired,
	};

    componentDidMount() {
        marked.setOptions({
            highlight: code => hljs.highlightAuto(code).value,
          });

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
            return response.json();
        }).then(function(json) {
            _self.context.changeSelectedPath("", json.title);
            // console.log('parsed json', json);
            _self.setState({
                post: json
            });
        }).catch(function(ex) {
            console.warn('parsing failed', ex);
        })
    };

    render() {
        console.warn("PostPage render");

        return (
            <div className="card-container">
                <Card className="card">
                    <CardTitle title={this.state.post.title} subtitle={this.context.formatYMD(this.state.post.posted)}/>
                    <CardText>
                        <div className="article-detail" dangerouslySetInnerHTML={{ __html: marked(this.state.post.body) }} />
                    </CardText>
                </Card>
            </div>
        );
    };
}

export default PostPage;