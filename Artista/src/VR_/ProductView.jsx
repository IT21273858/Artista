import React, { useState } from 'react'
import '../VR_/Styles/ProductView.css'
import {Center, Environment, Html, OrbitControls, PresentationControls, ScrollControls} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import axios from 'axios';
import { Cloth } from '.';
import { Outlet, Link,useNavigate } from "react-router-dom";

const ProductView = () => {

    //models of the products
    const [_models,setModels] = useState([]);
    const [modelurl,setUrl] = useState('');
    const to =useNavigate();

    
    const apiKey = 'sk_live_fgB_1IwoMMLqcyTiNabNpIutlS-NHawF0bik'; 
    const endpoint = 'https://api.readyplayer.me/v1/assets';
    const appid='6502103dd716cb0fdae70248'
    const orgid = '65021037dd5695033982b96e'


    const headers = {
        headers: {
            'X-API-KEY': apiKey,
            'X-APP-ID':appid
          }
    }


  


    //geting all models
    axios.get(endpoint,headers).then
    (
        (response)=>
        {
            if(response.status==200)
            {
                const ModelList = []
                //console.log(response.data.data.map((i)=>
                //{
                   // ModelList.push(i.modelUrl)
                //}))
                
                //console.log("before");
                //console.log("model",ModelList)
                
                //console.log("set models",_models);
                console.log(response.data.data)
            }
            else
            {
                console.error('Errorh:', response.status, response.data);
            }
        }
    ).catch((err)=>
    {
        console.error('error',err);
    });

    


  return (
    <>
   
    <div className='page'>
        <div className='app-name-container'>
            <img src='./imgAsserts/Logo/logoB.png' width={"30%"} height={"30%"}/>
        </div>



        <div className='nav_bar'>
            <div className='nav_items'>
                <p>MENS</p>
                <div className=' w-20 h-2 rounded-2xl bg-teal-800'>
                </div>
            </div>
            <div className='nav_items'>
                <p>WOMENS</p>
                <div className=' w-20 h-2 rounded-2xl bg-teal-800'>
                </div>
            </div>
            <div className='nav_items'>
                <p>KIDS</p>
                <div className=' w-20 h-2 rounded-2xl bg-teal-800'>
                </div>
            </div>
        </div> 

        <div className='Page-title'>
           <p>Mens Wears</p>
        </div>
        



        <div className='scroll-container'>
            <div style={{height:"100%",width:"max-content",border:"4px solid blue", position:"relative",display:"flex",flex:1,justifyContent:"space-between"}}>
                <div className='scroll-items' onClick={()=>{to('/Product',{ state: { id: 'https://www.datocms-assets.com/36636/1674641405-outfit-blackfriday-vrgamer-v2-f.glb'} })}}>
                    <Canvas> 
                        <Environment preset='sunset'/>
                        <group scale={3} position={[0,-2,0]}>
                        <PresentationControls>
                        <Cloth url={'https://www.datocms-assets.com/36636/1674641405-outfit-blackfriday-vrgamer-v2-f.glb'}/>
                        </PresentationControls>
                        </group>
                    </Canvas>

                </div>
                <div className='scroll-items'>

                </div>
                <div className='scroll-items'>

                </div>
                <div className='scroll-items'>

                </div>
                <div className='scroll-items'>

                </div>
            </div>
        </div> 



        <div className='Products-up-container'>
            <div style={{height:"max-content",width:"100%",border:"4px solid black",display:"flex",flex:1,top:0,position:"relative",justifyContent:"first baseline",flexDirection:"column",alignItems:"center"}}>

            
            <div className='product-large-card'>
                <div className='product-large-card-up'>

                </div>
                <div className='product-large-card-down'>
                <p style={{fontSize:"40px",paddingLeft:"20px"}}>Name of the dress</p>
                </div>
            </div>

            <div className='product-large-card'>
                <div className='product-large-card-up'>

                </div>
                <div className='product-large-card-down'>
                <p style={{fontSize:"40px",paddingLeft:"20px"}}>Name of the dress</p>
                </div>
            </div>

            <div className='product-large-card'>
                <div className='product-large-card-up'>

                </div>
                <div className='product-large-card-down'>
                <p style={{fontSize:"40px",paddingLeft:"20px"}}>Name of the dress</p>
                </div>
            </div>

            

            
            
            </div>
        </div>


    </div>
    <Outlet/>
    </>
  )
}

export default ProductView
