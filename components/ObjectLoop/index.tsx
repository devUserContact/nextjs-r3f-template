import React, { useRef, useCallback } from "react";
import { useFrame } from "@react-three/fiber";
import Object01 from "../object01";

export const ObjectLoop = (props: any) => {
	const totalObjs = 20;
	const mesh: any = useRef();
	useFrame((state, delta) => (mesh.current.rotation.y += 0.004));
	return (
		<>
			<ambientLight intensity={0.1}/>
			<spotLight position={[-10, 20, 20]} color="white" />
			<group {...props} ref={mesh}>
				{(function () {
					let Objs = [];
					for (let i = 0; i < totalObjs; i++) {
						Objs.push(<Object01 />);
					}
					return Objs;
				})()}
			</group>
		</>
	);
};
export default ObjectLoop;
