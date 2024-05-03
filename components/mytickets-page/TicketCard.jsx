"use client"

import React from 'react'
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { useGlobalContext } from '@/app/Context/store';
import Loading from '../Loading';

const TicketCard = ({contractAddress, eventId, title, date, time, location, tokenId, isRedeemed, isInsured, catClass, imageURL, isCancelled, originalTicketPrice}) => {
    const {isLoading, setIsLoading, buyInsurance, isTronLinkConnected, redeemTicket, decodeHexString, setMyTickets} = useGlobalContext()

    const updateTicketStatus = (tokenId, updatedFields) => {
        setMyTickets(currentTickets => {
          return currentTickets.map(ticket =>
            ticket.tokenId === tokenId ? { ...ticket, ...updatedFields } : ticket
          );
        });
      };

    const handleBuyInsurance = async () => {
        setIsLoading(true)
        if (!isTronLinkConnected()) {
          alert("Please connect your TronLink Wallet before buying ticket insurance")
          setIsLoading(false)
          return
        }
    
        try {
          const {success, error} = await buyInsurance(contractAddress, tokenId, originalTicketPrice)
    
          if (!success){
            throw new Error(decodeHexString(error.output.contractResult[0]))
          }
          updateTicketStatus(tokenId, {isInsured: true})
          alert("Purchase of ticket insurance successful!")
        } catch (err) {
          alert(`Error during transaction: ${err.message}`);
        } finally {
          setIsLoading(false)
        }
    }

    const handleRedeemTicket = async () => {
        setIsLoading(true)
        if (!isTronLinkConnected()) {
          alert("Please connect your TronLink Wallet before buying ticket insurance")
          setIsLoading(false)
          return
        }
    
        try {
          const {success, error} = await redeemTicket(contractAddress, tokenId)
    
          if (!success){
            throw new Error(decodeHexString(error.output.contractResult[0]))
          }
          updateTicketStatus(tokenId, {isRedeemed: true})
          alert("Ticket Redeemed Successfully!")
        } catch (err) {
          alert(`Error during transaction: ${err.message}`);
        } finally {
          setIsLoading(false)
        }
    }


  return (
    <div className='border-b-2 border-black mx-8 my-2 py-2 flex flex-row w-full'>
        <div>
            <img src={imageURL} className='w-40 h-40 rounded-md bg-blue-400' alt='NFT_Image'/>
        </div>
        <div className='mx-4 flex flex-col max-h-40 w-3/4 justify-center'>
            <div className='flex'>
                <span className='text-xl font-bold mr-3'>{title}</span>
                {isCancelled ? (
                    <span className='flex items-center text-red-500'>
                        <FaRegThumbsDown className='mr-1'/>
                        Event Cancelled
                    </span>
                ) : (
                    <span className='flex items-center text-green-500'>
                        <FaRegThumbsUp className='mr-1'/>
                        Event Active
                    </span>
                )}
            </div>
            <div>{date}</div>
            <div>{time}</div>
            <div>{location}</div>
            <div>Cat {catClass} Ticket</div>
            <div>Token ID: {tokenId}</div>
        </div>
        <div className=' flex flex-col justify-evenly items-center'>
            <button disabled={isInsured} className={`${isInsured ? "text-yellow-300 bg-gray-700 cursor-default" :"bg-yellow-300 hover:bg-yellow-400 text-black" } font-semibold text-lg w-28 py-1 rounded-md`} onClick={handleBuyInsurance}>
                {isInsured ? "Insured!": "Insure"}
            </button>
            <button disabled={isRedeemed} className={`${isRedeemed ? "text-yellow-300 bg-gray-700 cursor-default" :"bg-yellow-300 hover:bg-yellow-400 text-black" } font-semibold text-lg w-28 py-1 rounded-md`} onClick={handleRedeemTicket}>
                {isRedeemed ? "Redeemed!": "Redeem"}
            </button>
            <button className='bg-yellow-300 rounded-md font-semibold text-xl w-28 py-1'>List</button>
        </div>
    </div>
  )
}

export default TicketCard