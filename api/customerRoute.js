import axios from "axios";
import url from "./apiURL";

export const apiPostCustomer = async (cliente, token) => {
    try {
        const response = await axios.post(url('cliente'), cliente, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return { status: response.status, data: response.data }
    } catch (error) {
        if (error.response) {
            return { status: error.response.status, data: error.response.data }
        }
        return { status: undefined, data: 'Erro de servidor!, tente novamente mais tarde.' }
    }
}

export const apiPutCustomer = async (id, cliente, token) => {
    try {
        const response = await axios.put(url(`cliente/${id}`), cliente, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return { status: response.status, data: response.data }
    } catch (error) {
        if (error.response) {
            return { status: error.response.status, data: error.response.data }
        }
        return { status: undefined, data: 'Erro de servidor!, tente novamente mais tarde.' }
    }
}

export const apiGetAllCustomers = async (token) => {
    try {
        const response = await axios.get(url('cliente'), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        return false
    }
}


export const apiGetCustomer = async (id, token) => {
    try {
        const response = await axios.get(url(`cliente/${id}`), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        return false
    }
}

export const apiDeleteCliente = async (id, token) => {
    try {
        const response = await axios.delete(url(`cliente/${id}`), {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        return false
    }
}

