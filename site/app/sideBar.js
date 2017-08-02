import React from 'react';

import {Layout, Menu, Icon} from 'antd';

const {Sider} = Layout;
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class SiderBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var navs = this.props.navs.navsData;
        return (
            <Sider width="300"
                style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                background: '#fff',
                left: 0,
                flex:"0 0 300px"
            }}>
                <div className="logo"/>
                <Menu mode="inline">
                    {navs.map((nav, key) => <Menu.Item key={key}>
                        <Icon type={nav.icon}/>
                        <span className="nav-text"><Link to={nav.url}>{nav.name}</Link></span>
                    </Menu.Item>)
                    }
                </Menu>
            </Sider>
        )
    }
}

export default SiderBar;