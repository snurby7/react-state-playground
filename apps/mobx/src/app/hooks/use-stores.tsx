import React from 'react'
import { AppContext } from '../context'

export const useStores = () => React.useContext(AppContext)
