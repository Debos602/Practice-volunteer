import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import LogIn from "../Login/LogIn";
import Home from "../Home/Home";
import SignUp from "../SignUp/SignUp";
import Services from "../Services/Services";
import Members from "../Members/Members";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/services/:id",
				loader: ({ params }) =>
					fetch(`http://localhost:5000/services/${params.id}`),
				element: (
					<PrivateRoute>
						<Services></Services>
					</PrivateRoute>
				),
			},
			{
				path: "/login",
				element: <LogIn></LogIn>,
			},
			{
				path: "/signup",
				element: <SignUp></SignUp>,
			},
			{
				path: "/members",
				element: <Members></Members>,
			},
		],
	},
]);
