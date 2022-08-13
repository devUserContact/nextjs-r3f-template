import { TestComponent} from "../TestComponent";
import { Canvas } from "@react-three/fiber";
import styles from "../../styles/Home.module.css";

export default function TestComponentCanvas() {
	return (
		<>
			<div className={styles.canvasContainer}>
				<Canvas style={{ width: "100%", height: "100%", background: "white" }}>
					<ambientLight intensity={0.75} />
					<TestComponent/>
				</Canvas>
			</div>
		</>
	);
}
