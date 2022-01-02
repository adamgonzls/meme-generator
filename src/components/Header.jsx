import trollFace from '../img/troll-face.svg'

export default function Header () {
  return (
    <header className='app-header brand-background'>
      <img
        className='app-header__icon'
        src={trollFace}
        alt='Troll face'
      />
      <h1 className='app-header__title'>Meme Generator</h1>
    </header>
  )
}
