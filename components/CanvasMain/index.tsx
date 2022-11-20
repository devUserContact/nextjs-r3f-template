import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

//import Geometry from "../Geometry";
import Particles from "../Particles";

import styles from "../../styles/Main.module.scss";

const CanvasMain = () => {
	return (
		<Canvas
			camera={{ position: [0, 0, 10] }}
			>
			<color attach="background" args={["lightgrey"]} />
			<Particles />
{/*
			<Geometry />
*/}
			<OrbitControls autoRotate />
		</Canvas>
	);
};

export default CanvasMain;
