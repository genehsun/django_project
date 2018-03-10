import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from '../component/Loading';
import BlogList from '../component/BlogList';
import { fetchBlogs, changeSelectedPath } from '../action';

class BlogContainer extends Component {
    componentDidMount() {
        this.props.dispatch(fetchBlogs());
        this.props.dispatch(changeSelectedPath("/"));
    };
    
    render() {
        console.warn("BlogContainer render");

        if (this.props.isFetching) {
            return (<Loading />)
        } else {
            return (<BlogList items={this.props.blogs.items} />)
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

BlogContainer = connect(mapStateToProps)(BlogContainer)

export default BlogContainer;