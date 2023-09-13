import { useState } from 'react'
import { AvatarCreator } from '@readyplayerme/react-avatar-creator'
import { Avatar } from "@readyplayerme/visage";

function App() {
  const [count, setCount] = useState(0)
  const [avatarUrl, setAvatarUrl] = useState('');
  return (
    <>
      <AvatarCreator  subdomain="artista" onAvatarExported={(event)=>{
console.log(event.data.url);
setAvatarUrl(event.data.url) 
      }} className='fixed top-0 left-0 z-10 w-screen h-screen'/>

      { avatarUrl && <Avatar modelSrc={avatarUrl} />}

    </>
  )
}

export default App
