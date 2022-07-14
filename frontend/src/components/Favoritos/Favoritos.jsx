import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FavContainer,
  FavDiv,
  ItemsContainer,
  Gratis,
  NotLoggin,
  meme,
} from './Favoritos.module.css';
import {
  ItemsContainer_SingleItem,
  EliminarItem,
} from '../Cart/Cart.module.css';
import { DeleteFromFav } from '../../redux/actions/FavActions';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../Auth0/login';
import { Helmet } from 'react-helmet-async';
function Favoritos() {
  const dispatch = useDispatch();
  JSON.parse(localStorage.getItem('favs'));
  const FavState = useSelector((state) => state.FavReducer.Favs);
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
      <Helmet>
        <title> ML7E Favoritos</title>
      </Helmet>
      <div className={FavContainer}>
        <div className={FavDiv}>
          {isAuthenticated ? (
            <div>
              <h1> Favoritos</h1>
              <hr />
              {FavState.length > 0 ? (
                <div className={ItemsContainer}>
                  {FavState.map((e, i) => (
                    <div className={ItemsContainer_SingleItem} key={i}>
                      <img src={e.thumbnail} alt={e.title} />
                      <h1>{e.title}</h1>
                      <h2>${e.price}</h2>
                      <h2>{e.province}</h2>
                      {e.freeShipping == true ? (
                        <h2 className={Gratis}>Envio Gratuito</h2>
                      ) : null}
                      {e.condition == 'new' ? <h2>Nuevo</h2> : <h2>Usado</h2>}
                      <button
                        className={EliminarItem}
                        onClick={() => dispatch(DeleteFromFav(e.product))}
                      >
                        Eliminar
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <h2 className={meme}>
                  Aun no tienes favoritos
                </h2>
              )}
            </div>
          ) : (
            <div className={NotLoggin}>
              <img src="https://i.imgflip.com/6lodcg.jpg" alt="meme" />
              <h1>Por favor Inicia sesion para ver tus favoritos</h1>
              <LoginButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Favoritos;
