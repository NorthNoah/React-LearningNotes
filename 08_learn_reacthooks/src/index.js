import React from "react"
import ReactDOM from "react-dom/client"
import App from "./04_useRef/App"
import { UserContext, ThemeContext } from "./03_useContext/context"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<ThemeContext.Provider value={{color: "blue", font: 14}}>
    <UserContext.Provider value={{name: "why", level: 99}}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserContext.Provider>
	</ThemeContext.Provider>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
