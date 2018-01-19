import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class PostPage extends Component {
    constructor(props) {
        super(props);
		this.state = { input: '# This is a header\n\nAnd this is a paragraph'};
    };

    render() {
        return (
            <ReactMarkdown source={this.state.input} />
        );
    }
}

export default PostPage;