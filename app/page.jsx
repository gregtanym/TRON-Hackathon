"use client"
import React from 'react'
import { useGlobalContext } from './Context/store'
import Nav from '@/components/Nav'
import HomeHero from '@/components/HomeHero'
import CategoryFeed from '@/components/CategoryFeed'
import ConcertFeed from '@/components/ConcertFeed'

const Home = () => {
  const {testContextValue} = useGlobalContext()
  return (
    <section className="w-full flex-center flex-col">
        <HomeHero/>
        <CategoryFeed/>
        <ConcertFeed/>
    </section>
  )
}

export default Home