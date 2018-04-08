import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from '../component/Loading';
import BlogList from '../component/BlogList';
import { fetchCategoryBlogs, changeSelectedPath } from '../action';
import {
    REQUEST_CATEGORYBLOGS,
} from '../constant/actionTypes';


class CategoryContainer extends Component {
    componentDidMount() {
        this.props.dispatch(fetchCategoryBlogs(this.props.match.params.id));
        this.props.dispatch(changeSelectedPath(this.props.match.url));
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.url !== this.props.match.url) {
            this.props.dispatch(fetchCategoryBlogs(nextProps.match.params.id));
            this.props.dispatch(changeSelectedPath(nextProps.match.url));
        }
    }
    
    render() {
        console.warn("CategoryContainer render");

        if (this.props.isFetching) {
            return (<Loading />)
        } else {
            return (<BlogList items={this.props.categoryblogs.items} />)
        }
    };
}

function mapStateToProps(state) {
    console.log("dddd", state.categoryblogs.type)
    let isFetching = true;
    if (state.categoryblogs.items && state.categoryblogs.items.length !== 0) {
        isFetching = false;

        if (state.categoryblogs.type === REQUEST_CATEGORYBLOGS) {
            isFetching = true;
        }
    }
    
    return {
        isFetching,
        categoryblogs: state.categoryblogs,
    }
}

CategoryContainer = connect(mapStateToProps)(CategoryContainer)

export default CategoryContainer;