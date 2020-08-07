import React from 'react'
import { ICoffee } from '../models'
import styled from '@emotion/styled'

const InlineDiv = styled.div`
  display: inline-block;
`

interface CoffeeItemProps {
  item: ICoffee
  onClick: () => void
}
export const CoffeeItem: React.FC<CoffeeItemProps> = ({
  item,
  onClick,
}): JSX.Element => {
  return (
    <InlineDiv onClick={onClick}>
      {item.name} - {item.roaster}
    </InlineDiv>
  )
}
