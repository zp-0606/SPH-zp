import { reqAddressInfo,reqUserOrderInfo } from "@/api"
const state = {
    addressInfo: [],
    userOrderInfo:{}
}
const mutations = {
    GETADDRESSINFO(state, addressInfo) {
        state.addressInfo=addressInfo
    },
    GETUSERORDERINFO(state, userOrderInfo) {
        state.userOrderInfo=userOrderInfo
    }
}
const actions = {
    async getAddressInfo({ commit }) {
        let result = await reqAddressInfo()
        if (result.code == 200) {
            commit('GETADDRESSINFO',result.data)
        }
    },
    async getUserOrderInfo({ commit }) {
        let result = await reqUserOrderInfo()
        if (result.code == 200) {
            commit('GETUSERORDERINFO',result.data)
        }
    }
}
const getters = {}
export default {
    state,mutations,actions,getters
}