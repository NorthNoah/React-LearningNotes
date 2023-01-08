import ThemeContext from "../context/theme_context";
function withTheme(OriginComponent) {
    // 通过箭头函数携带props参数，直接返回函数
    return (props) => {
        return (
            <ThemeContext.Consumer>
                {
                    // 相当于把ThemeContext内的value注入到原始组件中
                    value => {
                        return <OriginComponent {...value} {...props}/>
                    }
                }
            </ThemeContext.Consumer>
        )
    }
}

export default withTheme