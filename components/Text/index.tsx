import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text3D, Center } from '@react-three/drei'

import myFont from '../../static/UncutSans_Regular.json'

export const Text = (props: any) => {
  const mesh: any = useRef()

  useFrame((state) => {
    const { clock } = state
    //    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime()
  })
  return (
    <>
      <pointLight position={[-10, 14, 8]} />
      <Center center>
        <Text3D font={myFont} size={1}>
          devUserContact
          <meshToonMaterial
            color={0x00ffdd}
            transparent={true}
            opacity={0.8}
            wireframe={false}
            fog={true}
          />
        </Text3D>
      </Center>
    </>
  )
}
export default Text
