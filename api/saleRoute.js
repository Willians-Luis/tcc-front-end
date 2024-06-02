import axios from "axios";
import url from "./apiURL";


export const apiPostSales = async (venda, token) => {
    try {
        const response = await axios.post(url('venda'), venda, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        return false
    }
}

export const apiGetAllSales = async (token) => {
    try {
        const response = await axios.get(url('venda'), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        return false
    }
}

export const apiGetSalesByCustomerId = async (id, token) => {
    try {
        const response = await axios.get(url(`venda/cliente/${id}`), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        return false
    }
}

export const apiDeleteSale = async (id, token) => {
    try {
        const response = await axios.delete(url(`venda/${id}`), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        return false
    }
}

export const apiPaySale = async (id, token) => {
    try {
        const response = await axios.put(url(`venda/pagar/${id}`), {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        return false
    }
}

export const apiPayAllSales = async (customerId, value, discount, token) => {
    try {
        const response = await axios.put(url(`venda/pagarVarios/${customerId}/${value}/${discount}`), {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        return false
    }
}