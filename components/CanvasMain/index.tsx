import React from "react";
import { Canvas } from "@react-three/fiber";
import ObjectLoop from "../ObjectLoop";
import styles from "../../styles/Main.module.scss";

const CanvasMain = () => {
	return (
		<Canvas
			camera={{ position: [0, 0, 25] }}
		>
			<color attach="background" args={["lightblue"]} />
			<ObjectLoop />
		</Canvas>
	);
};

export default CanvasMain;
