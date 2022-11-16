import React, { useRef, useMemo } from "react";
import { useFrame, shaderMaterial } from "@react-three/fiber";
import { UniformsUtils, UniformsLib } from "three";

import testVert from "../../shaders/testVert.vert";
import testFrag from "../../shaders/testFrag.frag";

export const Object01 = (props: any) => {

	var uniforms = UniformsUtils.merge([
		UniformsLib['lights'],
		{
			u_time: { value: 0.0 },
			diffuse: {type: 'c', value: [0.0,0.20,0.80]}
		},
	]);
	//	const uniforms = useMemo(
	//		() => ({
	//			u_time: {
	//				value: 0.0,
	//			},
	//		}),
	//		[]
	//	);

	const mesh: any = useRef();

	useFrame((state) => {
		const { clock } = state;
		mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
	});
	return (
		<>
			<pointLight position={[-5,2,0]} intensity={0.1}/>
			<mesh ref={mesh} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
				<boxGeometry args={[5, 5, 5]} />
				<shaderMaterial
					fragmentShader={testFrag}
					vertexShader={testVert}
					uniforms={uniforms}
					lights={true}
				/>
			</mesh>
		</>
	);
};
export default Object01;
