"use client"

import React from 'react'
import { useGlobalContext } from '@/app/Context/store'
import HomeSearchBar from '@/components/homepage/HomeSearchBar'
import ListingCard from '@/components/marketplace-page/ListingCard'
import sampleListings from "../../data/sampleListings.json"

const Marketplace = () => {
    return (
      <section className="w-full flex-center flex-col h-full">
          <div className='w-full bg-gray-800 flex flex-col items-center pt-6'>
            <HomeSearchBar/>
            <div className='self-end my-5 mx-8'>
              <div className='text-white mb-1'>Sort By:</div>
              <div className=''>
                <select name="location" id="location" className="outline-none rounded-md p-1">
                  <option>Relevance</option>
                  <option>Latest</option>
                  <option>Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
          <div className='flex p-10 '>
            <div className='w-1/5 flex flex-col items-start justify-start border-r border-gray-300'>
              <div className='font-semibold text-lg'>Filters</div>
              <form className='w-full'>
                <div className='border-b border-gray-300 py-2 w-5/6'>
                  <div className='font-semibold text-md mb-2'>Price</div>
                  <input type='checkbox' id='free' name='free' value='Free'/>
                  <label for='free'>Free</label><br/>
                  <input type='checkbox' id='paid' name='paid' value='Paid'/>
                  <label for='paid'>Paid</label><br/>
                </div>
                <div className='border-b border-gray-300 py-2 w-5/6'>
                  <div className='font-semibold text-md mb-2'>Redeem Status</div>
                  <input type='checkbox' id='unredeemed' name='unredeemed' value='unredeemed'/>
                  <label for='unredeemed'>Unredeemed</label><br/>
                  <input type='checkbox' id='redeemeed' name='redeemeed' value='Redeemed'/>
                  <label for='redeemeed'>Redeemed</label><br/>
                </div>
                <div className='border-b border-gray-300 py-2 w-5/6'>
                  <div className='font-semibold text-md mb-2'>Insurance status</div>
                  <input type='checkbox' id='uninsured' name='uninsured' value='Uninsured'/>
                  <label for='uninsured'>Uninsured</label><br/>
                  <input type='checkbox' id='insured' name='insured' value='Insured'/>
                  <label for='insured'>Insured</label><br/>
                </div>
                <div className='border-b border-gray-300 py-2 w-5/6'>
                  <div className='font-semibold text-md mb-2'>Category</div>
                  <input type='checkbox' id='cat1' name='cat1' value='Cat 1'/>
                  <label for='cat1'>Cat 1</label><br/>
                  <input type='checkbox' id='cat2' name='cat2' value='Cat 2'/>
                  <label for='cat2'>Cat 2</label><br/>
                  <input type='checkbox' id='cat3' name='cat3' value='Cat 3'/>
                  <label for='cat3'>Cat 3</label><br/>
                  <input type='checkbox' id='cat4' name='cat4' value='Cat 4'/>
                  <label for='cat4'>Cat 4</label><br/>
                </div>
                <div className='border-b border-gray-300 py-2 w-5/6'>
                  <div className='font-semibold text-md mb-2'>Date</div>
                  <input type='checkbox' id='past' name='past' value='Past'/>
                  <label for='past'>Past</label><br/>
                  <input type='checkbox' id='today' name='today' value='Today'/>
                  <label for='today'>Today</label><br/>
                  <input type='checkbox' id='tomorrow' name='tomorrow' value='Tomorrow'/>
                  <label for='tomorrow'>Tomorrow</label><br/>
                  <input type='checkbox' id='thisWeek' name='thisWeek' value='This Week'/>
                  <label for='thisWeek'>This Week</label><br/>
                  <input type='checkbox' id='thisWeekend' name='thisWeekend' value='This Weekend'/>
                  <label for='thisWeekend'>This Weekend</label><br/>
                  <button className='text-blue-600'>More</button>
                </div>
                <div className=' py-2 w-5/6'>
                  <div className='font-semibold text-md mb-2'>Category</div>
                  <input type='checkbox' id='entertainment' name='entertainment' value='Entertainment'/>
                  <label for='entertainment'>Entertainment</label><br/>
                  <input type='checkbox' id='educationBusiness' name='educationBusiness' value='Educational & Business'/>
                  <label for='educationBusiness'>Educational & Business</label><br/>
                  <input type='checkbox' id='culturalArts' name='culturalArts' value='Cultural & Arts'/>
                  <label for='culturalArts'>Cultural & Arts</label><br/>
                  <input type='checkbox' id='sportsFitness' name='sportsFitness' value='Sports & Fitness'/>
                  <label for='sportsFitness'>Sports & Fitness</label><br/>
                  <input type='checkbox' id='techInnovation' name='techInnovation' value='Technology & Innovation'/>
                  <label for='techInnovation'>Technology & Innovation</label><br/>
                  <input type='checkbox' id='travelAdventure' name='travelAdventure' value='Travel & Adventure'/>
                  <label for='travelAdventure'>Travel & Adventure</label><br/>
                  <button className='text-blue-600'>More</button>
                </div>
                <button className="border rounded w-5/6 flex justify-center items-center font-bold border-gray-600 text-gray-700
                hover:bg-yellow-300 hover:border-black hover:text-black mt-3 py-1">
                  Confirm
                </button>
              </form>
            </div>
            <div className='w-4/5 flex flex-wrap justify-evenly items-start h-min'>
              {sampleListings.map(
                (listing) => 
                <ListingCard
                key={listing.listingId}
                listing={listing}/>
              )}
            </div>
          </div>
      </section>
    )
  }
  
  export default Marketplace