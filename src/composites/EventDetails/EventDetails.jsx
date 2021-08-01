import React from 'react'
import { EventDetailCard } from '../../components'
import styles from './styles.module.css'

const EventDetails = () => {
  const eventDetails = [
    {
      name: 'Akad Nikah',
      date: 'Saturday, 27th November 2021',
      time: '08:00 - 09:00',
      venue: 'Masjid Salman Al-Farisi',
      address:
        'Jl. Komp. Bulog Jl. H. Ten Raya No.14 7, RT.14/RW.7, Kayu Putih,  Kec. Pulo Gadung, Kota Jakarta Timur',
    },
    {
      name: 'Resepsi Nikah',
      date: 'Saturday, 27th November 2021',
      time: '10:00 - 13:00',
      venue: 'Aula Masjid Salman Al-Farisi',
      address:
        'Jl. Komp. Bulog Jl. H. Ten Raya No.14 7, RT.14/RW.7, Kayu Putih,  Kec. Pulo Gadung, Kota Jakarta Timur',
    },
  ]

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.youThere}>WE WANT YOU THERE!</p>
        <p className={styles.joinUs}>Join our happy moment</p>
        <div className={styles.eventContainer}>
          {eventDetails.map((item) => {
            return (
              <EventDetailCard
                eventName={item.name}
                eventDate={item.date}
                eventTime={item.time}
                eventVenue={item.venue}
                venueAddress={item.address}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default EventDetails
