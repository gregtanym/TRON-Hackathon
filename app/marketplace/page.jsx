"use client"

import React from 'react'
import { useGlobalContext } from '@/app/Context/store'

const Marketplace = () => {
  const {adapter} = useGlobalContext()
    return (
      <section className="w-full flex-center flex-col">
          <div>This is marketplace page</div>
          <div>{adapter.state ? "do this": "do that"}</div>
      </section>
    )
  }
  
  export default Marketplace