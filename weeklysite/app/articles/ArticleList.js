import React from 'react';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List, {ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';
import navsData from './navsData';
import Article from './Article'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import styleSheet from './ArticleListStyle'

class ArticleList extends React.Component {
    state = {
        open: {
            left: false
        }
    };

    toggleDrawer = (side, open) => {
        const drawerState = {};
        drawerState[side] = open;
        this.setState({open: drawerState});
    };
    handleLeftOpen = () => this.toggleDrawer('left', true);
    handleLeftClose = () => this.toggleDrawer('left', false);

    render() {
 
        const classes = this.props.classes;

        const sideList = (
            <div>
                <List className={classes.list} disablePadding>
                    {navsData.map((nav, key) => <ListItem button key={key}>
                        <ListItemIcon>
                            {nav.icon()}
                        </ListItemIcon>

                        <Link to={nav.url}>{nav.name}</Link>

                    </ListItem>)
}
                </List>
            </div>
        );

        return (
            <div style={{marginTop:'48px'}}>
            <div className={classes.content}>
                <div className={classes.article}>
                    <Button raised className={classes.button}  onClick={this.handleLeftOpen} >展开列表</Button>
                    <Switch>
                        <Route path="/article/:url" component={Article}/>
                        <Route path="/" component={Article}/>
                    </Switch>
                </div>
                
                <Drawer
                    open={this.state.open.left}
                    onRequestClose={this.handleLeftClose}
                    onClick={this.handleLeftClose}>
                    {sideList}
                </Drawer>

            </div>
            <div className={classes.footer}>
                ©2017 Created by EHDFE
            </div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(ArticleList);