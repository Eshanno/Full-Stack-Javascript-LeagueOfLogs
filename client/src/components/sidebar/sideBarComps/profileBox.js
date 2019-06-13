import React from 'react'

const Profilebox = (props) =>
  <div>
    <h1>{props.store.getState().summonerProfileReducer.summonerName} </h1>
    <h4>Level:{props.store.getState().summonerProfileReducer.summonerLevel}</h4>
    <div id="profileIconContainer">
      <img id="profileIcon" src={"http://stelar7.no/cdragon/latest/profile-icons/"+props.store.getState().summonerProfileReducer.profileIconId+".jpg"} alt="Profile Icon"/>
    </div>
</div>


export default Profilebox
