import * as yup from "yup"

export const customerValidationSchema = yup.object({
    nome: yup
        .string()
        .required("Informe o nome")
        .max(22, "Nome muito longo")
        .min(2, "Nome muito curto"),
    telefone: yup
        .string()
        .max(24, "Número de telefone muito longo")
})