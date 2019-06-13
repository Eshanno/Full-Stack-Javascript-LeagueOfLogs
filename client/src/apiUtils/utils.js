fetch('/users/'+this.props.summonername)
.then(response => {return response.json() })
.then(json => this.props.store.dispatch({type:"SETSUMMONER", summonerProfilePic: json.profileIconId}))
