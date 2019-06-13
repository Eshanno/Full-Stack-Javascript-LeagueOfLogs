import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Sidebar from './components/sidebar/sidebar.js'
import MatchWindow from './components/matchViewer/matchWindow.js'
import HiddenWrapper from './components/utilityComp/hiddenWrapper.js'
import "./App.css"
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
const App = (props) => {
  return (<div className="App">
    <HiddenWrapper name='matchViewerHidden' store={props.store}>
      <MatchWindow></MatchWindow>
    </HiddenWrapper>
    <HiddenWrapper name='searchBarHidden' store={props.store}>
      <form className='mainSearchBar' onSubmit={event =>
      }>
        <TextField id='mainSearchbarField'name="searchField" value={props.store.getState().summonerProfileReducer.searchBarValue} onChange={event => props.store.dispatch({type: 'SERACHBARCHANGE', searchBarValue: event.target.value})}variant="filled" label="Search for a summoner!" placeholder="Drakoarion"></TextField>


      </form>
    </HiddenWrapper>
    <Button id="matchWindowCloseButton" variant="contained" color="primary">
      X
    </Button>

    <Sidebar store={props.store}></Sidebar>

  </div>)
}
const onSummonerSearchSubmit = (event) => {
  {
      event.preventDefault()
      setSummoner(props.store)

    }

}
const setSummoner = (store) => {
  let serachBarValue = store.getState().summonerProfileReducer.searchBarValue
  fetch('/users/' + serachBarValue ).then(response => {return response.json()})
  .then(json => {return ({summonerName: serachBarValue,searchBarValue: "",...json})})
  .then(action => {
    store.dispatch({
      type: "SETSUMMONER",
      ...action
    })
    return (action)
  }).then(action => {
    store.dispatch({type: 'OPENMATCHVIEWER', matchViewerHidden: false, searchBarHidden: true})
  }).then(() => console.log(store.getState()))
}

export default App;
