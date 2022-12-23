import React, { useMemo, useRef } from 'react'
import { shaderMaterial, useFrame } from '@react-three/fiber'
import { UniformsLib, UniformsUtils } from 'three'

import planeVert from '../../shaders/plane.vert'
import planeFrag from '../../shaders/plane.frag'
//import sphereVert from "../../shaders/sphere.vert";
//import sphereFrag from "../../shaders/sphere.frag";

export const Geometry = (props: any) => {
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
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime()
  })
  return (
    <>
      <pointLight position={[-10, 14, 8]} />

      <mesh
        ref={mesh}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2.5]}
      >
        <boxGeometry args={[10, 10, 10, 32, 32, 32]} />
        <shaderMaterial
          vertexShader={planeVert}
          fragmentShader={planeFrag}
          uniforms={uniforms}
          lights={true}
          flatShading={true}
          fog={true}
        />
      </mesh>

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
export default Geometry
