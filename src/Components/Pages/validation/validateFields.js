import React from 'react';

export const required = value => value ? undefined : 'Campo vazio'
export const minLength = min => value =>
  value && value.length < min ? `No mínimo ${min} caracteres` : undefined
export const number = value => value && isNaN(Number(value)) ? 'Digite apenas números' : undefined
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Email inválido' : undefined