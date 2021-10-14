import React from 'react'
import './styles.css'

const GalleryItem = ({ data }) => {
  return (
    <div className="gallery-item-container">
      <div className="desktop-gall">
        <img src={data.img1} alt="gallery" />
        <img src={data.img2} alt="gallery" />
        {data.img3 && <img src={data.img3} alt="gallery" />}
      </div>
      <div className="mobile-gall">
        {console.log(data)}
        <img src={data} alt="gallery" />
      </div>
    </div>
  )
}

export default GalleryItem
