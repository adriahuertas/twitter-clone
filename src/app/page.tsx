import { BsSearch } from 'react-icons/bs'
import LeftSidebar from './components/LeftSidebar'
import Main from './components/Main'

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[1150px] w-full h-full flex relative" >
        {/* Left sidebar / header */}
        <LeftSidebar />
        <Main />
        <section className=" sticky top-2 w-[275px] mt-2 flex flex-col items-stretch h-screen px-4">
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
          <div></div>
          <div></div>
        </section>
      </div >
    </div >
  )
}

export default Home
