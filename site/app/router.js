import {Layout, Menu, Breadcrumb, Icon} from 'antd';
const {SubMenu} = Menu;
const {Header, Content, Footer} = Layout;
import React from 'react';
import SiderBar from './sideBar';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'

import navsData from './navsData';
import Article from './Article'

const basename = BASEPATH;
class Navs extends React.Component {
    render() {
        return (
            <Router basename={basename}>
                <Layout>
                    <SiderBar navs={{
                        navsData
                    }}/>
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
                                background: '#fff',
                            }}>
                                <Switch>
                                    {/* <Route path="/about" component={About}/>
                                    <Route path="/" component={Company}/> */}
                                    <Route path="/article/:url" component={Article}/>
                                </Switch>
                            </div>
                        </Content>
                        <Footer
                            style={{
                            textAlign: 'center'
                        }}>
                            ©2016 Created by EHDFE
                        </Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default Navs;