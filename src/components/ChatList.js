import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import { colors } from "../constants/constants";
import "./ChatList.css";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

function ChatList() {
	const [loading, setLoading] = useState(true);
	const [users, setUsers] = useState([]);
	const [searchStatus, setSearchStatus] = useState("search");
	let searchRef = useRef(null);

	const handleSearch = () => {};

	const getAllUSers = async () => {
		axios
			.get("http://localhost:5000/getAllUsers")
			.then((res) => {
				setUsers(res?.data?.users);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getAllUSers();
	}, []);

	return (
		<div
			style={{
				backgroundColor: "#0000",
				display: "flex",
				flexDirection: "column",
				width: "100%",
				borderRight: "solid 1px #fff1",
				height: "100%",
			}}
		>
			<PersonalInfo />
			<div
				style={{
					backgroundColor: "#fff2",
					display: "flex",
					alignItems: "center",
					borderRadius: 10,
					paddingLeft: 15,
					marginInline: 20,
					marginBlock: 10,
				}}
			>
				<div
					style={{ backgroundColor: "#0000", transition: "200ms" }}
					onClick={() => {
						if (searchStatus === "search") {
							searchRef.focus();
							setSearchStatus("clear");
						} else {
							setSearchStatus("search");
						}
					}}
				>
					{searchStatus === "search" ? (
						<SearchIcon
							style={{
								color: "#fff8",
								fontSize: 20,
								cursor: "pointer",
								transition: "200ms",
							}}
						/>
					) : (
						<ClearIcon
							style={{
								color: "#fff8",
								fontSize: 20,
								cursor: "pointer",
								transition: "200ms",
							}}
						/>
					)}
				</div>
				<input
					ref={(text) => (searchRef = text)}
					placeholder="Enter name to search"
					style={{
						border: 0,
						backgroundColor: "#0000",
						display: "flex",
						// flex: 1,
						width: "100%",
						height: 40,
						outline: "none",
						marginLeft: 20,
					}}
				/>
			</div>
			<div style={{ backgroundColor: "#fff0" }}>
				{users?.map((item) => {
					return (
						<div
							className="chatroom"
							// style={{
							// 	display: "flex",
							// 	alignItems: "center",
							// 	backgroundColor: "#55555511",
							// 	padding: 10,
							// 	borderBottom: "solid 1px #fff1",
							// 	justifyContent: "space-between",
							// }}
						>
							<div
								style={{
									marginLeft: 10,
									backgroundColor: "#0000",
									display: "flex",
									alignItems: "center",
								}}
							>
								<img
									src={item?.avatar_url}
									style={{ height: 45, width: 45, borderRadius: 60 }}
								/>
								<div
									style={{
										marginLeft: 10,
										backgroundColor: "#0000",
										display: "flex",
										flexDirection: "column",
									}}
								>
									<a>{item?.name}</a>
									<a style={{ fontSize: 12, opacity: 0.5 }}>
										{item?.designation} at {item?.company}
									</a>
								</div>
							</div>
							<button
								className="connect_button"
								style={{
									cursor: "pointer",
									// color: colors.primary,
									fontWeight: "bold",
									padding: 5,
									paddingInline: 12,
								}}
							>
								Connect
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ChatList;
