import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import "./Loading.css";

class Loading extends Component {
	render() {
		return (
			<div className="loading-container">
				<Paper className="loading-paper" zDepth={1}></Paper>
			</div>
		);
	};
}
export default Loading;