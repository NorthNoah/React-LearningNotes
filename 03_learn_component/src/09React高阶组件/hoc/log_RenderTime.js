import React, { PureComponent } from 'react'
function logRenderTime(OriginComponent) {
    return class log_RenderTime extends PureComponent {
        componentWillMount() {
            this.begin = new Date().getTime()
        }
        componentDidMount() {
            this.end = new Date().getTime()
            const interval = this.end - this.begin
            console.log(`当前渲染时间为${interval}`)
        }
        render() {
            return (
                <OriginComponent {...this.props}/>
            )
        }
    }
}
export default logRenderTime