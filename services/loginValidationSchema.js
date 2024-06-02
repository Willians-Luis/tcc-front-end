import * as yup from "yup"

export const loginValidationSchema = yup.object({
    email: yup
        .string()
        .email("Não é um email valido")
        .required("Informe o email"),
    senha: yup
        .string()
        .min(8, "Senha muito curta")
        .required("Informe a senha"),       
})