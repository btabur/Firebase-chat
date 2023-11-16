import React from 'react'
import { auth } from '../firebase/config'

const Message = ({data}) => {
    //mesajı atan kğişinin oturumu açık olan kişinin id sine eşit ise 
   
    if(auth.currentUser.uid === data.author.uid) {
        return <div className='msg-user'>
            {data.text}
        </div>
    }

    //mesajı başka biri attı ise 
  return (
    <div className='msg-other'>
        <p className='user-info'>
            <img src={data.author.photo} alt="" /> 
            <span>{data.author.name}:</span> 
        </p>
       
        <p className='msg-text'>
           
            {data.text}
        </p>
    </div>
  )
}

export default Message