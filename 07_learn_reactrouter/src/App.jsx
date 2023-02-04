import React from "react"
import { Routes, Route, Navigate, useNavigate, useRoutes } from "react-router-dom"
import { Link } from "react-router-dom"
// import { NavLink } from "react-router-dom";
// import Home from "./pages/Home"
// import About from "./pages/About"
// import Login from "./pages/Login"
// import Profile from "./pages/Profile"
// import NotFound from "./pages/NotFound"
// import HomeRecommend from "./pages/HomeRecommend"
// import HomeRanking from "./pages/HomeRanking"
// import Category from "./pages/Category"
// import Order from "./pages/Order"
// import HomeSongMenu from "./pages/HomeSongMenu"
// import Detail from "./pages/Detail";
// import User from "./pages/User"
import routes from "./router"

export function App(props) {
  const navigate = useNavigate()
	function navigateTo(path) {
		navigate(path)
	}
	return (
		<div className="app">
			<div className="header">
				<Link to="/">首页</Link>
				<Link to="/about">关于</Link>
				<Link to="/login">登录</Link>
				<Link to="/profile">我的</Link>
        <Link to="user?name=why&age=18">用户信息</Link>
				<button onClick={e => navigateTo("/order")}>订单</button>
				<span onClick={e => navigateTo("/category")}>分类</span>
			</div>
			<div className="content">
				{/* <Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/home" element={<Home />}>
						<Route path="/home" element={<Navigate to="/home/recommand" />} />
						<Route path="/home/recommand" element={<HomeRecommend />} />
						<Route path="/home/ranking" element={<HomeRanking />} />
            <Route path="/home/songmenu" element={<HomeSongMenu/>}></Route>
					</Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/profile" element={<Profile />}></Route>
					<Route path="/category" element={<Category />}></Route>
					<Route path="/order" element={<Order />}></Route>
					<Route path="/detail/:id" element={<Detail />}></Route>
					<Route path="/user" element={<User />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes> */}
        <div>{useRoutes(routes)}</div>
			</div>
			<div className="footer">Footer</div>
		</div>
	)
}

export default App
