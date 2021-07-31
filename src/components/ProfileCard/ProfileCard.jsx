import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styles from './styles.module.css'

const ProfileCard = ({ img, title, name, description, parent }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <LazyLoadImage src={img} alt={title} className={styles.cardImage} />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.cardTitle}>{title && title.toUpperCase()}</p>
        <p className={styles.cardName}>{name}</p>
        <div className={styles.separator} />
        <p className={styles.cardText}>{description}</p>
        <p className={styles.cardText}>{parent}</p>
      </div>
    </div>
  )
}

export default ProfileCard
