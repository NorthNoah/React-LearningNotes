import React, { PureComponent } from 'react'
import { connect } from "react-redux";
import { addNumberAction, subNumberAction } from '../store/actionCreator';

export class About extends PureComponent {

    // 解耦，需要调用的方法都在props中，方法中隐含了dispatch逻辑
    calcNumber(num, isAdd) {
        if (isAdd) {
            this.props.addNumber(num)
        } else {
            this.props.subNumber(num)
        }
    }
    render() {
        const { counter, banners, recommends } = this.props
        return (
            <div>
                <h2>About: {counter}</h2>
                <div>
                    <button onClick = {e => this.calcNumber(1, true)}>+1</button>
                    <button onClick = {e => this.calcNumber(1, false)}>-1</button>
                    <button onClick = {e => this.calcNumber(8, true)}>+8</button>
                    <button onClick = {e => this.calcNumber(8, false)}>-8</button>
                </div>

                <div className="banner">
                    <h2>轮播图</h2>
                    <ul>
                        {
                            banners.map((item, index) => {
                                return <li key={index}>{item.title}</li>
                            })
                        }
                    </ul>
                </div>

                <div className="recommend">
                    <h2>推荐数据：</h2>
                    <ul>
                        {
                            recommends.map((item, index) => {
                                return <li key={index}>{item.title}</li>
                            })
                        }
                    </ul>

                </div>
            </div>
        )
    }
}


// 传入的fn1：相当于函数内返回的obj被传入了组件，可以在props内取到

// function mapStateToProps(state) {
//     return {
//         counter: state.counter
//     }
// }

const mapStateToProps = state => ({
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends
})

// 之前写法：需要store.dispatch，现在则只需要把dispatch逻辑封装为方法传入props即可
const mapDispatchToProps = dispatch => ({
    addNumber(num) {
        dispatch(addNumberAction(num))
    },
    subNumber(num) {
        dispatch(subNumberAction(num))
    }

})

// connect的返回值是高阶组件
export default connect(mapStateToProps, mapDispatchToProps)(About)