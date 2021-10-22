import React from 'react'
import './styles.css'
import closingImg from '../../assets/closing-img.png'

const ClosingPage = () => {
  return (
    <div className="closing-container">
      <hr />
      <p className="closing-surah">
        "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
        pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
        merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
        sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
        tanda-tanda (kebesaran Allah) bagi kaum yang berpikir” (QS. Ar Rum ayat
        21)
      </p>
      <hr />
      <div className="cl-last-container">
        <p>
          Bismillah~ <br /> <br />
          Mohon doanya yaa semua...
        </p>
        <div>
          <img src={closingImg} alt="Closing Prewed" />
        </div>
      </div>
    </div>
  )
}

export default ClosingPage
