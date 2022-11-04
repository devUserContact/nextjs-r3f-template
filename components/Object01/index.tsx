import React, { useRef, useCallback } from "react";
import { useFrame } from "@react-three/fiber";

export const Object01 = (props: any) => {
	const randGen = (min: number, max: number) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		const rand = Math.floor(Math.random() * (max - min + 1)) + min;
		return rand;
	};
	const randFloat = (min: number, max: number, decimals: number) => {
		const rand = (Math.random() * (max - min) + min).toFixed(decimals);
		return rand;
	};
	const randomCoord = useCallback(() => {
		let coordArray = [];
		for (let i = 0; i < 3; i++) {
			coordArray.push(randFloat(-10, 10, 2));
		}
		return coordArray;
	});
	const mesh: any = useRef();
	useFrame((state, delta) => (mesh.current.rotation.y += 0.005));
	return (
		<>
			<mesh {...props} ref={mesh} position={randomCoord()}>
				<octahedronGeometry
					attach="geometry"
					args={[randFloat(0.75, 1.5, 2), 0]}
				/>
				<meshStandardMaterial attach="material" color="silver" />
			</mesh>
		</>
	);
};
export default Object01;
