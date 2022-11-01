import ListsPage from "@pages/ListsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ListsPage />} />
				<Route path="*" element={<>404</>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
