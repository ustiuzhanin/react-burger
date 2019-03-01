import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Tooldbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandeler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandeler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
        // this.setState({showSideDrawer: !this.state.showSideDrawer});
    }

    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandeler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerCloseHandeler} />
                <div>Toolbar, SideDrawer, Backdrop</div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;