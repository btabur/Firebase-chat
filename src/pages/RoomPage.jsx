import React from 'react'
import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth'


const RoomPage = ({setIsAuth,setRoom}) => {

    //* kullanıcının oturumunu sonlandırma

  const handleLogAuth = ()=> {
    //firebasse ile açtığımız oturumu sonlandırma
      signOut(auth).then (()=>{
        //localden kaldırma
        localStorage.removeItem('token')
        //login sayfasına yönledirme
        setIsAuth(false)
      })
  }
  const handleSubmit = (e)=> {
    e.preventDefault()
    const roomName = e.target[0].value.toLowerCase()
    setRoom(roomName)
  }
  return (
    <div>
         <form onSubmit={handleSubmit} className='room-page'>
        <h1>Chat Odası</h1>
        <p>Hangi Odaya Gireceksiniz</p>
        <input type="text" placeholder='Örn: HaftaSonu' />
        <button type='submit'>Odaya Gir</button>
        <button onClick={handleLogAuth} type='button'>Çıkış Yap</button>
      </form>
    </div>
  )
}

export default RoomPage