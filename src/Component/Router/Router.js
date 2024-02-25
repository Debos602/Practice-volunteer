import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import LogIn from "../Login/LogIn";
import Home from "../Home/Home";
import SignUp from "../SignUp/SignUp";
import Services from "../Services/Services";
import Members from "../Members/Members";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Collection from "../Collection/Collection";
import Userlist from "../UserList/Userlist";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			// {
			// 	path: "/cards",
			// 	loader: () => fetch(`https://practice-voluteer-server.vercel.app/services`),
			// 	element: <Cards></Cards>,
			// },
			{
				path: "/services/:id",
				loader: ({ params }) =>
					fetch(`https://practice-voluteer-server.vercel.app/services/${params.id}`),
				element: (
					<PrivateRoute>
						<Services className="bg-teal-900"></Services>
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
				path: "/userlist",
				element: <Userlist></Userlist>,
			},
			{
				path: "/collection",
				element: <Collection></Collection>,
			},
			{
				path: "/members",
				element: (
					<PrivateRoute>
						<Members></Members>
					</PrivateRoute>
				),
			},
		],
	},
]);
