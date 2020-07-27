import axios from 'axios'
let base = ''

export const getLists = params => {
    return axios.post(`${base}/listTable`,params)
    .then(res => res.data)
}

export const removeLists = params => {
    return axios.post(`${base}/listTable/delete`,params)
    .then(res => res.data)
}

export const batchRemoveLists = params => {
    return axios.post(`${base}/listTable/batchRemove`,params)
    .then(res => res.data)
}

export const editLists = params => {
    return axios.post(`${base}/listTable/edit`,params)
    .then(res => res.data)
}

export const searchLists = params => {
    return axios.post(`${base}/listTable/search`,params)
    .then(res => res.data)
}

export const addLists = params => {
    return axios.post(`${base}/listTable/addLists`,params)
    .then(res => res.data)
}

