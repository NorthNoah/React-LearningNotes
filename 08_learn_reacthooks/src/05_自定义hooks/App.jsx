import React, { memo } from "react"
import { useLocalStorage } from "./hooks"
import useScrollPosition from "./hooks/useScrollPosition"
import "./style.css"

const Home = memo(() => {
    const [token, setToken] = useLocalStorage("token")
    function setTokenHandle() {
        setToken('hjy')
    }
	return (
		<div>
			<h2>
                Home：{token}
                <button onClick={setTokenHandle}>设置token</button>
            </h2>
		</div>
	)
})

const About = memo(() => {
	return (
		<div>
			<h2>About</h2>
		</div>
	)
})

// function useLogEffect() {
// 	useEffect(() => {
// 		console.log("组件已经被挂载")
// 		return () => {
// 			console.log("组件已经被销毁")
// 		}
// 	})
// }
const App = memo(() => {
	const scrollPosition = useScrollPosition()
	return (
		<div className="app">
			<About />
			<Home />
			<div className="scroll">{scrollPosition}</div>
		</div>
	)
})

export default App
