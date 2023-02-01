import { useNavigate } from "react-router-dom";

// 高阶组件：转化为函数
function withRouter(WrapperComponent) {
    return function(props) {
        const navigate = useNavigate()
        const router = { navigate }
        return <WrapperComponent {...props} router={router}/>
    }
}

export default withRouter