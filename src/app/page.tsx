import LeftSidebar from './components/LeftSidebar'

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* Left sidebar / header */}
        <LeftSidebar />
        <main className="ml-[280px] flex w-[699px] mx-2 h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-xl font-bold  p-6">Home</h1>
          <div className='border-t-[0.5px] border-b-[0.5px] px-4 flex items-stretch py-4 space-x-2 border-gray-600  relative'>
            <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
            <div className="flex flex-col w-full h-full">
              <input type="text" placeholder="What's happening?" className='w-full h-full text-2xl placeholder:text-gray-600 border-b-[0.5px] bg-transparent outline-none border-none p-4 border-gray-600' />

              <div className="w-full justify-between items-center flex">
                <div></div>
                <div className="w-full max-w-[100px]">
                  <button className="rounded-full bg-primary px-4 py-2 text-lg w-full font-bold text-center hover:bg-opacity-70 transition duration-200">
                    Twitter
                  </button>
                </div>
              </div>

            </div>
          </div>
        </main>
        <div>Right section</div>
      </div>
    </div>
  )
}

export default Home
