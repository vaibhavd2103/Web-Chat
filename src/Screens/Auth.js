import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { bgUri } from "../constants/constants";

function Auth() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [designation, setDesignation] = useState("");
	const [company, setCompany] = useState("");
	const [gender, setGender] = useState("");
	const [error, setError] = useState("");
	const [status, setStatus] = useState("login");

	const navigate = useNavigate();

	const signup = async () => {
		if (email === "" || password === "" || email === "" || name === "") {
			setError("Please enter all fields");
		} else {
			const data = {
				email,
				password,
				name,
				company,
				designation,
				gender,
				avatar_url:
					gender === "Male"
						? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&usqp=CAU"
						: "https://st3.depositphotos.com/1007566/13175/v/600/depositphotos_131750410-stock-illustration-woman-female-avatar-character.jpg",
			};
			axios
				.post("http://localhost:5000/signup", data)
				.then((res) => {
					console.log(res.data);
					setStatus("login");
					// navigate("/dashboard");
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	const login = async () => {
		if (email === "" || password === "") {
			setError("Please enter all fields");
		} else {
			const data = {
				email,
				password,
			};
			axios
				.post("http://localhost:5000/login", data)
				.then((res) => {
					console.log(res.data);
					localStorage.setItem("user", JSON.stringify(res?.data?.user));
					navigate("/dashboard");
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				width: "100vw",
				height: "100vh",
				justifyContent: "space-between",
			}}
		>
			<div
				style={{
					width: "50vw",
					height: "100vh",
					borderRight: "solid 1px #fff2",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{status === "signup" ? (
					<>
						<a
							style={{
								fontWeight: 900,
								fontSize: 32,
								marginBottom: 10,
							}}
						>
							Welcome to WebChat!
						</a>
						<a
							style={{
								fontWeight: 400,
								fontSize: 14,
								marginBottom: 30,
							}}
						>
							Please enter required credentials to register...
						</a>
						<input
							placeholder="Full Name"
							onChange={(e) => {
								setName(e.target.value);
							}}
							style={{
								backgroundColor: "#fff2",
								border: 0,
								paddingInline: 20,
								height: 40,
								minWidth: 200,
								width: "30vw",
								borderRadius: 10,
								marginBottom: 20,
							}}
						/>
						<input
							placeholder="Email"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							style={{
								backgroundColor: "#fff2",
								border: 0,
								paddingInline: 20,
								height: 40,
								minWidth: 200,
								width: "30vw",
								borderRadius: 10,
								marginBottom: 20,
							}}
						/>
						<input
							placeholder="Password"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							style={{
								backgroundColor: "#fff2",
								border: 0,
								paddingInline: 20,
								height: 40,
								minWidth: 200,
								width: "30vw",
								borderRadius: 10,
								marginBottom: 20,
							}}
						/>
						<div
							style={{
								display: "flex",
								alignItems: "center",
							}}
						>
							<input
								placeholder="Company"
								onChange={(e) => {
									setCompany(e.target.value);
								}}
								style={{
									backgroundColor: "#fff2",
									border: 0,
									paddingInline: 20,
									height: 40,
									borderRadius: 10,
								}}
							/>
							<input
								placeholder="Designation"
								onChange={(e) => {
									setDesignation(e.target.value);
								}}
								style={{
									backgroundColor: "#fff2",
									border: 0,
									paddingInline: 20,
									height: 40,
									borderRadius: 10,
									marginLeft: 20,
								}}
							/>
						</div>
						<div
							style={{ display: "flex", alignItems: "center", marginTop: 20 }}
						>
							<button
								onClick={() => {
									setGender("Male");
								}}
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									backgroundColor: gender === "Male" ? "#19d" : "#fff3",
									borderRadius: 10,
									width: 70,
									height: 40,
									cursor: "pointer",
									fontWeight: "bold",
								}}
							>
								Male
							</button>
							<button
								onClick={() => {
									setGender("Female");
								}}
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									backgroundColor: gender === "Female" ? "#f5a" : "#fff3",
									borderRadius: 10,
									width: 70,
									height: 40,
									cursor: "pointer",
									marginLeft: 10,
									fontWeight: "bold",
								}}
							>
								Female
							</button>
						</div>
						{error !== "" && (
							<a style={{ color: "#f57", fontSize: 14, marginTop: 5 }}>
								{error}
							</a>
						)}
						<button
							style={{
								border: 0,
								backgroundColor: "#fff5",
								borderRadius: 10,
								width: 150,
								height: 40,
								justifyContent: "center",
								alignItems: "center",
								color: "#fff",
								fontWeight: "bold",
								fontSize: 16,
								marginTop: 20,
								cursor: "pointer",
							}}
							onClick={signup}
						>
							Sign up
						</button>
						<a
							style={{
								marginTop: 20,
							}}
						>
							Already have an account?{" "}
							<span
								onClick={() => {
									setStatus("login");
								}}
								style={{ fontWeight: "bold", cursor: "pointer" }}
							>
								Login
							</span>
						</a>
					</>
				) : (
					<>
						<a
							style={{
								fontWeight: 900,
								fontSize: 32,
								marginBottom: 10,
							}}
						>
							Welcome back to WebChat!
						</a>
						<a
							style={{
								fontWeight: 400,
								fontSize: 14,
								marginBottom: 30,
							}}
						>
							Please enter credentials to login...
						</a>
						<input
							placeholder="Email"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							style={{
								backgroundColor: "#fff2",
								border: 0,
								paddingInline: 20,
								height: 40,
								minWidth: 200,
								width: "30vw",
								borderRadius: 10,
								marginBottom: 20,
							}}
						/>
						<input
							placeholder="Password"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							style={{
								backgroundColor: "#fff2",
								border: 0,
								paddingInline: 20,
								height: 40,
								minWidth: 200,
								width: "30vw",
								borderRadius: 10,
								marginBottom: 20,
							}}
						/>
						{error !== "" && (
							<a style={{ color: "#f57", fontSize: 14, marginTop: 5 }}>
								{error}
							</a>
						)}
						<button
							style={{
								border: 0,
								backgroundColor: "#fff5",
								borderRadius: 10,
								width: 150,
								height: 40,
								justifyContent: "center",
								alignItems: "center",
								color: "#fff",
								fontWeight: "bold",
								fontSize: 16,
								marginTop: 20,
								cursor: "pointer",
							}}
							onClick={login}
						>
							Login
						</button>
						<a
							style={{
								marginTop: 20,
							}}
						>
							Don't have an account?{" "}
							<span
								onClick={() => {
									setStatus("signup");
								}}
								style={{ fontWeight: "bold", cursor: "pointer" }}
							>
								Sign up
							</span>
						</a>
					</>
				)}
			</div>
			<div
				style={{
					width: "50vw",
					height: "100vh",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<img
					src={bgUri}
					style={{
						width: "50vw",
						height: "calc(100vh - 10px)",
						objectFit: "cover",
					}}
				/>
			</div>
		</div>
	);
}

export default Auth;

// const Auth = () => {
// 	return (
// 		<div>
// 			<a>auth</a>
// 		</div>
// 	);
// };
// export default Auth;
