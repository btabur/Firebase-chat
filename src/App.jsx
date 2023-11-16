import React, { useState } from 'react'
import AuthPage from './pages/AuthPage'
import { auth } from './firebase/config'
import { signOut } from 'firebase/auth'
import RoomPage from './pages/RoomPage'
import Chat from './pages/Chat'


const App = () => {
  //kullanıcının yetkisi var mı?
  //state in ilk değerini localstorage den alacağız

  const [isAuth,setIsAuth] = useState(localStorage.getItem('token'))
  const [room,setRoom]=useState(null)


  

  if(!isAuth) {
    return <AuthPage setIsAuth = {setIsAuth}/>
  }
  return (
    <div className='container'>
     {room ? (  //oda belirlendi ise chat sayfasına yönlendirir
      <Chat room ={room} setRoom={setRoom} />
     ):( //oda belirlemedi ise oda seç sayfasına yönlendirir
     <RoomPage setIsAuth={setIsAuth} setRoom={setRoom} />)}
    </div>
  )
}

export default App