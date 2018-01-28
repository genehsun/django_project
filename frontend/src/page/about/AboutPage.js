import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import hljs from 'highlight.js';
import marked from 'marked';
import PropTypes from 'prop-types';
import "./About.css";

class AboutPage extends Component {

    constructor(props) {
        super(props);
        
        this.state = { 
            content: {
                body: "加载中...",
                title: "加载中...",
                posted: "加载中..."
            }, 
        };
    };

    static contextTypes = {
        formatYMD: PropTypes.func.isRequired,
        changeSelectedPath: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.context.changeSelectedPath("/about", "关于本站");
        marked.setOptions({
            highlight: code => hljs.highlightAuto(code).value,
        });

        var url = "/api/about/";
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
            console.log(json)
            _self.setState({
                content: json[0]
            });
        }).catch(function(ex) {
            console.warn('parsing failed', ex);
        })
    };

    render() {
        console.warn("AboutPage render");

        return (
            <div className="card-container">
                <Card className="card">
                    <CardTitle title={this.state.content.title} subtitle={this.context.formatYMD(this.state.content.posted)}/>
                    <CardText>
                        <div className="article-detail" dangerouslySetInnerHTML={{ __html: marked(this.state.content.body) }} />
                    </CardText>
                </Card>
            </div>
        );
    };
}

export default AboutPage;