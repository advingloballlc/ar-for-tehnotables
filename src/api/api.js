import axios from 'axios'
import { getSession, storeSession } from '../utils/session'

axios.interceptors.request.use(req => {
    req.headers['X-Headless-CMS'] = true
    // req.headers['X-Development'] = process.env.NODE_ENV === 'development'

    if(getSession()) req.headers['X-WC-Session'] = getSession()

    return req
})

axios.interceptors.response.use(res => {
    if(res.headers['x-wc-session']) storeSession( res.headers['x-wc-session'] )

    return res
})


export default axios