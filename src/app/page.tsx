import LeftSidebar from './components/LeftSidebar'
import RightSection from './components/RightSection'
import Main from './components/Main'

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center text-white relative bg-black">
      <div className="max-w-[1200px] w-full h-full flex relative" >
        <LeftSidebar />
        <Main />
        <RightSection />
      </div >
    </div >
  )
}

export default Home
