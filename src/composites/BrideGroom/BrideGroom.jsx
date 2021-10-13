// Modules
import React from 'react'
import { ProfileCard } from '../../components'

// Assets
import styles from './styles.module.css'
import bride from '../../assets/2_bride_img.png'
import groom from '../../assets/3_groom.png'

const BrideGroom = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>The Bride &amp; The Groom</p>
      <div className={styles.cardContainer}>
        <ProfileCard
          img={bride}
          title="The Bride"
          name="Fitria Andaryani, S.Si., FSAI"
          description="Putri Ketiga"
          parent="Bapak Suhartono &amp; Ibu Komariyah"
        />
        <div className={styles.separator} />
        <ProfileCard
          img={groom}
          title="The Groom"
          name="Muhammad Arifin, S.T."
          description="Putra Pertama"
          parent={'Alm. Bapak Dr. Ing. R. Riesdam Effendi & Ibu Tjut Mutiah'}
        />
      </div>
    </div>
  )
}

export default BrideGroom
