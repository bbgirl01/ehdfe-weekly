import React from 'react';
import {Layout, Menu, Icon} from 'antd';
import SiderBar from './sideBar';
import Article from './Article'
const {Header, Content, Footer} = Layout;
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'
import navsData from './navsData';

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Layout>
                <SiderBar navs={{
                    navsData
                }} {...this.props}/>
                <Layout style={{
                    marginLeft: 300
                }}>
                    <Header
                        style={{
                        background: '#fff',
                        padding: 0
                    }}/>
                    <Content
                        style={{
                        margin: '24px 16px 0',
                        overflow: 'initial'
                    }}>
                        <div
                            style={{
                            padding: 24,
                            background: '#fff'
                        }}>
                            <Switch>
                                <Route path="/article/:url" component={Article}/>
                                <Route path="/" component={Article}/>
                            </Switch>
                        </div>
                    </Content>
                    <Footer
                        style={{
                        textAlign: 'center'
                    }}>
                        ©2017 Created by EHDFE
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default ArticleList;