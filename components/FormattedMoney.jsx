import { Text } from '@gluestack-ui/themed';
import React from 'react';

export default function FormattedMoney({ value, ...rest }) {
  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value)

  return (
    <Text {...rest}>{formattedValue}</Text>
  )
}
