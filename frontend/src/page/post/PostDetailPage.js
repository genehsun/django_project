import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import hljs from 'highlight.js';
import marked from 'marked';
import "./PostDetailPage.css"

class PostDetailPage extends Component {

    constructor(props) {
		super(props);
		this.state = { 
            post: {
                title: "加载中...",
                posted: "加载中...",
                body: "加载中...",
            },
            id: -1
        };
    };

    static contextTypes = {
        formatYMD: PropTypes.func.isRequired,
        changeSelectedPath: PropTypes.func.isRequired,

        posts: PropTypes.array.isRequired,
	};

    componentDidMount() {
        marked.setOptions({
            highlight: code => hljs.highlightAuto(code).value,
        });

        this.setState({
            id: this.props.match.params.id,
        })

        let post = this.context.posts[this.props.match.params.id];
        console.log(this.context, this.props)
        if (post) {
            this.context.changeSelectedPath("", post.title);
            this.setState({
                post: post
            });
        }
    };

    render() {
        console.warn("PostDetailPage render");
        if (this.state.id != -1 && this.context.posts[this.state.id]) {
            console.log("33", this.context.posts[this.state.id]);
            return (
                <div className="card-container">
                    <Card className="card">
                        <CardTitle title={this.context.posts[this.state.id].title} subtitle={this.context.formatYMD(this.context.posts[this.state.id].posted)}/>
                        <CardText>
                            <div className="article-detail" dangerouslySetInnerHTML={{ __html: marked(this.context.posts[this.state.id].body) }} />
                        </CardText>
                    </Card>
                </div>
            );
        } else {
            console.log('dddd 333');
            return (
                <div className="card-container">
                </div>
            );
        }
    };
}

export default PostDetailPage;