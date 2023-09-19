import React from 'react'
import { useSelector } from 'react-redux'

const Coin = () => {
    const {cartval} = useSelector(state=>state.first);

  return (
    <div>{cartval}</div>
  )
}

export default Coin