import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Component/Router/Router";

function App() {
	return (
		<div className="bg-gray-100">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
