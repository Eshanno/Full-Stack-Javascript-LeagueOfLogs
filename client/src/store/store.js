import { combineReducers,createStore } from 'redux'
import summonerProfileReducer from './reducers/summonerProfileReducer.js'
import uiReducer from './reducers/uiReducer.js'


const store = createStore(combineReducers({uiReducer,summonerProfileReducer}),
{
  uiReducer:
    {sideBarOpen:true,searchBarHidden:false,matchViewerHidden:true},
  summonerProfileReducer:
    {summonerName:'Summoner_name',profileIconId:4098,searchBarValue:""}
})

export const searchForSummoner = (summonerInfoJson) => {

  return {type:'searchForsummoner',...summonerInfoJson,summmonerName:store.getState().summonerProfileReducer.searchBarValue,searchBarValue:""}
}

export default store
