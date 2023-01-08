import React, { PureComponent } from 'react'
import logRenderTime from "../hoc/log_RenderTime";
export class Detail extends PureComponent {
    // componentWillMount() {
    //     this.beginTime = new Date().getTime()
    // }
    // componentDidMount() {
    //     this.endTime = new Date().getTime()
    //     const interval = this.endTime - this.beginTime
    //     console.log(`当前页面花费了${interval}ms渲染完成!`)
    // }
    render() {
        return (
            <div>
                <h2>Detail</h2>
                <ul>
                    <li>数据列表</li>
                    <li>数据列表</li>
                    <li>数据列表</li>
                    <li>数据列表</li>
                    <li>数据列表</li>
                    <li>数据列表</li>
                    <li>数据列表</li>
                    <li>数据列表</li>
                    <li>数据列表</li>
                    <li>数据列表</li>
                    <li>数据列表</li>
                    <li>数据列表</li>
                    <li>数据列表</li>
                    <li>数据列表</li>
                    <li>数据列表</li>
                    <li>数据列表</li>
                </ul>
            </div>
        )
    }
}

export default logRenderTime(Detail)