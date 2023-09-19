import React from 'react'
import {useDispatch} from "react-redux"
const Home = () => {
  const dispatch = useDispatch();
  const handlerADD =()=>{
    dispatch({
      type : "incremwntKar"
    })
  }
  const handlerMin =()=>{
    dispatch({
      type : "decrementKar"
    })
  }

  return (
    <>
    <button onClick={handlerADD}>increase cart</button>
    <button onClick={handlerMin}>decrease cart</button>
    </>
  )
}

export default Home