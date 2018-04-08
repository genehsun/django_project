import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from '../component/Loading';
import Detail from '../component/Detail';
import { fetchBlogDetail, changeSelectedPath } from '../action';
import {
    RECEIVE_BLOG_DETAIL,
} from '../constant/actionTypes';

class DetailContainer extends Component {
    componentDidMount() {
        this.props.dispatch(fetchBlogDetail(this.props.match.params.id));
        this.props.dispatch(changeSelectedPath(this.props.match.url));
    };

    render() {
        console.warn("DetailContainer render");

        if (this.props.isFetching) {
            return (<Loading />)
        } else {
            return (<Detail content={this.props.blogs.items[0]} />)
        }
    };
}

function mapStateToProps(state) {
    let isFetching = true;
    if (state.blogdetail.type === RECEIVE_BLOG_DETAIL) {
        isFetching = false;
    }
    
    return {
        isFetching,
        blogs: state.blogdetail,
    }
}

DetailContainer = connect(mapStateToProps)(DetailContainer);

export default DetailContainer;