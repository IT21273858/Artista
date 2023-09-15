import React, { useEffect, useState,Suspense} from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AvatarCreator } from '@readyplayerme/react-avatar-creator'
import { Sphere, Text } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Interactive, XR, ARButton, Controllers, useXR } from '@react-three/xr'

function Sample() {
  const [count, setCount] = useState(0);


  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const apiKey = 'sk_live_fgB_1IwoMMLqcyTiNabNpIutlS-NHawF0bik'; // Replace with your API key
    const endpoint = 'https://api.readyplayer.me/v1/assets?organizationId=65021037dd5695033982b96e'; // Replace with the appropriate API endpoint

    // Set up Axios headers with your API key
    const headers = {
      'X-API-ID': "sk_live_fgB_1IwoMMLqcyTiNabNpIutlS-NHawF0bik"
      //'x-api-id': "sk_live_fgB_1IwoMMLqcyTiNabNpIutlS-NHawF0bik"
    };

    // Make the Axios GET request
    axios
      .get(endpoint,{
        headers: {
          'X-API-KEY': 'sk_live_fgB_1IwoMMLqcyTiNabNpIutlS-NHawF0bik',
          'X-APP-ID':'6502103dd716cb0fdae70248'
        }
       })
      .then((response) => {
        if (response.status === 200) {
          // Handle the successful response
          //setAssets(response.data); // Assuming the response is an array of assets
          console.log(response.data)
        } else {
          // Handle errors here
          console.error('Errorh:', response.status, response.data);
        }
      })
      .catch((error) => {
        // Handle network errors or other exceptions
        console.error('Error:', error);
      });
  }, []);

  function Box({ color, size, scale, children, ...rest }) {
    return (
      <mesh scale={scale} {...rest}>
        <mesh
      

      >
      <boxGeometry args={[10,10,10]} />
      <meshStandardMaterial />
    </mesh>
        {children}
      </mesh>
    )
  }


  function Button(props) {
    const [hover, setHover] = useState(false)
    const [color, setColor] = useState('blue')
    const xr =useXR();

    useFrame(()=>
    {
      console.log("hello"+xr.controllers.toString)
    })
  
    const onSelect = () => {
      setColor((Math.random() * 0xffffff) | 0)
    }
    return (
      <Interactive onHover={() => setHover(true)} onBlur={() => setHover(false)} onSelect={onSelect}>
        <Box color={color} scale={hover ? [50,50,50] : [50,50,50]} size={[0.4, 0.1, 0.1]} {...props}>
          <Suspense fallback={null}>
            <Text position={[0, 0, 0]} fontSize={0.05} color="#000000" anchorX="center" anchorY="middle">
              Hello react-xr!
            </Text>
          </Suspense>
        </Box>
      </Interactive>
    )
  }


  return (
    <>
      {/*<h1 className="text-3xl font-bold underline">
      Welcome artista-Ar
      </h1>*/
      }

      {/*
  <AvatarCreator subdomain='artista-vr' onAvatarExported={(e)=>{
    console.log(e.data.url);
  }} className='fixed top-0 left-0 z-10 h-screen w-screen'/>
*/}
{/*<div >
      <h1>Ready Player Me Assets</h1>
      <ul>
        {assets.map((asset) => (
          <li key={asset.id}>
            <img src={asset.url} alt={asset.name} />
          </li>
        ))}
      </ul>
    </div>*/}
     <ARButton />
      <Canvas>
        <XR referenceSpace="local">
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Button position={[0, 0.1, -0.2]} />
          <Controllers />
          <mesh>
            <boxGeometry  scale={[20,20,20]}/>
            <meshBasicMaterial color="blue" />
          </mesh>
        </XR>
      </Canvas>

    </>
  )
}

export default Sample
