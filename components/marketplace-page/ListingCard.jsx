import React from 'react'
import { TbPigMoney } from "react-icons/tb";
import { MdRedeem } from "react-icons/md";

const ListingCard = ({listing}) => {
  return (
    <div className='flex shadow-md rounded-md mx-4 mb-4 justify-center items-center p-3 w-2/5 '>
        <div>
            <img className='w-40 h-40' src={listing.tokenImg}/>
        </div>
        <div className='flex flex-col'>
            <div className='font-bold text-lg'>{listing.concertTitle}</div>
            <div className='font-semibold'>{listing.date}</div>
            <div className='text-sm'>{listing.time}</div>
            <div className={`flex items-center ${listing.redeemed ? "text-red-500" : "text-green-500"}`}><MdRedeem/>{listing.redeemed ? "Redeemed" : "Redeemable"}</div>
            <div className={`flex items-center ${listing.insured ? "text-green-500" : "text-red-500"}`}><TbPigMoney/>{listing.insured ? "Insured" : "Uninsured"}</div>
            <div>{listing.listedPrice} TRX</div>
        </div>
    </div>
  )
}

export default ListingCard