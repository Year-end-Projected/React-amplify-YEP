import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../LoginRegister/Login";
import Register from "../LoginRegister/Register";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
// import Search from "../Search/Search";
import Error from "../Error/Error";
import MyProfile from "../Profile/MyProfile";
import ProfileEdit from "../Profile/ProfileEdit";
import Publications from "../Publications/Publications";
import MyPublications from "../Publications/MyPublications";
import CreatePublication from "../Publications/CreatePublication";

function Router({ isAuth, setIsAuth }) {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home isAuth={isAuth}/>} />
					<Route path="login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />} />
					<Route path="register" element={<Register />} />
					{/* <Route path="recherche" element={<Search />} /> */}
					<Route path="*" element={<Error />} />
					<Route path="profile" element={<Error />} />
					<Route exact path="profile/my" element={<MyProfile isAuth={isAuth}/>} />
					<Route exact path="profile/my/edit" element={<ProfileEdit />} />
					<Route path="publications" element={<Publications/>} />
					<Route path="publications/create" element={<CreatePublication />} />
					<Route path="publications/my" element={<MyPublications />} />
					{/* <Route exact path="publications/my" element={<MyPublications />} /> */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
