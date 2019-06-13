import React from 'react';
import Button from '@material-ui/core/Button';

const HiddenWrapper = (props) =>{
  let retVal = props.store.getState().uiReducer[props.name]===true? null : props.children
  return retVal
}


export default HiddenWrapper;
