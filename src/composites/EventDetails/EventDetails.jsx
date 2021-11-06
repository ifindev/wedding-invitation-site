import React from 'react'
import { Button, EventDetailCard, GoogleMapLocation } from '../../components'
import styles from './styles.module.css'

const EventDetails = () => {
  const venueUrl =
    'https://www.google.com/maps/place/Salman+Al-Farisi+Mosque/@-6.188782,106.875347,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f4ee174c6c43:0xa8bb47340df92921!8m2!3d-6.1888751!4d106.8774866'
  const eventDetails = [
    {
      name: 'Akad Nikah',
      date: 'Saturday, 27th November 2021',
      time: '08:00 - 09:00',
      venue: 'Aula Masjid Salman Al-Farisi',
      address:
        'Jl. Komp. Bulog Jl. H. Ten Raya No.147, RT.14/RW.7, Kayu Putih,  Kec. Pulo Gadung, Kota Jakarta Timur',
    },
    {
      name: 'Resepsi Nikah',
      date: 'Saturday, 27th November 2021',
      time: '11:00 - 13:00',
      venue: 'Aula Masjid Salman Al-Farisi',
      address:
        'Jl. Komp. Bulog Jl. H. Ten Raya No.147, RT.14/RW.7, Kayu Putih,  Kec. Pulo Gadung, Kota Jakarta Timur',
    },
  ]

  return (
    <div>
      <div className={styles.container}>
        <div>
          <p className={styles.youThere}>WE WANT YOU THERE!</p>
          <p className={styles.joinUs}>Join our happy moment</p>
          <div className={styles.eventContainer}>
            {eventDetails.map((item, idx) => {
              return (
                <EventDetailCard
                  eventName={item.name}
                  eventDate={item.date}
                  eventTime={item.time}
                  eventVenue={item.venue}
                  venueAddress={item.address}
                  key={idx}
                />
              )
            })}
          </div>
        </div>
      </div>
      <div className={styles.location}>
        <div>
          <GoogleMapLocation />
        </div>
        <Button text="Lihat lokasi" onClick={() => window.open(venueUrl)} />
      </div>
    </div>
  )
}

export default EventDetails
