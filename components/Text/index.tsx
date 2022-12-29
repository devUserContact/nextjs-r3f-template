import React, { useMemo, useRef } from 'react'
import { shaderMaterial, useFrame } from '@react-three/fiber'
import { UniformsLib, UniformsUtils } from 'three'
import { Text3D, Center } from '@react-three/drei'

import myFont from '../../static/UncutSans_Regular.json'

import textVert from '../../shaders/text.vert'
import textFrag from '../../shaders/text.frag'

export const Text = (props: any) => {
  var uniforms = UniformsUtils.merge([
    UniformsLib['lights'],
    {
      u_time: { value: 0.0 },
      lightIntensity: { value: 0.3 },
      diffuse: { value: [0.2, 0.8, 0.6] },
    },
  ])

  const mesh: any = useRef()

  useFrame((state) => {
    const { clock } = state
    //    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime()
  })
  return (
    <>
      <pointLight position={[-10, 14, 8]} />
      <Center top >
      <Text3D font={myFont} size={1}>
        devUserContact
        <meshToonMaterial color={0x00ffff}/>
      </Text3D>
      </Center>

      {/*
			<mesh ref={mesh} position={[0, 0, 0]}>
				<sphereGeometry args={[4, 16, 8]} />
				<shaderMaterial
					vertexShader={sphereVert}
					fragmentShader={sphereFrag}
					uniforms={uniforms}
					lights={true}
					flatShading={true}
					fog={true}
				/>
			</mesh>
        */}
    </>
  )
}
export default Text
