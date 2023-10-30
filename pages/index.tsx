import React from 'react'
import Image from 'next/image'
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from 'react-icons/bs'
import { BiHash, BiHomeCircle, BiMoney, BiUser } from 'react-icons/bi'
import { SlOptions } from 'react-icons/sl'

import FeedCard from '@/components/FeedCard'


interface TwitterSidebarButton{
  title: String,
  icon: React.ReactNode
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />
  },
  {
    title: "Explore",
    icon: <BiHash />
  },
  {
    title: "Notifications",
    icon: <BsBell />
  },
  {
    title: "Messages",
    icon: <BsEnvelope />
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />
  },
  {
    title: "Twittr Blue",
    icon: <BiMoney />
  },
  {
    title:"Profile",
    icon: <BiUser />
  },
  {
    title: "More Options",
    icon: <SlOptions />
  }
]

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-48">
        <div className="col-span-3 pt-1 px-4">
          <div className="text-2xl h-fit w-fit hover:bg-gray-800 rounded-full p-1 cursor-pointer">
            <BsTwitter />
          </div>
          <div className="mt-1 text-xl pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-3xl px-3 py-3 w-fit cursor-pointer mt-1"
                  key={item.title}
                  >
                  <span className='text-3xl'>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
              <button className="bg-[#1d9bf0] text-xl font-semibold rounded-full py-2 px-4 w-full">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] height-screen overflow-scroll border-grey-500">
          <FeedCard></FeedCard>
          <FeedCard></FeedCard>
          <FeedCard></FeedCard>
          <FeedCard></FeedCard>
          <FeedCard></FeedCard>
        </div>
        <div className="col-span-3"></div>
      </div> 
    </div>
  )
}
