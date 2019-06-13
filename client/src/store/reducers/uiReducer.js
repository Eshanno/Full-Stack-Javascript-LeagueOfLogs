const uiReducer = (state={},action)=>{
  switch(action.type){
    case 'CLOSEMENU':
      console.log(state)
      return {...state,sideBarOpen:false}
    case  'OPENMATCHVIEWER':
      return {...state,matchViewerHidden:action.matchViewerHidden,searchBarHidden:action.searchBarHidden}
    default:
      return state
  }
}

export default uiReducer
