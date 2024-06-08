import axios from "axios";
import url from "./apiURL";

export const apiPostExpenses = async (expenses, token) => {
    try {
        const response = await axios.post(url('despesas'), expenses, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        return false
    }
}

export const apiGetAllExpenses = async (token) => {
    try {
        const response = await axios.get(url('despesas'), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        return false
    }
}

export const apiGetExpensesByYearAndMonth = async (year, month, token) => {
    try {
        const response = await axios.get(url(`despesas/date/${year}/${month}`), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        return false
    }
}

export const apiDeleteExpenses = async (id, token) => {
    try {
        const response = await axios.delete(url(`despesas/${id}`), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        return false
    }
}