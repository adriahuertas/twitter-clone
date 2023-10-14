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

const LeftSidebar = () => {
  return (
    <section className="sticky top-0 w-[22%] flex flex-col items-stretch h-screen px-4">
      <div className="flex flex-col items-stretch h-full space-y-4 ">
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
        <button className="w-full rounded-full bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
          Twitter
        </button>
      </div>
      <a href="https://github.com/adriahuertas" className="rounded-full m-4  space-x-2 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200">
        <div>Adrià Huertas</div>
        <div>@adriahuertas</div>
      </a>
    </section>
  )
}

export default LeftSidebar
