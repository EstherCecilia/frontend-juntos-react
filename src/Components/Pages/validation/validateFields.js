// const validate = values => {
//     const errors = {}
//     if (!values.name) {
//       errors.name = 'Required'
//     }
//     if (!values.email) {
//       errors.email = 'Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = 'Email inválido'
//     }
//     if (!values.genero) {
//       errors.age = 'Required'
//     }
//     if (!values.telefone) {
//       errors.telefone = 'Required'
//     } else if (isNaN(Number(values.age))) {
//       errors.telefone = 'Apenas números'
//     }
//     if (!values.cursos) {
//       errors.cursos = 'Required'
//     }
//     if (!values.senha) {
//       errors.senha = 'Required'
//     } else if (values.senha.length < 6) {
//       errors.senha = 'No mínimo 6 caracteres'
//     }
//     if (!values.senhaConfirma) {
//       errors.senhaConfirma = 'Required'
//     }
//     if (!values.materias) {
//       errors.materias = 'Required'
//     }
//     return errors
//   }

//   export default validate;

export const required = value => value ? undefined : 'Campo vazio'
export const minLength = min => value =>
  value && value.length < min ? `No mínimo ${min} caracteres` : undefined
export const number = value => value && isNaN(Number(value)) ? 'Digite apenas números' : undefined
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Email inválido' : undefined