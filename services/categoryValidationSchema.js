import * as yup from "yup"

export const categoryValidationSchema = yup.object({
    nome: yup
        .string()
        .required("Informe o nome")
        .max(15, "Nome muito longo")
        .min(2, "Nome muito curto")
})