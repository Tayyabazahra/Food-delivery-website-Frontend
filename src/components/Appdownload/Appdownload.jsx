import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/frontend_assets/assets'

const Appdownload = () => {
  return (
    <div>
      <div className="app-download">
        <p>For Better Experience Download <br/> Tomato App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt='playstore'/>
            <img src={assets.app_store} alt="appstore" />
        </div>
      </div>
    </div>
  )
}

export default Appdownload
