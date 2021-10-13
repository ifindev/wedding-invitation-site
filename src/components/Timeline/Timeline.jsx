import React from 'react'
import './styles.css'

const Timeline = ({ data }) => {
  return (
    <div className="timeline-container">
      <div className="opening-timeline">
        <h2>Sepenggal Kisah Arifin &amp; Fitria</h2>
      </div>
      <div class="timeline">
        {data.map((x) => {
          return (
            <div class={`container ${x.position}`}>
              <div class="content">
                <h2 style={{ color: '#684D3D', marginBottom: '20px' }}>
                  {x.period}
                </h2>
                <img src={x.img} alt="" />
                <p class="textContent">{x.content}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Timeline
