import React from 'react'
import styles from './styles.module.css'

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text ? text : 'button'}
    </button>
  )
}

export default Button
