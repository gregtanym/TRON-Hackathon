"use client"
import React from 'react'
import { useGlobalContext } from './Context/store'

const Home = () => {
  const {testContextValue} = useGlobalContext()
  return (
    <section className="w-full flex-center flex-col">
        <div>This is homepage</div>
        <div>{testContextValue}</div>
    </section>
  )
}

export default Home