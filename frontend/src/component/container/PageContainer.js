import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MONTH_NAME = [
    "January", "February", "March", "April", 
    "May", "June", "July", "August", 
    "September", "October", "November", "December"
];

/*
    用于组件之间的数据传递
*/
class PageContainer extends Component {

    constructor(props) {
        super(props);
        
        this.state = { 
            selectedPath: "/", 
        };
    };

    // 在子组件中用于说明context接收的数据类型
    static contextTypes = {
        // router : PropTypes.object.isRequired,
    };
    
    // 用于说明上下文中的数据类型
    static childContextTypes = {
        // state
        selectedPath: PropTypes.string.isRequired,

        // function
        formatYMD: PropTypes.func.isRequired,
        changeSelectedPath: PropTypes.func.isRequired,
    };

    // 用于指定子组件可直接访问的上下文数据
    getChildContext() {
        return {
            selectedPath: this.state.selectedPath,

            formatYMD: this.formatYMD,
            changeSelectedPath: this.changeSelectedPath,
        }
    };

    changeSelectedPath = (path, pageTitle) => {
        this.setState({
            selectedPath: path,
        })

        if (typeof(pageTitle) === "string") {
            document.title = pageTitle;
        } else {
            console.warn("标题参数有误！", pageTitle);
        }
    };

    formatYMD = (posted) => {
        var date = new Date(posted);
        if (!isNaN(date.getMonth()) && !isNaN(date.getDate()) && !isNaN(date.getFullYear())) {
            var format_date = MONTH_NAME[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
            return format_date;
        } else {
            console.warn("日期参数有误！", posted);
            return posted;
        }
    };

    render() {
        console.warn("PageContainer render")

        return (
            <div>
                {this.props.children}
            </div>
        );
    };
};

export default PageContainer;
