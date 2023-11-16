import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase/config'
import { addDoc, collection,onSnapshot,serverTimestamp,query,orderBy,where } from 'firebase/firestore'
import Message from '../components/Message'

const Chat = ({room,setRoom}) => {
  //collecsionun referansını alma

  const messegasRef=collection(db,"messages")
  const [messages,setMessages]=useState([])

  const handleSubmit = async (e)=> {
    e.preventDefault()
    const text = e.target[0].value
    //veritabanına yeni doküman ekler
    await addDoc(messegasRef,{
      text,
      room,
      author:{
        name:auth.currentUser.displayName,
        uid:auth.currentUser.uid,
        photo:auth.currentUser.photoURL
      },
      createdAt: serverTimestamp(),  //sunucunun zamanını alır
    })
    e.target[0].value = ""
  }
  //collection daki değişimi canlı olarak izleme
  useEffect(()=> {
    //filtreleme ayarları
   const options =  query(messegasRef,
      where('room' , '==' , room),
    orderBy('createdAt' , 'asc'))
    //kolaksiyon her değiştiğinde bir fonklsiyon çalıştırıp 
    // fonksiyona güncel dokümanları parametre olarak gönderir
    const unSubscripe = onSnapshot(options,(snapshot)=> {
      //mesajları state den önce geçici olarak tuttuğumuz dizi
      const tempData = []
      //doc ların verilerine erişip yeni diziye gönderiyoruz
      //! map ile döndüğümüz de hatalar oluşabiliyor foreach ile dönüp ayrı bir diziye atmamız önemli
      snapshot.docs.forEach((doc)=> tempData.push(doc.data()))
      //state e verileri kaydediyoruz
      setMessages(tempData)
    })
    //bileşenden ayrıldığında collecsiyona abonelik sona erdilirir gereksiz yere izlemez
    return ()=> unSubscripe();
  },[])
  return (
    <div className='chat'>
      <header>
        <p>{auth?.currentUser?.displayName}</p>
        <p>{room}</p>
        <button onClick={()=> setRoom(null)}>Farklı Oda</button>
      </header>
      <main>
        {messages?.map((data,i)=>(
          <Message key={i}  data = {data}/>
        ) )}
      </main>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Mesajınızı Yazınız'  required/>
        <button>Gönder</button>
      </form>

    </div>
  )
}

export default Chat