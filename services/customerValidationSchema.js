import * as yup from "yup"

export const customerValidationSchema = yup.object({
    nome: yup
        .string()
        .required("informe o nome"),
    telefone: yup
        .number()
})