import { useState } from 'react'
import memesData from '../data'

export default function Meme () {
  const [allMemeImages, setAllMemeImages] = useState(memesData) 

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bik.jpg"
  })

  function getMemeImage () {
    const memesArray = allMemeImages.data.memes
    const randomMeme = memesArray[Math.floor(Math.random() * memesArray.length)].url
    console.log(randomMeme)
    setMeme(prevData => ({
      ...prevData,
      randomImage: randomMeme
    }))
  }

  return (
    <main className='meme__container'>
      <div className='meme'>
        <input className='meme__input' type='text' placeholder='Top Text' />
        <input className='meme__input' type='text' placeholder='Bottom Text' />
        <button onClick={getMemeImage} className='meme__button brand-background'>
          Get a new meme image 🖼
        </button>
      </div>
      <img className="meme__image" src={meme.randomImage} alt='Your meme' />
    </main>
  )
}
