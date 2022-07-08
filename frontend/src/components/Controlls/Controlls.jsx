import React from 'react'
import {controllsContainer,ControllsDark, Controll} from './Controlls.module.css'
import home from '../../assets/img/home.png'
import heart from '../../assets/img/heart.png'
import cart from '../../assets/img/cartICON.png'
import user from '../../assets/img/user.png'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Controlls() {
const mode = useSelector((state)=> state.darkMode)
  const { isdarkMode } = mode;
  return (

    <div className={isdarkMode ? ControllsDark : controllsContainer}>
        <div className={Controll}>
            <Link to="/">
                <img src={home} alt="home"/>
            </Link>
        </div>
        <div className={Controll}>
            <Link to="/favoritos">
                <img src={heart} alt="favs"/>
                </Link>
        </div>
        <div className={Controll}>
            <Link to="/cart">
                <img src={cart} alt="cart" />
                </Link>
        </div>
        <div className={Controll}>
            <Link to="/perfil">
                <img src={user} alt="profile"/>
            </Link>
        </div>
    </div>
  )
}

export default Controlls