import React, { useRef, useMemo } from "react";
import { useFrame, shaderMaterial } from "@react-three/fiber";
import { UniformsUtils, UniformsLib } from "three";

import objV01 from "../../shaders/object01.vert";
import objF01 from "../../shaders/object01.frag";

export const Object01 = (props: any) => {

	const count =  500;
	const randomFloat = (min: number, max: number, decimals: number) => {
		const rand = (Math.random() * (max - min) + min).toFixed(decimals);
		return rand;
	};

	const particlesPosition = useMemo(() => {

		const positions = new Float32Array(count * 3)

		for (let i = 0; i < count; i++) {
			let x = randomFloat(-5, 5, 2);
			let y = randomFloat(-5, 5, 2);
			let z = randomFloat(-5, 5, 2);

			positions.set([x,y,z], i * 3);
		}
		return positions;
	}, [count])

	const uniforms = useMemo(
		() => ({
			u_time: {
				value: 0.0,
			},
		}),
		[]
	);

	const p = useRef();

	useFrame((state) => {
		const { clock } = state;
		p.current.material.uniforms.u_time.value = clock.getElapsedTime();
	});
	return (
		<>
			<pointLight position={[-10, 14, 8]} />
			<points ref={p} >
				<bufferGeometry attach="geometry">
				<bufferAttribute
					attach="attributes-position"
					count={particlesPosition.length / 3}
					array= {particlesPosition}
					itemSize={3}
				/>
				</bufferGeometry>
				<shaderMaterial
					fragmentShader={objF01}
					vertexShader={objV01}
					uniforms={uniforms}
				/>
			</points>
		</>
	);
};
export default Object01;
