import { useState } from 'react'
import data from '../data'

export default function Meme () {
  function getMeme (e) {
    const memes = data.data.memes
    const randomMeme = memes[Math.floor(Math.random() * memes.length)]
    console.log(randomMeme.url)
    // console.log('I was clicked')
  }

  const result = useState('hello')
  console.log(result)

  return (
    <main className='meme__container'>
      <div className='meme'>
        <input className='meme__input' type='text' placeholder='Top Text' />
        <input className='meme__input' type='text' placeholder='Bottom Text' />
        <button onClick={getMeme} className='meme__button brand-background'>
          Get a new meme image 🖼
        </button>
      </div>
      <img src='' alt='Your meme' />
    </main>
  )
}
