import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Auth from "./Screens/Auth";
import Dashboard from "./Screens/Dashboard";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<Auth />} />
				<Route exact path="/dashboard" element={<Dashboard />} />
			</Routes>
		</div>
	);
}

export default App;
