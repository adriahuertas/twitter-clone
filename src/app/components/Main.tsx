import { BsChat, BsDot, BsThreeDots } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai'
import { IoShareOutline, IoStatsChart } from 'react-icons/io5'

const Main = () => {
  return (
    <main className="flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
      <h1 className="text-xl font-bold backdrop-blur p-6 bg-black/10 sticky top-0">Home</h1>
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
      <div className='flex flex-col'>
        {
          Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="border-t-[0.5px] border-gray-600 py-4 px-6 flex space-x-2">
              <div>
                <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-1 w-full">
                    <div className="font-bold">Adrià</div>
                    <div className="text-gray-500">@adria</div>
                    <div className="text-gray-500"><BsDot /></div>
                    <div className="text-gray-500">1 hour ago</div>
                  </div>
                  <div className="text-gray-500">
                    <BsThreeDots />
                  </div>
                </div>
                <div className="text-white text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate laborum nulla hic minima eveniet. Quasi molestias cum pariatur distinctio facilis adipisci quaerat tempore ducimus? Vero veritatis, aliquid atque repellendus quasi fuga fugit voluptatem magni aliquam officiis nulla consequuntur. Possimus at nostrum optio aliquid quam mollitia nam corrupti distinctio ipsum impedit.</div>
                <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2"></div>
                <div className="flex items-center justify-start space-x-20 my-3 w-full">
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><BsChat /></div>
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><AiOutlineRetweet /></div>
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><AiOutlineHeart /></div>
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><IoStatsChart /></div>
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer"><IoShareOutline /></div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </main >
  )
}

export default Main
