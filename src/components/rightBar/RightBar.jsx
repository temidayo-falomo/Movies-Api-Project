import React from 'react'
import './RightBar.css'
import {IoMdNotificationsOff} from 'react-icons/io'
import {FiChevronDown} from 'react-icons/fi'
import InfoBox from './infoBox/InfoBox'
import InfoBar from './infoBar/InfoBar'
import TopRatedBar from './topRatedBar/TopRatedBar'
import GenresBar from './genresBar/GenresBar'
import { continueWatching } from './infoBox/infoBoxData'
import {MdOutlineDragHandle} from 'react-icons/md'

function RightBar(props) {
  return (
    <aside className='right-bar'>
      <MdOutlineDragHandle className='draggable'/>
      <div className="flex-btw hlf">
        <IoMdNotificationsOff className='notif'/>
        <div className="flex-btw w-all">
          <div className='just-flex gap'><h5>Samantha</h5><FiChevronDown className='notification'/><img src="./assets/avatar.svg" alt="" className='avatar'/></div>
        </div>
      </div>

      <InfoBar nameOf='Continue'/>
      <div className="just-flex info-boxes">
        {/* Create data file In InfoBar folder */}
        {continueWatching.map((contd)=> {
          return <InfoBox key={contd.id} contd={contd}/>
        })}
      </div>

      <InfoBar nameOf='Upcoming' />
      <div className="just-flex info-boxes">
        {props.upcoming.map((upcom)=> {
          return <TopRatedBar key={upcom.id} upcoming={upcom}/>
        })}
      </div>

      <InfoBar nameOf='Genres'/>
      <div className="just-flex info-boxes">
        {props.genres.map((genre)=> {
          return <GenresBar key={genre.id} genres={genre}/>
        })}
      </div>
    </aside>
  )
}

export default RightBar