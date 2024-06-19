import axios from "axios";
import url from "./apiURL";

export const apiPostProduct = async (produto, token) => {
    try {
        const response = await axios.post(url('produto'), produto, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return { status: response.status, data: response.data }
    } catch (error) {
        if (error.response) {
            return { status: error.response.status, data: error.response.data }
        }
        return { status: 500, data: 'Erro de servidor!, tente novamente mais tarde.' }
    }
}

export const apiPutProduct = async (id, produto, token) => {
    try {
        const response = await axios.put(url(`produto/${id}`), produto, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return { status: response.status, data: response.data }
    } catch (error) {
        if (error.response) {
            return { status: error.response.status, data: error.response.data }
        }
        return { status: 500, data: 'Erro de servidor!, tente novamente mais tarde.' }
    }
}

export const apiUpdateStock = async (id, value, token) => {
    try {
        const response = await axios.put(url(`produto/stock/${id}/${value}`), {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        return false
    }
}

export const apiGetAllProduto = async (token) => {
    try {
        const { data } = await axios.get(url('produto'), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return data
    } catch (error) {
        return false
    }
}


export const deleteProduto = async (id, token) => {
    try {
        const response = await axios.delete(url(`produto/${id}`), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        return false
    }
}

