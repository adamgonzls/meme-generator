import { useState } from 'react'
import memesData from '../data'

export default function Meme () {
  
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/2wifvo.jpg"
  })
  
  const [allMemeImages, setAllMemeImages] = useState(memesData)

  function getMemeImage () {
    const memesArray = allMemeImages.data.memes
    const randomMemeImage = memesArray[Math.floor(Math.random() * memesArray.length)].url
    setMeme(prevData => ({
      ...prevData,
      randomImage: randomMemeImage
    }))
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  return (
    <main className='container'>
      <div className='form'>
        <input 
          className='form__input' 
          type='text' 
          placeholder='Top Text' 
          name='topText'
          value={meme.topText}
          onChange={handleChange}
        />
        <input 
          className='form__input' 
          type='text' 
          placeholder='Bottom Text' 
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button 
          onClick={getMemeImage} className='form__button brand-background'>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img className="meme__image" src={meme.randomImage} alt='Your meme' />
        <h2 className='meme__text top'>{meme.topText}</h2>
        <h2 className='meme__text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  )
}
