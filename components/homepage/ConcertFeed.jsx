"use client";
import ConcertCard from "./ConcertCard";

const ConcertFeed = () => {
  return(
    <div className="flex flex-col justify-center items-start w-full px-20 pb-12">
      <div className="font-bold text-2xl">
        Popular Events
      </div>
      <div className="my-3 text-xs text-slate-500 flex flex-row">
        <div className="border px-2 py-1 rounded-xl border-slate-500 min-w-8 text-center mr-4 cursor-pointer">
          All
        </div>
        <div className="border px-2 py-1 rounded-xl border-slate-500 min-w-8 text-center mr-4 cursor-pointer">
          Today
        </div>
        <div className="border px-2 py-1 rounded-xl border-slate-500 min-w-8 text-center mr-4 cursor-pointer">
          This Weekend
        </div>
        <div className="border px-2 py-1 rounded-xl border-slate-500 min-w-8 text-center mr-4 cursor-pointer">
          Free
        </div>
      </div>
      <div className="flex flex-row justify-between w-full flex-wrap my-4">
        <ConcertCard
          img="/images/taylor-swift-concert.jpg"
          title="Taylor Swift Eras Tour"
          month="APR"
          days="22-31"
          location="Singapore National Stadium"
          time="8:00PM - 10:00PM"
        />
        <ConcertCard
          img="/images/coldplay-concert.jpg"
          title="Coldplay Music of the Spheres"
          month="JUN"
          days="23-31"
          location="Singapore National Stadium"
          time="8:00PM - 10:00PM"
        />
        <ConcertCard
          img="/images/1975-concert.jpg"
          title="1975 Concert"
          month="AUG"
          days="22"
          location="Sands Expo and Convention Centre"
          time="8:00PM - 10:00PM"
        />
        <ConcertCard
          img="/images/ethsg.png"
          title="Ethereum Singapore"
          month="SEP"
          days="10-12"
          location="National Gallery Singapore"
          time="9:00PM - 6:00PM"
        />
        <ConcertCard
          img="/images/football-final.jpeg"
          title="Champions League Final"
          month="NOV"
          days="17"
          location="Singapore National Stadium"
          time="8:00PM - 10:00PM"
        />
        <ConcertCard
          img="/images/bruno-mars-concert.jpeg"
          title="Bruno Mars Concert"
          month="DEC"
          days="3-6"
          location="Singapore National Stadium"
          time="8:00PM - 10:00PM"
        />
      </div>
      <div className="w-full flex justify-center">
        <div className="border-2 rounded w-96 h-10 flex justify-center items-center font-bold border-gray-600 text-gray-700 cursor-pointer
        group transition duration-300 ease-in-out transform hover:scale-105 hover:z-10 hover:bg-yellow-300 hover:border-black hover:text-black">
          See More
        </div>
      </div>
    </div>
  )
};

export default ConcertFeed;