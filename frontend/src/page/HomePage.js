import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types'; 

class App extends Component {
    constructor(props) {
		super(props);
		this.state = { posts: ["", "", "", "", "", ""]};
    };

    static contextTypes = {
		router: PropTypes.object.isRequired
	};

    style = {
        card: {marginTop: "2%", padding: "3%"}
	};
    
    render() {
        return (
            <div>
                {this.state.posts.map ((post, index) => {
                    return (
                        <Card style={this.style.card} post={post} key={index}>
                            <CardTitle title="Article title"/>
                            <CardText>
                            A card is a piece of paper with unique related data that serves as an entry point to more detailed information. 
                            For example, a card could contain a photo, text, and a link about a single subject. 
                            Cards have a constant width and variable height. 
                            The maximum height is limited to the height of the available space on a platform, but it can temporarily expand (for example, to display a comment field). 
                            Cards do not flip over to reveal information on the back.
                            </CardText>
                            <CardActions>
                            <FlatButton label="Read More" onClick={() => {
                                this.context.router.history.push("/post")
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