import React, { PureComponent } from 'react'
import { connect } from "react-redux";
import { fetchMultidataAction } from "../store/home";
export class Category extends PureComponent {
    componentDidMount() {
        this.props.fetchHomeMultidata()
    }
  
    render() {
        return (
            <div>
                <h2>Category</h2>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    counter: state.counter.counter
})
const mapDispatchToProps = dispatch => ({
    fetchHomeMultidata() {
        // 派发被增强后的函数
        dispatch(fetchMultidataAction())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)