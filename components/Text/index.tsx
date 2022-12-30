import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text3D, Center, Edges } from '@react-three/drei'

export const Text = (props: any) => {
  const mesh: any = useRef()

  useFrame((state) => {
  })
  return (
    <>
      <pointLight position={[-10, 14, 8]} />
      <mesh position={[-3, 1, 0]}>
        <Text3D font='/UncutSans_Regular.json' lineHeight={0.7} size={1} dispose={null}>
          {`dev\nUser\nContact`}
          <meshToonMaterial
            color={0x00ffdd}
            transparent={true}
            opacity={0.9}
            wireframe={false}
          />
          <Edges color='black' />
        </Text3D>
      </mesh>
    </>
  )
}
export default Text
