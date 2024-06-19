import * as yup from "yup"

export const productValidationSchema = yup.object({
    nome: yup
        .string()
        .required("Insira o nome"),
    valorVenda: yup
        .number()
        .positive("Insira um número posítivo.")
        .required("Insira o valor")
        .typeError("Insira um número posítivo."),
    valorCusto: yup
        .number()
        .positive("Insira um número posítivo.")
        .required("Insira o valor")
        .typeError("Insira um número posítivo."),
    estoque: yup
        .number()
        .integer("Insira um número inteiro e posítivo.")
        .positive("Insira um número inteiro e posítivo.")
        .required("Insira o valor")
        .typeError("Insira um número inteiro e posítivo."),
    categoria: yup
        .number()
        .required("Escolha uma categoria"),
    descricao: yup
        .string()
        .max(100, "Maxímo de caracteres (100)"),
})