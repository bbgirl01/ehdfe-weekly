import React from 'react';
import {Layout, Menu, Icon} from 'antd';
import './sideBar.css'
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
        console.log(this.props,323423434)
        navs.forEach(function(nav){
            console.log(nav,232)
        })
        console.log(this.props.location,99)

        return (
            <Sider width="300"
                style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                background: '#333',
                left: 0,
                top:'64px'

            }}>
                <Menu mode="inline" defaultSelectedKeys={['0']} theme="dark" className="navSiderMenu" style={{background:'#333'}}>
                    {navs.map((nav, key) => <Menu.Item key={key}>
                        <Icon type={nav.icon}/>
                        <span className="nav-text"><Link  to={nav.url}>{nav.name}</Link></span>
                    </Menu.Item>)
                    }
                </Menu>
            </Sider>
        )
    }
}

export default SiderBar;