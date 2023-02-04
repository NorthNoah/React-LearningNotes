import { useNavigate, useParams, useLocation, useSearchParams } from "react-router-dom";

// 高阶组件：转化为函数
function withRouter(WrapperComponent) {
    return function(props) {
        // 1.导航
        const navigate = useNavigate()

        // 2.动态路由参数传递
        const param = useParams()

        // 3.serch参数传递
        const location = useLocation()
        // 解构数组，第一个值为params本身
        const [searchParams] = useSearchParams()
        const query = Object.fromEntries(searchParams)

        const router = { 
            navigate,
            param,
            location,
            searchParams,
            query
        }
        return <WrapperComponent {...props} router={router}/>
    }
}

export default withRouter