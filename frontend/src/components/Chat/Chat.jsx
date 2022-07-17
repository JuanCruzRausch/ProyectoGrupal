
import React from 'react'
import {useSelector} from "react-redux"
import {chat_header,
    chat_body, 
    inputRes,
    button,
    chat_footer,
    PyR_container,
    PyR_content,
    PyR_content_Pregunta,
    PyR_content_Respuesta,} from "./Chat.module.css"
import {
    Dark_PyR 
} from './DarkChat.module.css'
import { useDispatch } from 'react-redux';


export default function Chat({socket, _id, questions, product_seller_id}) {
    const mode = useSelector((state)=> state.darkMode)
    const { isdarkMode } = mode;
    const dispatch = useDispatch()
    const [chat, setChat] = React.useState([])
    const [message, setMessage] = React.useState({})
    const seller = useSelector(state => state.userReducer.seller)
    const user = useSelector( state => state.userReducer.user)
    const [coment, setComent] = React.useState ('')
    const [coments, setComents] = React.useState ([])
    const [tokenProductId, setTokenProductId] = React.useState('')
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
   
    React.useEffect(()=>{
        questions?.length? setChat([...questions]):null
    },[questions])

    React.useEffect(()=>{
        seller?setMessage({
            // _id: _id + chat.length,
            seller_id: seller?._id,
            data:""
        }):null
    },[seller])

    React.useEffect(()=>{
        socket.on("envio_front", (data)=>{
            const {_id, chat} = data
            setTokenProductId(_id)
            
            setChat( chat)
        })
        return () =>{socket.off()}
    },[chat])

    React.useEffect(()=>{
        setChat([])
    },[])

    React.useEffect(()=>{

        setChat
        return () =>{
            setChat([])
            socket.off()}
        
    },[])

    React.useEffect(()=>{
        setTokenProductId(_id)
    },[_id])

    const handleOnSubmitComent = (e, coment_id) => {
        e.preventDefault()
        const arr = [...chat]
        arr.forEach(message =>{
            if (message._id === coment_id){
                message.coments.push({
                    user_id: user?._id,
                    user_name: user?.name,
                    coment: message.coment,
                    date: new Date( Date.now()),
                    time: new Date( Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
                })
                message.coment = "";
            }
        })
            // dispatch(setChat(arr))
            socket.emit("comentarios", {_id, chat:arr})

    }
    const handleOnChangeComent = (value, coment_id) =>{
        setComent(value)
        chat.forEach(message =>{
            if (message._id === coment_id){
                message.coment=value
            }
        })
            setChat(chat)
        
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
            coment: "",
            [name]: value,
        })
    }

    const deleteMessage = (message_id) =>{
        const newChat = chat.filter(message => message._id!== message_id)
        socket.emit("comentarios", {_id, chat:newChat})
    }

    const deleteComent = (message_id, index) =>{
        let newMessage
        let arr = [...chat]
        arr.filter(message =>{
            if (message._id===message_id){
                newMessage = message.coments.filter((coment, id) => id !== index )
                message.coments = [...newMessage]
            }
        })
     
        socket.emit("comentarios", {_id, chat:[...arr]})
    }

    return (
    <div>
         <div className={isdarkMode ? Dark_PyR : PyR_container}>
             <h1>Preguntas y Respuestas</h1>
             <hr />
        <div className={chat_footer}>
        {
        user? 
        product_seller_id!==seller._id&&<form action="" onSubmit={(e)=> submitMessage(e)}>
            <input name="data" value={message?.data} onChange={(e)=>handleOnChange(e.target.name, e.target.value)}type="text" id="" />
            <button className={button} type="submit" >
                Preguntar
            </button>
        </form>
        :<p>
            Por favor Inicia sesión para dejar una pregunta
        </p>
        }
        </div>
            {chat?.map((message, index)=> ( 
             <div className={PyR_content}>
               {tokenProductId===_id &&  <div>
                   <div className={PyR_content_Pregunta}>
                        <p>{message.time}- {message?.name? message.name :"anonimo"} {message?.date.substring(0, 10)}</p>
                        <h3 >{message?.data}</h3>
                   </div>
                   {message?.coments?.map((coment, index)=>(
                        <div key={index} className={PyR_content_Respuesta}>
                            <p>
                                {coment.time}-{coment.user_name}
                            </p>
                            <h3>
                                {coment.coment}
                            </h3>
                        </div>
                    ))}
                    {
                        user ? (<div className={inputRes}>
                       <form action="" onSubmit={(e)=>handleOnSubmitComent(e, message._id)}>
                            <input name="coment" onChange={(e)=>handleOnChangeComent(e.target.value, message._id)} value={message.coment} />
                            <button type="submit" >Responder</button>
                         </form>
                   </div>)
                    : null
                    }
                </div>
               }
             </div>
        ))}
     </div>
       
    </div>
  )
}
