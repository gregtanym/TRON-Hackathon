"use client"
import React from 'react'
import { TbPigMoney } from "react-icons/tb";
import { MdRedeem } from "react-icons/md";
import { useGlobalContext } from '@/app/Context/store';
import Link from 'next/link';

const ListingCard = ({listing}) => {


  return (
    <div className='flex shadow-md rounded-md mx-4 mb-4 justify-center items-center p-3 w-2/5'>
        <div>
            <img className='min-w-40 h-40' src={listing.tokenImgURL}/>
        </div>
        <div className='flex flex-col'>
            <div className='font-bold text-lg'>{listing.eventTitle} Cat {listing.catClass} Ticket</div>
            <div className={`flex items-center ${listing.isRedeemed ? "text-red-500" : "text-green-500"}`}><MdRedeem/>{listing.isRedeemed ? "Redeemed" : "Redeemable"}</div>
            <div className={`flex items-center ${listing.isInsured ? "text-green-500" : "text-red-500"}`}><TbPigMoney/>{listing.isInsured ? "Insured" : "Uninsured"}</div>
            <div>{listing.listingPrice} TRX</div>
        </div>
    </div>
  )
}

export default ListingCard