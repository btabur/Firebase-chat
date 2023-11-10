import React from 'react'
import{signInWithPopup} from 'firebase/auth'
import {auth, provider} from './../firebase/config'

const AuthPage = ({setIsAuth}) => {


    const handleLogin =()=> {
        signInWithPopup(auth,provider)
        .then((res)=> {
            //oturumun açık olduğunu uygulamada yönetmek

            localStorage.setItem('token', res.user.refreshToken);
            //kullanıcı yetkili state ini true çekme
            setIsAuth(true)
        })
        .catch((err)=>console.log(err))
    }
  return (
    <div className='container'>
        <div className='auth'>
            <h1>Chat Odası</h1>
            <p>Devam etmek için giriş Yap</p>
            <button onClick={handleLogin}>
                <img src="/g-logo.png" alt="google" />
                <span>Google ile Giriş Yap</span>
            </button>
        </div>
    </div>
  )
}

export default AuthPage