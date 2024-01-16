import './App.css'
import Github from "./assets/icons/github.png"
import Linkedin from "./assets/icons/linkedin.png"
import Search from "./assets/icons/search.png"
import Instagram from "./assets/icons/instagram.png"
import Foto from "./assets/icons/foto.png"
import { useEffect, useState } from 'react'

import {
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

function App() {

  const [share, setShare] = useState(false)

  useEffect(() => {
    ScrollShare()
  }, [])

  function ScrollShare() {
    const share = document.getElementById('share')
    window.addEventListener('scroll', () => {
      const height = window.scrollY

      if (height > 0) {
        share.style.opacity = '1'
      } else {
        share.style.opacity = '0'
      }
    })
  }


  return (
    <div className='main' id='main'>
      <div className='container-share' id='share'>
        <img className="foto-share" style={{ borderRadius: "100%" }} src={Foto} alt="" />
        <div className='name'>Warllei Martins</div>
        <span className="material-symbols-outlined points-share" style={{ backgroundColor: share ? '#97949485' : '#03030385' }} onClick={() => setShare(!share)}>
          share
        </span>
      </div>
      {
        share
          ?
          <div className='share-container-itens'>

            <LinkedinShareButton className='itens-share' url={'https://linktreew.netlify.app/'}>
              <LinkedinIcon size={40} round={true} />
              <span>Compartilhar no Linkedin</span>
            </LinkedinShareButton>

            <TelegramShareButton className='itens-share' url={'https://linktreew.netlify.app/'}>
              <TelegramIcon size={40} round={true} />
              <span>Compartilhar no Telegram</span>
            </TelegramShareButton>

            <FacebookShareButton className='itens-share' url={'https://linktreew.netlify.app/'}>
              <FacebookIcon size={40} round={true} />
              <span>Compartilhar no Facebook</span>
            </FacebookShareButton>

            <WhatsappShareButton className='itens-share' url={'https://linktreew.netlify.app/'}>
              <WhatsappIcon size={40} round={true} />
              <span>Compartilhar no Whatsapp</span>
            </WhatsappShareButton>

          </div>
          :
          false
      }
      <div className="main-conteiner-links">
        <img className="foto" src={Foto} alt="" />
        <div className="container-info">
          <h1>Warllei Martins</h1>
          <h3>Desenvolvedor</h3>
          <div className="container-itens">
            <a href="https://github.com/warlleism" target="_blank" rel="noreferrer">
              <img src={Github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/warllei-martins-823510153/" target="_blank" rel="noreferrer">
              <img src={Linkedin} alt="" />
            </a>
          </div>
        </div>
        <a className="itens" href="https://github.com/warlleism" target="_blank" rel="noreferrer">
          <img src={Github} alt="" />
          <span>Github</span>
        </a>
        <a className="itens" href="https://www.linkedin.com/in/warllei-martins-823510153/" target="_blank" rel="noreferrer">
          <img src={Linkedin} alt="" />
          <span>Linkedin</span>
        </a>
        <a className="itens" href="https://www.instagram.com/warlleimartins/" target="_blank" rel="noreferrer">
          <img src={Instagram} alt="" />
          <span>Instagram</span>
        </a>
        <a className="itens" href="https://portifoliowarllei.netlify.app/" target="_blank" rel="noreferrer">
          <img src={Search} alt="" />
          <span>Portifólio</span>
        </a>
      </div>
    </div>

  )
}

export default App
