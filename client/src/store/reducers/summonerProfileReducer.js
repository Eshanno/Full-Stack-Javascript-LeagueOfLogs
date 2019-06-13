const summonerProfileReducer = (state={},action)=>{
  switch(action.type){
    case 'SETSUMMONER':
      return action
    case 'SERACHBARCHANGE':
      return {...state,searchBarValue:action.searchBarValue}
    default:
      return state
  }
}


export default summonerProfileReducer
