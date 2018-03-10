import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from '../component/Loading';
import Detail from '../component/Detail';
import { fetchBlogs, changeSelectedPath } from '../action';

class DetailContainer extends Component {
    componentDidMount() {
        this.props.dispatch(fetchBlogs());
        this.props.dispatch(changeSelectedPath(""));
    };

    render() {
        console.warn("DetailContainer render");

        if (this.props.isFetching) {
            return (<Loading />)
        } else {
            let content = {};
            const id = this.props.match.params.id;
            this.props.blogs.items.forEach(function(value) {
                if (value.id === parseInt(id, 10)) {
                    content = value;
                }
            })
            return (<Detail content={content} />)
        }
    };
}

function mapStateToProps(state) {
    let isFetching = true;
    if (state.blogs.items && state.blogs.items.length !== 0) {
        isFetching = false;
    }
    
    return {
        isFetching,
        blogs: state.blogs,
    }
}

DetailContainer = connect(mapStateToProps)(DetailContainer);

export default DetailContainer;