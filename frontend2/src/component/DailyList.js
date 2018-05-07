import React, {Component} from 'react';
import { Card, CardActions, CardTitle, CardText, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import PropTypes from 'prop-types';
import "./Detail.css";
import { formatYMD, changePageTitle } from '../action';

class DailyList extends Component {

    handleTitle = (daily) => {
        let counter = " 第" + daily.id + "期";
        return formatYMD(daily.posted) + " · " + counter;
    }

	render() {
        changePageTitle("Wakim");

		return (
            <div>
                {this.props.items.map((daily, index) => {
                    return (
                        <div key={index}>
                            <Card>
                                <div>
                                    <CardTitle style={{backgroundColor: "#f36c3d"}} title={this.handleTitle(daily)} titleColor="#ffffff" />
                                </div>
                                <div className="detail-card">
                                    <CardHeader title={daily.title_1} titleColor="#f36c3d" subtitle={daily.sourceDomain_1} avatar={daily.sourceLogo_1}/>
                                    <CardText className="article-content">{daily.short_content_1}</CardText>
                                    <CardActions>
                                        <FlatButton 
                                            style={{color: '#f36c3d'}} 
                                            label="原文链接"
                                            href={daily.originalLink_1}
                                            target="_blank" />
                                        <FlatButton
                                            href={"/daily/"+daily.id+"/"+1}
                                            style={{color: '#f36c3d'}} 
                                            label="阅读更多" />
                                    </CardActions>
                                    <Divider />
                                    <CardHeader title={daily.title_2} titleColor="#f36c3d" subtitle={daily.sourceDomain_2} avatar={daily.sourceLogo_2}/>
                                    <CardText className="article-content">{daily.short_content_2}</CardText>
                                    <CardActions>
                                        <FlatButton 
                                            style={{color: '#f36c3d'}} 
                                            label="原文链接"
                                            href={daily.originalLink_2}
                                            target="_blank" />
                                        <FlatButton 
                                            href={"/daily/"+daily.id+"/"+2}
                                            style={{color: '#f36c3d'}} 
                                            label="阅读更多" />
                                    </CardActions>
                                    <Divider />
                                    <CardHeader title={daily.title_3} titleColor="#f36c3d" subtitle={daily.sourceDomain_3} avatar={daily.sourceLogo_3}/>
                                    <CardText className="article-content">{daily.short_content_3}</CardText>
                                    <CardActions>
                                        <FlatButton 
                                            style={{color: '#f36c3d'}} 
                                            label="原文链接"
                                            href={daily.originalLink_3}
                                            target="_blank" />
                                        <FlatButton 
                                            href={"/daily/"+daily.id+"/"+3}
                                            style={{color: '#f36c3d'}} 
                                            label="阅读更多" />
                                    </CardActions>
                                </div>
                            </Card>
                            <div style={{marginBottom: '3%'}} />
                        </div>
                    );
                })}
            </div>
		);
	};
}

DailyList.propTypes = {
    items: PropTypes.array.isRequired,
}

export default DailyList;