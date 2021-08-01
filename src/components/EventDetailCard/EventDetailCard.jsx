import React from 'react'
import { CalendarToday, LocationOn, QueryBuilder } from '@material-ui/icons'
import styles from './styles.module.css'

const EventDetailCard = ({
  eventName,
  eventDate,
  eventTime,
  eventVenue,
  venueAddress,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.eventName}>{eventName}</p>
      <div className={styles.detailContainer}>
        <CalendarToday />
        <span className={styles.detailText}>{eventDate}</span>
      </div>
      <div className={styles.detailContainer}>
        <QueryBuilder />
        <span className={styles.detailText}>{eventTime}</span>
      </div>
      <div className={styles.detailContainer}>
        <LocationOn />
        <span className={styles.detailText}>{eventVenue}</span>
      </div>
      <p className={styles.addressText}>{venueAddress}</p>
    </div>
  )
}

export default EventDetailCard
