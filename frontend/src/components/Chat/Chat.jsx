
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


export default function Chat({socket, _id, questions}) {
    
    const dispatch = useDispatch()
    const chat = useSelector(state => state.interactionsReducer.chat)
    const [message, setMessage] = React.useState({})
    const seller = useSelector(state => state.userReducer.seller)
    const [coment, setComent] = React.useState ('')
    const [coments, setComents] = React.useState ([])
    const sendMessage = ()=>{
         socket.emit("comentarios", {_id, chat: [...chat, message]});
            setMessage({...message, data:"", coment:""})
    };

    const submitMessage = (e) => {
        e.preventDefault()
        if(message.data!==""){

            sendMessage()
        }
    }
    const setChat = (data) =>{
         dispatch({type: "SET_CHAT", payload: data})
         
    }
    React.useEffect(()=>{
        questions?.length? setChat([...questions]):null
    },[questions])

    React.useEffect(()=>{
        seller?setMessage({
            _id: _id + chat.length,
            seller_id: seller?._id,
            data:""
        }):null
    },[seller])

    React.useEffect(()=>{
        socket.on("envio_front", (data)=>{
            setChat( data)
        })
        return () =>{socket.off()}
    },[chat])

    const handleOnSubmitComent = (e, coment_id) => {
        e.preventDefault()
        const arr = [...chat]
        arr.forEach(message =>{
            if (message._id === coment_id){
                message.coments.push(message.coment)
                message.coment = "";
            }
        })
            // dispatch(setChat(arr))
            socket.emit("comentarios", {_id, chat:arr})

    }
    const handleOnChangeComent = (value, _id) =>{
        setComent(value)
        chat.forEach(message =>{
            if (message._id === _id){
                message.coment=value
            }
        })
            dispatch(setChat(chat))
        
    }
    const handleOnChange = (name, value) =>{
        
        setMessage({
            ...message, 
            _id: _id + chat.length,
            product_id: _id,
            name: seller?.user?.name? seller.user.name: null,
            date: new Date( Date.now()),
            time: new Date( Date.now()).getHours() +
            ":" +
            new Date(Date.now()).getMinutes(),
            coments:[],
            coment: '',
            [name]: value,
        })
    }

    return (
    <div>
         <div className={PyR_container}>
             <h1>preguntas y respuestas</h1>
             <hr />
        <div className={chat_footer}>
            <form action="" onSubmit={(e)=> submitMessage(e)}>
                <input name="data" value={message?.data} onChange={(e)=>handleOnChange(e.target.name, e.target.value)}type="text" id="" />
                <br />
                <button className={button} type="submit" >
                    Preguntar
                </button>
            </form>
        </div>
           
            {chat?.map((message, index)=> ( 
             <div className={PyR_content}>
               {message?.seller_id===seller._id?
               <div>
                   <p>{message.time}- {message?.name? message.name :"anonimo"}</p>
                   <h3 className={PyR_content_Respuesta}>{message?.data}</h3>
                   {message?.coments?.map((coment)=>(
                            <div>
                                <p>
                                    {coment}
                                </p>
                            </div>
                        ))}
                   <form action="" onSubmit={(e)=>handleOnSubmitComent(e, message._id)}>
                        <input name="coment" onChange={(e)=>handleOnChangeComent(e.target.value, message._id)} value={message.coment} />
                      

                        <button type="submit" >Responder</button>

                   </form>
                </div>:
               <div>
                   <p>{message.time}- {message?.name? message.name :"anonimo"}</p>
                   <h3 className={PyR_content_Pregunta}>{message?.data}</h3>
                </div>
               }
             </div>
)    )}
     </div>
       
    </div>
  )
}
