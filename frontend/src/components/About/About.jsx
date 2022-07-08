import React from 'react'
import arrow from '../../assets/img/leftarrow.png'
import { Detail_Links } from "../PerfilEditar/PerfilEditar.module.css";
import {DetailDark} from '../Terms/TermsDark.module.css'
import {AboutUs,AboutTeam} from './About.module.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function About() {
  const mode = useSelector((state)=> state.darkMode)
    const { isdarkMode } = mode;
  return (
    <div>
      <div className={isdarkMode? DetailDark : Detail_Links}>
        <img src={arrow} alt="back" />
        <Link to="/">
          <h2>Home</h2>
        </Link>
      </div>
      <div className={AboutUs}>
        <h1>Conoce mas acerca de nuestro equipo de desarrollo</h1>
        <br /> <br />
        <h2>Equipo Back-end</h2>
        <div className={AboutTeam}>
          <div>
            <div>
              image
            </div>
            <div>
              Cristhian Pineda
                <div>
              
                </div>
            </div>
          </div>
          <div>
          <div>image</div>
            <div>
            Joaquín Monzón
              <div></div>
            </div>
          </div>
          <div>
          <div>image</div>
            <div>
            Juan Buccolini
              <div></div>
            </div>
          </div>
          <div>
          <div>image</div>
            <div>
            Juan Cruz Rausch
              <div></div>
            </div>
          </div>
        </div>
        <h2>Equipo Front-end</h2>
        <div className={AboutTeam}>
          <div>
          <div>image</div>
            <div>
              Javier Zapata
              <div></div>
            </div>
          </div>
          <div>
          <div>image</div>
            <div>
              Luciana Zanetti
              <div></div>
            </div>
          </div>
          <div>
          <div>image</div>
            <div>
              Federico Carballo
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About