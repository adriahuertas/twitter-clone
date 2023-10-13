import React from 'react'
import { BiHomeCircle, BiUser } from 'react-icons/bi'
import { HiOutlineHashtag } from 'react-icons/hi'
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from 'react-icons/bs'
import Link from 'next/link'

const NAVIGATION_ITEMS = [
  {
    title: 'Twitter',
    icon: BsTwitter
  },
  {
    title: 'Home',
    icon: BiHomeCircle
  },
  {
    title: 'Explore',
    icon: HiOutlineHashtag
  },
  {
    title: 'Notifications',
    icon: BsBell
  },
  {
    title: 'Messages',
    icon: BsEnvelope
  },
  {
    title: 'Bookmarks',
    icon: BsBookmark
  },
  {
    title: 'Profile',
    icon: BiUser
  }]

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* Left sidebar / header */}
        <section className="fixed w-[275px] flex flex-col items-stretch h-screen">
          <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
            {
              NAVIGATION_ITEMS.map((item) => (
                <Link className="hover:bg-white/30 text-2xl transition duration-200 flex items-center justify-start rounded-3xl w-fit space-x-4 py-2 px-6" href={`/${item.title.toLowerCase()}`} key={item.title}>
                  <div>
                    <item.icon />
                  </div>
                  <div>
                    {item.title !== 'Twitter' && item.title}
                  </div>
                </Link>
              ))
            }
            <button className="w-full rounded-full bg-primary p-4 m-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
              Twitter
            </button>
          </div>
          <div>Bottom</div>
        </section>
        <div>Home Timeline</div>
        <div>Right section</div>
      </div>
    </div>
  )
}

export default Home
