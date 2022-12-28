import React, { Suspense, lazy } from 'react'
//import ModelGLTF from '../ModelGLTF/index'
const GltfLoad = lazy(() => import('../GltfLoad'))

export const Gltf = (props: any) => {
  return (
    <>
      <pointLight position={[-10, 14, 8]} />
      <pointLight position={[10, 14, 8]} />
      <GltfLoad />
    </>
  )
}
export default Gltf
