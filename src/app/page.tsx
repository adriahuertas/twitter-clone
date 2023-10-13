import LeftSidebar from './components/LeftSidebar'

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* Left sidebar / header */}
        <LeftSidebar />
        <div>Home Timeline</div>
        <div>Right section</div>
      </div>
    </div>
  )
}

export default Home
