import React, { useEffect, useState } from "react";

function PersonalInfo() {
	const [user, setUser] = useState({});

	useEffect(() => {
		const currentUser = localStorage.getItem("user");
		const user = JSON.parse(currentUser);
		setUser(user);
	}, []);

	return (
		<div
			style={{
				backgroundColor: "#00000079",
				width: "100%",
				display: "flex",
				alignItems: "center",
				height: 60,
			}}
		>
			<img
				src={user?.avatar_url}
				style={{ width: 40, height: 40, borderRadius: 60, marginLeft: 20 }}
			/>
			<div
				style={{
					backgroundColor: "#0000",
					display: "flex",
					flexDirection: "column",
					marginLeft: 10,
				}}
			>
				<a style={{ fontWeight: "bold", fontSize: 16 }}>{user?.name}</a>
				<a style={{ fontSize: 12, marginTop: 0, opacity: 0.5 }}>
					{user?.designation} at {user?.company}
				</a>
			</div>
		</div>
	);
}

export default PersonalInfo;
