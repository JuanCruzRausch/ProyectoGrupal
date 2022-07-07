
import React from 'react'
import {useSelector} from "react-redux"
import SellerProfile from '../Seller/SellerProfile';
import {chat_header, chat_body, chat_footer} from "./Chat.module.css"
import { useDispatch } from 'react-redux';

export default function Chat({socket, _id}) {
    
    const dispatch = useDispatch()
    const recived = useSelector(state => state.interactionsReducer.chat)
    const [saludo, setSaludo] = React.useState({})
    const seller = useSelector(state => state.userReducer.seller)
    const mostrarComentarios = (e)=>{
        e.preventDefault()
        socket.emit("comentarios", saludo);
    };
    const setRecived = (data) =>{
        dispatch({type: "SET_CHAT", payload: data})
    }
    React.useEffect(()=>{
        seller?setSaludo({
            ...saludo, 
            idSeller: seller?._id,
            product_Id: _id
        }):null
    },[seller])

    React.useEffect(()=>{
        socket.on("envio_front", (data)=>{
            setRecived( data)
        })
    },[socket])

    const handleOnChange = (e) =>{
        
        setSaludo({
            ...saludo, 
            data:e.target.value,
            date: new Date( Date.now()),
            time: new Date( Date.now()).getHours() +
            ":" +
            new Date(Date.now()).getMinutes(),
        })
    }

    return (
    <div>
        <div className={chat_header}>
            Deja tu comentario
        </div>
        <div className={chat_body}>
            {[]?.map(comentarios=> 
            <div>
                {comentarios?._id===seller._id?<div className={seller_comentario}>{comentarios?.message}</div>:
                <div className={cliente_comentario}>{comentarios?.message}</div>}
            </div>)}
            {recived?.map(data=> <div><h1>{data.data}</h1></div>)}
        </div>
        <div className={chat_footer}>
            <form action="" onSubmit={(e)=> mostrarComentarios(e)}>
                <input onChange={(e)=>handleOnChange(e)}type="text" name="" id="" />

                <button type="submit" >
                    enviar
                </button>
            </form>
        </div>
    </div>
  )
}
