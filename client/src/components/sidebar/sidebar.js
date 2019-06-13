import React from 'react';
import Button from '@material-ui/core/Button';
import Profilebox from './sideBarComps/profileBox.js'
import Drawer from '@material-ui/core/Drawer';

const Sidebar = (props) =>{
return(
  <div className="leftBar" >

    <Drawer open={props.store.getState().uiReducer.sideBarOpen}  variant="persistent" id="mainNavBar">
      <div id="innerDrawer">
        <Profilebox store={props.store}/>
        <Button variant="contained" color="primary" onClick={()=>props.store.dispatch({type:"CLOSEMENU"})}> X </Button>
      </div>
    </Drawer>

  </div>)

}


export default Sidebar;
