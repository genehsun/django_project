import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../component/Footer';
import ListContainer from '../container/ListContainer';
import DailyContainer from '../container/DailyContainer';
import { getVersions } from '../action';
import AboutContainer from '../container/AboutContainer';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { isMobile: false };
    };

    onWindowResize = () => {
        const versions = getVersions();
        if (versions.mobile 
        || versions.ios 
        || versions.android 
        || versions.iPhone 
        || versions.iPad) {
            this.setState({ isMobile: true });
        } else {
            this.setState({ isMobile: false });
        }
    };

    componentDidMount() {
        this.onWindowResize();
        window.addEventListener('resize', this.onWindowResize);
    }

    componentWillUnmount() {
        debugger;
        window.removeEventListener('resize', this.onWindowResize);
    };
	
	render () {
        let mobileHome = {
        };

        let pcHome = {
            paddingLeft: '25%',
            paddingRight: '25%',
        };

        return (
            <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
                <div>
                    <div style={this.state.isMobile ? mobileHome : pcHome}>
                        <Switch>
                            <Route exact path="/" component={ListContainer} />
                            <Route path="/daily/:daily_id/:id" component={DailyContainer} />
                            <Route path="/about" component={AboutContainer} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        );
	}
}

function mapStateToProps(state) {
    return {
    }
}

HomeContainer = connect(mapStateToProps)(HomeContainer)

export default HomeContainer;

