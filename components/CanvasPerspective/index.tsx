import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

//import Geometry from "../Geometry";
//import Particles from "../Particles";
import CanvasGltf from "../CanvasGltf";

import styles from "../../styles/Main.module.scss";

const CanvasPerspective = () => {
	return (
		<Canvas
			camera={{ position: [0, 0, 10] }}
			>
			<color attach="background" args={["lightgrey"]} />
			<CanvasGltf />
{/*
			<Particles />
			<Geometry />
*/}
			<OrbitControls autoRotate />
		</Canvas>
	);
};

export default CanvasPerspective;
