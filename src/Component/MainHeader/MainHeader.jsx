import React from 'react'
import './mainHeader.scss';
import telephoneIcon from '../../assets/telephone.png'
import flag from '../../assets/flag.png'

export default function MainHeader() {
  return (
    <div className="mainHeader">
      <div className="headerItem">
        <div className="headerItem-icon">
         <img src={telephoneIcon} alt="" id="header-ico" />
        </div>
        <div className="headerItem-text">
          1337 1337 1337
        </div>
      </div>

      <div className="headerItem">
        <div className="headerItem-icon">
         <img src={flag} alt="" id="header-ico" />
        </div>
        <div className="headerItem-text">
          Try another Castie
        </div>
      </div>
    </div>
  )
}
