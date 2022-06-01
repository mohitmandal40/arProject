import Navbar from "./components/Navbar/Navbar";
import "./styles.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Settings from "./pages/Settings";
import MainContent from "./components/MainContent";
import Products from "./pages/Products";
import DemoScript from "./pages/DemoScript";
import Customers from "./pages/Customers";
import SalesTeam from "./pages/SalesTeam";
import Demo from "./pages/Demo";

function App() {
	return (
		<BrowserRouter basename="/arProject">
			<Navbar />
			<Routes>
				<Route element={<MainContent />}>
					<Route path="/" element={<Products />} />
					<Route path="/demoscript" element={<DemoScript />} />
					<Route path="/customers" element={<Customers />} />
					<Route path="/sales-team" element={<SalesTeam />} />
					<Route path="/demo" element={<Demo />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="*" element={<Navigate to="/settings" replace />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
