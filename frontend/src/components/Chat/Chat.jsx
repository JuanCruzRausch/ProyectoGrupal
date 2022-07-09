
import React from 'react'
import {useSelector} from "react-redux"
import SellerProfile from '../Seller/SellerProfile';
import {chat_header,
    chat_body, 
    button,
    chat_footer,
    PyR_container,
    PyR_content,
    PyR_content_Pregunta,
    PyR_content_Respuesta,} from "./Chat.module.css"
import { useDispatch } from 'react-redux';

export default function Chat({socket, _id}) {
    
    const dispatch = useDispatch()
    const recived = useSelector(state => state.interactionsReducer.chat)
    const [saludo, setSaludo] = React.useState({})
    const seller = useSelector(state => state.userReducer.seller)
   
    const mostrarComentarios = (e)=>{
        e.preventDefault()
        if(saludo.data!==""){
            socket.emit("comentarios", saludo);
            setSaludo({...saludo, data:''})
        }
    };
    const setRecived = (data) =>{
        dispatch({type: "SET_CHAT", payload: data})
    }
    React.useEffect(()=>{
        seller?setSaludo({
            ...saludo,
            room: _id, 
            seller_id: seller?._id,
            product_Id: _id
        }):null
    },[seller])

    React.useEffect(()=>{
        socket.on("envio_front", (data)=>{
            setRecived( data)
        })
        return () =>{socket.off()}
    },[recived])

    const handleOnChange = (e) =>{
        
        setSaludo({
            ...saludo, 
            name: seller?.user?.name? seller?.user?.name: null,
            data:e.target.value,
            date: new Date( Date.now()),
            time: new Date( Date.now()).getHours() +
            ":" +
            new Date(Date.now()).getMinutes(),
        })
    }

    return (
    <div>
      
         <div className={PyR_container}>
             <h1>preguntas y respuestas</h1>
             <hr />
        <div className={chat_footer}>
            <form action="" onSubmit={(e)=> mostrarComentarios(e)}>
                <input  value={saludo.data} onChange={(e)=>handleOnChange(e)}type="text" name="" id="" />
                <br />
                <button className={button} type="submit" >
                    Preguntar
                </button>
            </form>
        </div>
           
            {recived?.map(data=> ( 
             <div className={PyR_content}>
               {data.seller_id===seller._id?
               <div>
                   <p>{data.time}- {data?.name? data.name :"anonimo"}</p>
                   <h3 className={PyR_content_Respuesta}>{data.data}</h3>
                </div>:
               <div>
                   <p>{data.time}- {data?.name? data.name :"anonimo"}</p>
                   <h3 className={PyR_content_Pregunta}>{data.data}</h3>
                </div>
               }
             </div>
)    )}
     </div>
       
    </div>
  )
}
