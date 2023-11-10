import React, { useState } from 'react'
import AuthPage from './pages/AuthPage'

const App = () => {
  //kullanıcının yetkisi var mı?
  //state in ilk değerini localstorage den alacağız

  const [isAuth,setIsAuth] = useState(localStorage.getItem('token'))

  if(!isAuth) {
    return <AuthPage setIsAuth = {setIsAuth}/>
  }
  return (
    <div className='container'>
      <form>
        <h1>Chat Odası</h1>
        <p>Hangi Odaya Gireceksiniz</p>
      </form>
    </div>
  )
}

export default App