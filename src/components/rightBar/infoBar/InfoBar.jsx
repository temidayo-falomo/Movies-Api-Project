import React from 'react'
import './InfoBar.css'
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi'
import {CgScrollH} from 'react-icons/cg'

function InfoBar(props) {
  return (
    <div className='infobar'>
            <div className="CTG">
                <h3>{props.nameOf}</h3>
                <CgScrollH className='arrow'/>
            </div>

            <div className="see-more">
                <span>See More</span>
                <HiChevronRight className='arrow'/>
            </div>
    </div>
  )
}

export default InfoBar