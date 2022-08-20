import React from "react";
import ChatList from "../components/ChatList";
import { bgUri } from "../constants/constants";

function Dashboard() {
	return (
		<>
			{/* <img
				src={bgUri}
				style={{
					objectFit: "cover",
					height: "100vh",
					width: "100vw",
					position: "fixed",
					top: 0,
					// opacity: 0.3,
				}}
			/>
			<div
				style={{
					objectFit: "cover",
					height: "100vh",
					width: "100vw",
					position: "fixed",
					top: 0,
					backdropFilter: "blur(100px)",
					backgroundColor: "#0000",
				}}
			></div> */}
			<div
				style={{
					display: "flex",
					height: "100vh",
					width: "100vw",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div
					style={{
						display: "flex",
						height: "90vh",
						width: "90vw",
						// justifyContent: "center",
						alignItems: "center",
						backgroundColor: "#fff1",
						borderRadius: 10,
						// overflow: "hidden",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							width: "35vw",
							backgroundColor: "#ffffff11",
							height: "100%",
						}}
					>
						<ChatList />
					</div>
				</div>
			</div>
		</>
	);
}

export default Dashboard;
