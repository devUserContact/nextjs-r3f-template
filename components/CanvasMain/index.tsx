import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
//import ObjectLoop from "../ObjectLoop";
import Object01 from "../Object01";
import styles from "../../styles/Main.module.scss";

const CanvasMain = () => {
	return (
		<Canvas
			camera={{ position: [0, 10, 30] }}
			>
			<color attach="background" args={["lightgrey"]} />
			<Object01 />
			<OrbitControls />
		</Canvas>
	);
};

export default CanvasMain;
