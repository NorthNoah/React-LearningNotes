import React from "react"
import ReactDOM from "react-dom/client"
import App from "./06_redux中的hooks/App"
import { TokenContext, UserContext } from "./05_自定义hooks/context"
import { Provider } from "react-redux";
import store from "./06_redux中的hooks/store";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<UserContext.Provider value={{color: "blue", font: 14}}>
    <TokenContext.Provider value={'coderwhy'}>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </TokenContext.Provider>
	</UserContext.Provider>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
