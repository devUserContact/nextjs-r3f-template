import type { NextPage } from "next";
import Head from "next/head";
import TestComponentCanvas from "../components/TestComponentCanvas";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta
					name="react-three-fiber-test"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<TestComponentCanvas />
			</main>
		</div>
	);
};

export default Home;
