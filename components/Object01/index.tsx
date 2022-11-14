import React, { useRef, useCallback } from "react";
import { useFrame, shaderMaterial  } from "@react-three/fiber";

import testVert from "../../shaders/testVert.vert";
import testFrag from "../../shaders/testFrag.frag";

export const Object01 = (props: any) => {
	const mesh: any = useRef();

	//	useFrame((state, delta) => {
	//
	//	});
	return (
		<mesh ref={mesh} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} >
			<planeGeometry args={[20, 20, 16, 16]} />
			<shaderMaterial
				fragmentShader={testFrag}
				vertexShader={testVert}
				wireframe
			/>
		</mesh>
	);
};
export default Object01;
