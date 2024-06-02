import axios from "axios";
import url from "./apiURL";

export const apiPostCategories = async (category, token) => {
    try {
        const {data} = await axios.post(url('tipoProduto'), category, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return data 
    } catch (error) {
        return false
    }
}

export const apiGetAllCategories = async (token) => {
    try {
        const {data} = await axios.get(url('tipoProduto'), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return data 
    } catch (error) {
        return false
    }
}

export const apiGetCategory = async (id, token) => {
    try {
        const {data} = await axios.get(url(`tipoProduto/${id}`), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return data
    } catch (error) {
        return false
    }
}

export const apiDeleteCategory = async (id, token) => {
    try {
        const {data} = await axios.delete(url(`tipoProduto/${id}`), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return data
    } catch (error) {
        return false
    }
}