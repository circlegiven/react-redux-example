import axios from "axios";

const client = axios.create({
});

export function setInterceptor(store) {
    // 요청 인터셉터 추가
    client.interceptors.request.use(

        function (config) {
            // store 제어
            // store.dispatch();
            return config;
        },
        function (error) {
            // store 제어
            // store.dispatch();

            return Promise.reject(error);
        });

    // 응답 인터셉터 추가
    client.interceptors.response.use(
        function (response) {
            // store 제어
            // store.dispatch();
            return response;
        },
        function (error) {
            // store 제어
            // store.dispatch();
            return Promise.reject(error);
        });
}

export default client;
