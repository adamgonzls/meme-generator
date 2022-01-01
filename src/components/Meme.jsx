export default function Meme() {
  const something = "word"
  
  return (
    <form className="meme">
      <div className="meme__input-row">
        <input className="meme__input" type="text" placeholder="Top Text"/>
        <input className="meme__input" type="text" placeholder="Bottom Text"/>
      </div>
      <button className="meme__button brand-background">Get a new meme image 🖼</button>
    </form>
  )
}