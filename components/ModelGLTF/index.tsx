import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function ModelGLTF() {
  const { nodes, materials } = useGLTF("../../static/usrText.gltf");
  return (
    <>
      <group dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={nodes.Text.material}
        />
      </group>
    </>
  );
}
useGLTF.preload("../../static/usrText.gltf");
