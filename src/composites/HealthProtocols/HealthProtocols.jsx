import React from 'react'

import { data } from './protocols'
import './styles.css'

const HealthProtocols = () => {
  return (
    <div className="health-container">
      <h2>Protokol Kesehatan</h2>
      <div className="protocol-container">
        <div className="grid-container">
          {data.map((dat) => (
            <div className="prot-item">
              <img src={dat.img} alt="health protocols" />
              <span>{dat.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HealthProtocols
