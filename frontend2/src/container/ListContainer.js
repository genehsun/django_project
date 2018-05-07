import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from '../component/Loading';
import DailyList from '../component/DailyList';
import { fetchDailys, changeSelectedPath } from '../action';

class ListContainer extends Component {
    componentDidMount() {
        this.props.dispatch(fetchDailys());
        this.props.dispatch(changeSelectedPath(this.props.match.url));
    };
    
    render() {
        if (this.props.isFetching) {
            return (<Loading />)
        } else {
            return (<DailyList items={this.props.dailys.items} />)
        }
    };
}

function mapStateToProps(state) {
    let isFetching = true;
    if (state.dailys.items && state.dailys.items.length !== 0) {
        isFetching = false;
    }
    
    return {
        isFetching,
        dailys: state.dailys,
    }
}

ListContainer = connect(mapStateToProps)(ListContainer)

export default ListContainer;