import { useGLTF } from '@react-three/drei'
import { useGraph } from '@react-three/fiber';
import React, { useMemo } from 'react'
import * as THREE from 'three'
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';


const ClothModel = (props) => 
{
    const {url,name,id} = props

    const {scene} =useGLTF(url);
    const clone = useMemo(()=>SkeletonUtils.clone(scene),[scene]);

    const {nodes} = useGraph(clone)

  return (
    <>
        
      <primitive object={clone}/>
    </>
  )
}

export default ClothModel
