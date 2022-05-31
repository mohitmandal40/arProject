import Navbar from "./components/Navbar/Navbar";
import "./styles.scss";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Settings from "./pages/Settings";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				{/* <Route element={<Link to="/settings">Go to Settings</Link>} path="/" /> */}
				<Route element={<Settings />} path="/settings" />
				<Route path="*" element={<Navigate to="/settings" replace />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
