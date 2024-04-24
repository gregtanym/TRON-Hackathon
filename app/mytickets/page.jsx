"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useGlobalContext } from '../Context/store'
import TicketCard from '@/components/mytickets-page/TicketCard'
import Loading from '@/components/Loading'

const MyTickets = () => {

  const {account, getAllOwnedTokens, myTickets, isLoading} = useGlobalContext()

  const [selectedFilter, setSelectedFilter] = useState("Purchased")

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const filteredTickets = myTickets.filter(ticket => {
    switch(selectedFilter) {
      case 'Purchased':
        return true;
      case 'Listed':
        return false; // Update when listed is implemented
      case 'Redeemed':
        return ticket.isRedeemed;
      case 'Insured':
        return ticket.isInsured;
      default:
        return true;
    }
  });

  useEffect(() => {
    const fetchTickets = async () => {
      if (account) { 
        try {
          await getAllOwnedTokens(account);
        } catch (error) {
          console.error("Failed to fetch tickets:", error);
        }
      }
    };
    fetchTickets()
  }, [account])

  useEffect(() => {
    console.log(myTickets)
  }, [myTickets])

  return (
    <section className="w-full flex flex-col items-center">
      {isLoading && <Loading/>}
      <div className=' flex self-start mt-8 px-12'>
        <div className='flex flex-col items-center'>
          <h2 className="text-3xl font-bold">MY TICKETS</h2>
          <div className="w-36 border-b-2 border-black mt-2"></div>
        </div>
      </div>
      <div className='self-end mx-12 mt-1'>
        <select name="location" id="location" className="outline-none rounded-md py-2 px-4 bg-gray-800 text-white font-semibold" onChange={handleFilterChange}>
          <option>Purchased</option>
          <option>Listed</option>
          <option>Redeemed</option>
          <option>Insured</option>
        </select>
      </div>
      <div className='w-3/4 mb-10'>
        {!account && "Please connect your TronLink Wallet to see your NFTickets"}
        <br/>
        <div className='w-full flex justify-center'>
          {filteredTickets.length === 0 && "No tickets to display :("}
        </div>
        {filteredTickets.map(event => <TicketCard
          key={event.eventId}
          contractAddress= {event.contractAddress}
          eventId={event.eventId}
          title={event.eventTitle}
          date={event.date}
          time={event.time}
          location={event.location}
          tokenId={event.tokenId}
          isRedeemed={event.isRedeemed}
          isInsured={event.isInsured}
          catClass={event.catClass}
          imageURL={event.imageURL}
          isCancelled={event.isCancelled}
          originalTicketPrice = {event.originalTicketPrice}
        />)}
      </div>
      </section>
  )
}

export default MyTickets