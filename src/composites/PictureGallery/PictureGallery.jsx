import React from 'react'
import { GalleryItem } from '../../components'

import { gallery } from './gallery'
import Blob from '../../assets/blob-gallery.png'
import './styles.css'

const PictureGallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <span>Our Happy Moments</span>
        <img src={Blob} alt="blob-gallery" />
      </div>
      <div>
        <div className="gall-item-container item-desktop">
          {gallery[0].desktop.map((data) => (
            <GalleryItem data={data} />
          ))}
        </div>
        <div className="gall-item-container item-mobile">
          {gallery[0].mobile.map((data) => (
            <GalleryItem data={data} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PictureGallery
