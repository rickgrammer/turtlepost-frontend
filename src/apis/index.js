const axios = require('axios')

const defaultConfig = {
    baseURL : 'http://localhost:8000/',
    timeout: 5000,
    headers: {'Content-Type': 'application/json',  'SameSite': null }
}

const turtleAxios = axios.create(defaultConfig)

const refreshAccessToken = () => {
    //TODO: remove the manual ref,resh token 
    localStorage.setItem('refresh', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYxNzMzOTc3OCwianRpIjoiMzIwZjVhZmM3ZTE1NGU4MzhmNThkNTI1MTkyMGQwNTEiLCJ1c2VyX2lkIjoyfQ.O4ysbTM4HL0bktdrpZSUCpvH1Djc85WGenb11NaqO30')
    let refreshToken = localStorage.getItem('refresh')
    if (!refreshToken){
        this.$toasted.error('Session expired. Login again.', {
            action: {
                text: 'X',
                onClick: (e, toastObject) => {
                    toastObject.goAway(0)
                }
            }
        })
    } else {
        axios({
            method: 'post',
            url: 'auth/token/refresh/',
            baseURL:'http://localhost:8000/',
            data: {refresh: refreshToken},
        })
        .then(resp => {
            let access = resp.data.access
            localStorage.setItem('access', access)
        })
        .catch(error => {
            // add it in vuex; for now it will show error in console.
            this.$toasted.error(error)
        })
    }

}


turtleAxios.interceptors.request.use(request => {
    let access = localStorage.getItem('access')
    // let access = 'yJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE2MTMyMjY4LCJqdGkiOiJhNThhM2JkZGEyNWI0M2QxOTg4MjdkMDliNzQyY2E4MyIsInVzZXJfaWQiOjJ9.6f7us4zWnyRFCwiFfTNb7QcG38gBrScW7FgQc_Jo9xI'
    let bearer = `Bearer ${access}`
    request.headers['Authorization'] = bearer
    return request
}, error => {
    console.log('haith'+error)
})

turtleAxios.interceptors.response.use(response => {
    console.log('response intercepted')
    console.log(response)
}, error => {
    console.log(error)
    console.log('response intercepted error')
    if (error.response.status == 401){
        refreshAccessToken()
        // get a refresh token
        // if not refresh token then redirect to login page.
    }
})


async function getPostsAPI(){
    let resp = await turtleAxios.get('posts/')
    return resp
}

export {getPostsAPI}

