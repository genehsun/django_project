import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import hljs from 'highlight.js';
import marked from 'marked';
import PropTypes from 'prop-types';
import "./About.css";

class AboutMe extends Component {
    
    static contextTypes = {
        // formatYMD: PropTypes.func.isRequired,
        changeSelectedPath: PropTypes.func.isRequired,
    };
    
    componentDidMount() {
        this.context.changeSelectedPath("/me", "关于作者");
        marked.setOptions({
            highlight: code => hljs.highlightAuto(code).value,
        });
    };

    render() {
        console.warn("AboutMe render");

        return (
            <div className="card-container">
                <Card className="card">
                    <CardTitle title="关于作者"/>
                    <CardText>
                        <div className="article-detail" dangerouslySetInnerHTML={{ __html: marked("ddddd") }} />
                    </CardText>
                </Card>
            </div>
        );
    };
}

export default AboutMe;