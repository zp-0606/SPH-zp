import axios from "axios";
import nprogress from "nprogress";
import 'nprogress/nprogress.css'
import store from "@/store";
const requests = axios.create({
    baseURL: "/api",
    // baseURL: "http://39.98.123.211/api",
    timeout: 5000
});
requests.interceptors.request.use((config) => {
    if (store.state.detail.uuid_token) {
        config.headers.userTempId=store.state.detail.uuid_token
    }
    if (store.state.user.token) {
        config.headers.token=store.state.user.token
    }
    // 进度条开始
    nprogress.start()
    return config
});
requests.interceptors.response.use((res) => {
    // 进度条结束
    nprogress.done()
    return res.data;
}, (error) => {
    return Promise.reject(new Error('false'));
});
export default requests;