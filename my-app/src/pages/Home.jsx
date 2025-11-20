import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar.jsx';
import Layout from '../components/layout.jsx';
import Recent from '../components/Recent.jsx';
import Basebar from '../components/Basebar.jsx';
import Apps from '../components/Apps.jsx';
import Limit from './Limit.jsx';
import Footer from '../components/Footer.jsx';


const Home = () => {



  const [isWide, setIsWide] = useState(window.innerWidth > 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth > 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div>
      { isWide? (
    <div className='main'>
        <Navbar/>
        <div className=' z-8 absolute top-20 h-80 w-full flex justify-center items-center flex-col gap-16 '>
        <div className='pacifico text-6xl relative inline-block'>
  All your campus life on one platform.
  {/* <div className='w-80 h-8 bg-blue-400 rounded-xl absolute tilt -z-10 top-full left-0 mt-2'></div> */}
  {/* <div className='w-80 h-10 bg-blue-400 rounded-xl absolute tilt -z-10 top-full left-10 mt-5'></div> */}
</div>    
          {/* <div className='w-56 h-8 bg-purple-400 absolute rounded-xl -z-10 tilt2  right-80 top-30 '></div> */}
          <div className='font-aladin text-4xl'>Simple, smart, and made for students!</div>

          <div className='flex gap-10'>
            <button className=' hover:shadow hover:bg-blue-600 font-stack bg-blue-400 p-2'>Start Now-it's free</button>
            <button className='hover:shadow hover:bg-gray-400 font-stack p-2 border bg-gray-300'>AI Mentor-ask now</button>
          </div>
        </div>
      <Layout />
        {/* <Recent/> */}
        <Apps/>
     <Footer/>
 
   
  
     
    </div> ) : <Limit/>}

    </div>
  )
}

export default Home;