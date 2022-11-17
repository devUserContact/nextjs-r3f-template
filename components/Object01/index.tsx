import React, { useRef, useMemo } from "react";
import { useFrame, shaderMaterial } from "@react-three/fiber";
import { UniformsUtils, UniformsLib } from "three";

import testVert from "../../shaders/testVert.vert";
import testFrag from "../../shaders/testFrag.frag";

export const Object01 = (props: any) => {
	var uniforms = UniformsUtils.merge([
		UniformsLib["lights"],
		{
			u_time: { value: 0.0 },
			lightIntensity: { type: "f", value: 0.35 },
			diffuse: { value: [0.2, 0.8, 0.6] },
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
			<pointLight position={[-10, 14, 8]} />
			<mesh ref={mesh} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 1.6]}>
				<boxGeometry args={[10, 10, 10, 32, 32, 32]} />
				<shaderMaterial
					fragmentShader={testFrag}
					vertexShader={testVert}
					uniforms={uniforms}
					lights={true}
					flatShading={true}
					fog={true}
				/>
			</mesh>
		</>
	);
};
export default Object01;
