import React, { useState } from 'react'
import './Styles/Mergeview.css'
import { AvatarCreator } from '@readyplayerme/react-avatar-creator'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Cloth } from '.'
import { useLocation } from 'react-router-dom'

const Mergeview = (props) => {

    
  const { state } = useLocation()
  const { id } = state;
  
  const {AV_ID} = props
    //const [_Avatarid,_setAvatarId] = useState(null)
    const [_Avatarid,_setAvatarId] = useState(null)
    const [_showtxt,_setShow] = useState(true)
    const [_AvatarUrl,_setAvatarUrl] = useState('')
    if(id!=null)
    {
        _setAvatarId(id)
    }

  return (
    <div className='page'>
      <div className='app-title'>
            <img src='./imgAsserts/Logo/logoB.png' width={"30%"} height={"30%"}/>
        </div>
        {_Avatarid==null?
        <>
        {_showtxt?
        <>
        <div className='Mview2'> 
        <p className='t1'>No Personalized <br/>Avatar found<br/>Create Your Avatar</p>
        <br></br>
        <p className='btnExplore' onClick={()=>
        {
          _setShow(false)
        }}>Explore</p>
        </div>
        </>:
        <>
        <AvatarCreator subdomain='artista-vr' 
        onAvatarExported={(e)=>{
          console.log(e.data)
          console.log(e.data.url);
          _setShow(false)
          _setAvatarId(e.data.avatarId)
          _setAvatarUrl(e.data.url)

        }}  className='AvCreator'/>
        </>
        }
        </>:
        <>
        
        <div className='Mview'>
        <Canvas>
          <Environment preset='sunset'/>
          <OrbitControls/>
          <group scale={2.5} position={[0,-2,0]}>
          <Cloth url={_AvatarUrl}/>
          </group>
        </Canvas>
        </div>
        <div className='Bholder'>

        </div>
        </>}
    </div>
  )
}

export default Mergeview
