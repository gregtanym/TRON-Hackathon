"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useGlobalContext } from '../Context/store'

const MyTickets = () => {

  const {account, getAllOwnedTokens} = useGlobalContext()
  const [myTickets, setMyTickets] = useState([])

  useEffect(() => {
    const fetchTickets = async () => {
      if (account) { // Ensure account is not undefined or null
        try {
          const tickets = await getAllOwnedTokens(account);
          setMyTickets(tickets); // Set tickets to state after they are fetched
        } catch (error) {
          console.error("Failed to fetch tickets:", error);
          setMyTickets([]); // Handle errors, maybe set to an empty array or show error message
        }
      }
    };
    fetchTickets()
  }, [account])

  useEffect(() => {
    console.log("this is myTickets ", myTickets);
  }, [myTickets]);

  return (
    <section className="w-full flex flex-col items-center">
      <div className=' flex self-start mt-8 px-12'>
        <div className='flex flex-col items-center'>
          <h2 className="text-3xl font-bold">MY TICKETS</h2>
          <div className="w-36 border-b-2 border-black mt-2"></div>
        </div>
      </div>
          <div className='self-end mx-12 mt-1'>
            <select name="location" id="location" className="outline-none rounded-md py-2 px-4 bg-gray-800 text-white font-semibold">
              <option>Purchased</option>
              <option>Listed</option>
              <option>Redeemed</option>
              <option>Insured</option>
            </select>
          </div>
          <div>
            {!account && "Please connect your TronLink Wallet to see your NFTickets"}
            {account}
            i need to get the concert info and also the individual tickt information (isredeemed, isinsured, islisted)
            and also need to know if the event is cancelled from the nft contract
          </div>
      </section>
  )
}

export default MyTickets