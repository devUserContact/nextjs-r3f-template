import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ModelGLTF() {
  const { nodes, materials } = useGLTF('../../static/usrText.gltf')
  return (
    <>
      <mesh geometry={nodes.Text.geometry}>
        <meshStandardMaterial color='#00eedd' />
      </mesh>
    </>
  )
}
