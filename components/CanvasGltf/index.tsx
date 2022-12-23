import React, { Suspense, lazy, useMemo, useRef } from 'react'
import { shaderMaterial, useFrame} from '@react-three/fiber'
import { UniformsLib, UniformsUtils } from 'three'

import planeVert from '../../shaders/plane.vert'
import planeFrag from '../../shaders/plane.frag'
//import sphereVert from "../../shaders/sphere.vert";
//import sphereFrag from "../../shaders/sphere.frag";
//import ModelGLTF from '../ModelGLTF/index'
const ModelGLTF = lazy(() => import("../ModelGLTF"))

export const CanvasGltf = (props: any) => {
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
    //		mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
  })
  return (
    <>
      <Suspense fallback={null}>
        <pointLight position={[-10, 14, 8]} />
        <ModelGLTF /> 
        {/*
				<shaderMaterial
					vertexShader={planeVert}
					fragmentShader={planeFrag}
					uniforms={uniforms}
					lights={true}
					flatShading={true}
					fog={true}
				/>
          */}

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
      </Suspense>
    </>
  )
}
export default CanvasGltf
