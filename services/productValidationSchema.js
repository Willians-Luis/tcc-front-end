import * as yup from "yup"

export const productValidationSchema = yup.object({
    nome: yup
        .string()
        .required("informe o nome"),
    valorVenda: yup
        .number()
        .positive("Informe um número posítivo.")
        .required("Incira o valor")
        .typeError("Informe um número posítivo."),
    valorCusto: yup
        .number()
        .positive("Informe um número posítivo.")
        .required("Incira o valor")
        .typeError("Informe um número posítivo."),
    estoque: yup
        .number()
        .integer("Informe um número inteiro e posítivo.")
        .positive("Informe um número inteiro e posítivo.")
        .required("Incira o valor")
        .typeError("Informe um número inteiro e posítivo."),
    categoria: yup
        .number()
        .required("Escolha a categoria"),
    descricao: yup
        .string()
        .max(100, "Maxímo de caracteres (100)"),
})