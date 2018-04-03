import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from '../component/Loading';
import Detail from '../component/Detail';
import { fetchAbout, changeSelectedPath } from '../action';

class AboutContainer extends Component {
    componentDidMount() {
        this.props.dispatch(fetchAbout());
        this.props.dispatch(changeSelectedPath(this.props.match.url));
    };

    render() {
        console.warn("AboutContainer render");

        if (this.props.isFetching) {
            return (<Loading />)
        } else {
            return (<Detail content={this.props.about.contents[0]} />)
        }
    };
}

function mapStateToProps(state) {
    let isFetching = true;
    if (state.about.contents && state.about.contents.length !== 0) {
        isFetching = false;
    }
    
    return {
        isFetching,
        about: state.about,
    }
}

AboutContainer = connect(mapStateToProps)(AboutContainer);

export default AboutContainer;