import * as yup from "yup"

//const year = new Date(now()).getFullYear()

export const cashValidationSchema = yup.object({
    description: yup
        .string()
        .max(100, "Maximo de 50 caracteres extrapolado!")
        .required("Informe o descrição"),
    // year: yup
    //     .number()
    //     .min(2000, 'Ano inválido!')
    //     .max(year, 'Ano inválido!')
    //     .required("informe o ano"),
    // month: yup
    //     .number()
    //     .min(1, 'Mês inválido!')
    //     .max(12, 'Mês inválido!')
    //     .required("informe o Mês"),
    value: yup
        .number()
        .min(0, 'Número inválido!')
        .required("Informe o valor")
        .typeError("Número inválido!"),
    type: yup
        .string()
        .required("Escolha um tipo"),
})