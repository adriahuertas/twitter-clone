import React from 'react'
import { BsSearch } from 'react-icons/bs'

function RightSection() {
  return (
    <section className=" w-[325px] sticky top-2 right-0 overflow-scroll mt-2 flex flex-col items-stretch h-screen px-4">
      <div>
        <div className="relative w-full h-full group">
          <input
            id="searchBox"
            type="text"
            placeholder="Search Twitter"
            className="outline-none peer focus:border-primary focus:border bg-neutral-900/90 w-full h-full rounded-xl py-3 pl-12" />
          <label htmlFor="searchBox" className="absolute top-0 left-0 h-full flex items-center justify-center p-4 peer-focus:text-primary text-gray-500">
            <BsSearch className="w-5 h-5" />
          </label>
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-neutral-900 my-4 ">
        <h3 className="font-bold text-xl my-2 px-4">What&apos;s happening</h3>
        <div>
          {
            Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="hover:bg-white/10 p-4 rounded-xl transition durantion-200">
                <div className="font-bold text-lg">
                  #trending {i + 1}
                </div>
                <div className="text-sm text-neutral-400">30.7k</div>
              </div>
            ))
          }
        </div>

      </div>
      <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
        <h3 className="font-bold text-xl my-2 px-4">Who to follow</h3>
        <div>
          {
            Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="hover:bg-white/10 p-4 flex justify-between items-center rounded-xl transition durantion-200">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-neutral-600 rounded-full flex-none"></div>
                  <div className="flex flex-col">
                    <div className="font-bold text-white">Other User</div>
                    <div className="text-gray-500 text-xs">@otheruser1232</div>
                  </div>
                </div>
                <div className="">
                  <button className="rounded-full px-4 py-2 bg-white text-neutral-950">
                    Follow
                  </button>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default RightSection
