import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

const CountdownTimer = () => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    var x = setInterval(function () {
      const countDownDate = new Date('Nov 27, 2021 08:00:00').getTime()

      // Get today's date and time
      var now = new Date().getTime()

      // Find the distance between now and the count down date
      var distance = countDownDate - now

      // Time calculations for days, hours, minutes and seconds
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      )
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000))

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x)
      }
    }, 1000)
  }, [])

  const renderCountDownValues = (data, text) => {
    return (
      <div className={styles.countdownTimeContainer}>
        <p className={styles.countdownValue}>{data} </p>
        <p className={styles.countdownText}>{text}</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <p className={styles.countdownDate}>27 November 2021</p>
      <div className={styles.countdownContainer}>
        {renderCountDownValues(days, 'Days')}
        <p className={styles.slash}>/</p>
        {renderCountDownValues(hours, 'Hours')}
        <p className={styles.slash}>/</p>
        {renderCountDownValues(minutes, 'Minutes')}
        <p className={styles.slash}>/</p>
        {renderCountDownValues(seconds, 'Seconds')}
      </div>
    </div>
  )
}

export default CountdownTimer
