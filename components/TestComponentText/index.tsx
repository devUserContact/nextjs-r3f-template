import React, { useState, useRef, useMemo } from "react";
import { useFrame, extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import ufo from "../../fonts/UFO-Mono.json";

extend({ TextGeometry });
export const TestComponentText = (props: any) => {
	const ref = useRef<any | null>();
	const font = new FontLoader().parse(ufo);
	var speedX = 0.02;
	var speedY = 0.0195;
	const boundMaxX = 2.4;
	const boundMinX = -6;
	const boundMaxY = 3;
	const boundMinY = -3.2;
	let directionX = speedX;
	let directionY = speedY;

	useFrame(() => {
		if (ref.current?.position.x > boundMaxX) {
			directionX =speedX - 2 * speedX;
		}
		if (ref.current.position.x < boundMinX) {
			directionX = speedX;
		}
		if (ref.current.position.y > boundMaxY) {
			directionY = speedY - 2 * speedY;
		}
		if (ref.current.position.y < boundMinY) {
			directionY = speedY;
		}
		ref.current.position.x += directionX;
		ref.current.position.y += directionY;
	});
	return (
		<>
			<mesh {...props} ref={ref} position={[0, 0, 0]}>
				<textGeometry
					args={["Devusercontact", { font, size: 0.25, height: 0.2 }]}
				/>
				<meshPhysicalMaterial attach="material" color={"green"} />
			</mesh>
		</>
	);
};
export default TestComponentText;
