import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api"
const state = {
    cartList: []
}
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    }
}
const actions = {
    async getCartList({ commit }) {
        let result = await reqCartList()
        if (result.code == 200) {
            commit('GETCARTLIST', result.data)
        }
    },
    async deleteCartList({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckedById(skuId, isChecked)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    deleteAllCheckedCart({ getters, dispatch }) {
        let PromiseAll = []
        getters.cartInfo.cartInfoList.forEach(cart => {
            let Promise = cart.isChecked == 1 ? dispatch('deleteCartList', cart.skuId) : ''
            PromiseAll.push(Promise)
        });
        return Promise.all(PromiseAll)
    },
    undateAllCartIsChecked({ state, dispatch }, isChecked) {
        let PromiseAll=[]
        state.cartList[0].cartInfoList.forEach((item) => {
            let result = dispatch('updateCheckedById', { skuId: item.skuId, isChecked })
            PromiseAll.push(result)
        })
        return Promise.all(PromiseAll)
    }

}
const getters = {
    cartInfo(state) {
        return state.cartList[0] || {}
    }
}
export default {
    state, mutations, actions, getters
}