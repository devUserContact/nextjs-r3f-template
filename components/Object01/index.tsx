import React, { useRef, useMemo } from "react";
import { useFrame, shaderMaterial  } from "@react-three/fiber";

import testVert from "../../shaders/testVert.vert";
import testFrag from "../../shaders/testFrag.frag";

export const Object01 = (props: any) => {
	
	const uniforms = useMemo (
	() => ({
		u_time: {
			value: 0.0,
		},
	 }),
	 []
	);

	const mesh: any = useRef();

	useFrame((state) => {
		const { clock } = state;
		mesh.current.material.uniforms.u_time.value = clock.getElapsedTime()
	});
	return (
		<mesh ref={mesh} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} >
			<boxGeometry args={[10, 10, 10, 16, 16, 2]} />
			<shaderMaterial
				fragmentShader={testFrag}
				vertexShader={testVert}
				uniforms={uniforms}
				wireframe
			/>
		</mesh>
	);
};
export default Object01;
