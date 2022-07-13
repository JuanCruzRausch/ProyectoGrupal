import React from 'react';
import arrow from '../../assets/img/leftarrow.png';
import Bucco from '../../assets/img/About/Bucco.jpeg'
import Luci from '../../assets/img/About/Luci.jpeg'
import fede from '../../assets/img/About/fede.jpg'
import joaco from '../../assets/img/About/joaco.jpg'
import cris from '../../assets/img/About/cris.jpg'
import juan from '../../assets/img/About/juan.jpg'
import javi from '../../assets/img/About/javi.jpg'
import { Detail_Links } from '../PerfilEditar/PerfilEditar.module.css';
import { DetailDark } from '../Terms/TermsDark.module.css';
import { AboutUs, AboutTeam, SingleContainer, GHyLDn, TextContainer, AboutUsDark} from './About.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import{ AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import { Helmet } from 'react-helmet-async';
function About() {
  const mode = useSelector((state) => state.darkMode);
  const { isdarkMode } = mode;
  return (
    <div>
      <Helmet>
        <title> ML7E Equipo</title>
      </Helmet>
      <div>
        <div className={isdarkMode ? DetailDark : Detail_Links}>
          <img src={arrow} alt="back" />
          <Link to="/">
            <h2>Home</h2>
          </Link>
        </div>
        <div className={isdarkMode ? AboutUsDark : AboutUs}>
          <h1>Conoce mas acerca de nuestro equipo de desarrollo</h1>
          <br /> <br />
          <h2>Equipo Back-end</h2>
          <div className={AboutTeam}>
            <div className={SingleContainer}>
              <div>
                <img src={cris}/>
              </div>
            <div className={TextContainer}>
                Cristhian Pineda
            <div className={GHyLDn}>
                <a href="https://www.linkedin.com/in/cristhian-oswaldo-pineda-burgos-841a5b235/" target="_blank"><AiFillLinkedin /> </a>
                <a href="https://github.com/cristhian0512" target="_blank"><AiFillGithub /></a>
            </div>
            </div>
            </div>
            <div className={SingleContainer}>
              <div>
                <img src={joaco}/>
              </div>
              <div className={TextContainer}>
                  Joaquín Monzón
                <div className={GHyLDn}>
                <a href="https://www.linkedin.com/in/joaquin-monzon-b02904235/" target="_blank"><AiFillLinkedin /></a>
                <a href="https://github.com/MonzonJoaquin" target="_blank"><AiFillGithub /></a>
                </div>
              </div>
            </div>
            <div className={SingleContainer}>
              <div>
                <img src={Bucco}/>
              </div>
              <div className={TextContainer}>
                Juan Buccolini
                <div className={GHyLDn}>
                  <a href="https://www.linkedin.com/in/juan-mateo-buccolini" target="_blank"><AiFillLinkedin /></a>
                  <a href="https://github.com/JMBuccolini" target="_blank"><AiFillGithub /></a>
                  </div>
              </div>
            </div>
            <div className={SingleContainer}>
              <div>
                <img src={juan}/>
              </div>
              <div className={TextContainer}>
                Juan Cruz Rausch
                <div className={GHyLDn}>
                  <a href="https://www.linkedin.com/in/juan-cruz-rausch-6321661b4" target="_blank"><AiFillLinkedin /></a>
                  <a href="https://github.com/JuanCruzRausch" target="_blank"><AiFillGithub /></a>
                  </div>
              </div>
            </div>
          </div>
          <h2>Equipo Front-end</h2>
          <div className={AboutTeam}>
            <div className={SingleContainer}>
              <div>
                <img src={javi}/>
              </div>
              <div className={TextContainer}>
                Javier Zapata
                <div className={GHyLDn}>
                  <a href="https://www.linkedin.com/in/javierzv777" target="_blank"><AiFillLinkedin /></a>
                  <a href="https://github.com/Javierzv777" target="_blank"><AiFillGithub /></a>
                  </div>
              </div>
            </div>
            <div className={SingleContainer}>
              <div>
                <img src={Luci}/>
              </div>
              <div className={TextContainer}>
                Luciana Zanetti
                <div className={GHyLDn}>
                  <a href="https://www.linkedin.com/in/luciana-zanetti-dev/" target="_blank"><AiFillLinkedin /></a>
                 <a href="https://github.com/LulaZeta" target="_blank"> <AiFillGithub /></a>
                  </div>
              </div>
            </div>
            <div className={SingleContainer}>
              <div>
                <img src={fede}/>
              </div>
              <div className={TextContainer}>
                Federico Carballo
                <div className={GHyLDn}>
                 <a href="https://www.linkedin.com/in/federico-concepcion-carballo-benitez/" target="_blank"> <AiFillLinkedin /></a>
                 <a href="https://github.com/FedeCarballo" target="_blank"> <AiFillGithub /></a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
