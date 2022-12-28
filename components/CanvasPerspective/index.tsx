import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

//import Geometry from "../Geometry";
//import Particles from "../Particles";
import Gltf from '../Gltf'

import styles from '../../styles/Main.module.scss'

const CanvasPerspective = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <color attach='background' args={['lightgrey']} />
      <Gltf />
{/*
			<Particles />
			<Geometry />
*/}
      <OrbitControls />
    </Canvas>
  )
}

export default CanvasPerspective
