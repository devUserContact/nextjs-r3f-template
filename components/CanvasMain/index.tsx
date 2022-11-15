import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
//import ObjectLoop from "../ObjectLoop";
import Object01 from "../Object01";
import styles from "../../styles/Main.module.scss";

const CanvasMain = () => {
	return (
		<Canvas
			camera={{ position: [0, 0, 25] }}
		>
			<ambientLight intensity={0.1}/>
			<spotLight position={[-10, 20, 20]} color="white" />
			<color attach="background" args={["lightgrey"]} />
			<Object01 />
			<OrbitControls autoRotate />
		</Canvas>
	);
};

export default CanvasMain;
