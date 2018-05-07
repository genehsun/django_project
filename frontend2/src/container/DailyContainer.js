import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from '../component/Loading';
import Daily from '../component/Daily';
import { fetchDailyDetail, changeSelectedPath } from '../action';
import {
    RECEIVE_DAILY_DETAIL,
} from '../constant/actionTypes';

class DailyContainer extends Component {
    componentDidMount() {
        this.props.dispatch(fetchDailyDetail(this.props.match.params.daily_id));
        this.props.dispatch(changeSelectedPath(this.props.match.url));
    };

    render() {

        if (this.props.isFetching) {
            return (<Loading />)
        } else {
            return (<Daily content={this.props.blogs.items[0]} id={this.props.match.params.id} />)
        }
    };
}

function mapStateToProps(state) {
    let isFetching = true;
    if (state.dailydetail.type === RECEIVE_DAILY_DETAIL) {
        isFetching = false;
    }
    
    return {
        isFetching,
        blogs: state.dailydetail,
    }
}

DailyContainer = connect(mapStateToProps)(DailyContainer);

export default DailyContainer;