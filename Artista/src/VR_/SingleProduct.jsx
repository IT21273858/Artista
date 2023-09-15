import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../VR_/Styles/SingleProduct.css'
import { easeInOut, motion } from "framer-motion"
import { Cloth } from '.'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PresentationControls } from '@react-three/drei'




const SingleProduct = () => {

    const { state } = useLocation(); 
    const { id } = state;
    const [_isOpen,_setIsOpen] =useState(false);
    const to =useNavigate();
    useEffect(()=>
    {
        console.log("Click ",_isOpen)

    },[_isOpen])



    console.log(id) 


  return (
    <>
    <div className='page'>

        <div className='app-title'>
            <img src='./imgAsserts/Logo/logoB.png' width={"30%"} height={"30%"}/>
        </div>

        <motion.div className='product-view' animate={{
            height:_isOpen?800:1200}}
            transition={{easings:[easeInOut]}}>
        <Canvas>
                <Environment preset='sunset'/>
                <OrbitControls enablePan={false} rotateSpeed={0.5} enableZoom={false}/>
                <group scale={3} position={[0,-2,0]}>
                    <Cloth url={id}/>
                </group>
               
            </Canvas> 
        </motion.div>


        <motion.div className='button' onClick={()=>
        {
            console.log("helo");
            if(_isOpen)
            {
                _setIsOpen(false)
            }
            else
            {
                _setIsOpen(true)
            }
        }} animate={{
            height:_isOpen?300:100
        }} transition={{easings:[easeInOut]}}>
            
            {_isOpen?
            <div onClick={()=>{
                console.log("go to")
            }}>
                <div className='btnMerge' onClick={()=>
                {
                    to('/Merge',{state:{id:'6504b575682fb1a37112d223'}})
                }}>
                    <p>Merge</p>
                </div>
            
            </div>:
            <h1>Press to Open</h1>
            }
            
            
        </motion.div>



        

    </div>
      
    </>
  )
}

export default SingleProduct
