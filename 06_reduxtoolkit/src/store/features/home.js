import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchMultidataAction = createAsyncThunk(
	"fetchMultidata", 
	async (extraInfo, store) => {
	const res = await axios.get("http://123.207.32.32:8000/home/multidata");
	const banners = res.data.data.banner.list
	const recommends = res.data.data.recommend.list
	console.log(recommends)
	store.dispatch(changeBanners(banners))
	store.dispatch(changeRecommends(recommends))

	// 在直接派发的情况下，无需返回数据
    return res.data
});

const homeSlice = createSlice({
	name: "home",
	initialState: {
		banners: [],
		recommends: [],
	},
	reducers: {
		changeBanners(state, action) {
			state.banners = action.payload;
		},
		changeRecommends(state, action) {
			state.recommends = action.payload;
		},
	},
    // extraReducers: {
    //     // 注意直接解构的写法，相当于取出action中的payload
    //     [fetchMultidataAction.fulfilled](state, {payload}) {
    //         // 直接修改即可
    //         state.banners = payload.data.banner.list
    //         state.recommends = payload.data.recommend.list
    //     }
    // }

	// builder写法：可链式调用，无需写计算属性名
	// extraReducers: (builder) => {
	// 	builder.addCase(fetchMultidataAction.fulfilled, (state, {payload}) => {
	// 		state.banners = payload.data.banner.list
	// 		state.recommends = payload.data.recommend.list
	// 	})
	// }
});

export const { changeBanners, changeRecommends } = homeSlice.actions;

export default homeSlice.reducer;
