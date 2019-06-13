import React from 'react';
import Button from '@material-ui/core/Button';

const MatchWindow = (props) =>{
return(
  
  <div className='matchWidnowContainer'>
  <Button variant="contained" fullWidth={true} color="primary" > ^ </Button>
    <div className='currentMatchView'></div>
  <Button variant="contained" fullWidth={true} color="primary" > V </Button>
  </div>

)
}


export default MatchWindow;
