import React, { Component } from 'react'
import axios from "axios";
import MainBanner from './MainBanner'
import MainProductList from './MainProductList'

export class Main extends Component {
    constructor() {
        super()

        this.state = {
            banners: [],
            productList: []
        }
    }

    componentDidMount() {
        axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
            const banners  = res.data.data.banner.list
            const recommend = res.data.data.recommend.list
            console.log(banners)
            console.log(recommend)
            this.setState({
                banners,
                productList: recommend
            })
        })
        
    }
    

    render() {
        const { banners, productList } = this.state
        return (
            <div>
                <MainBanner banners={banners} title={123}/>
                <MainProductList productList={productList}/>
            </div>

        )
    }
}

export default Main