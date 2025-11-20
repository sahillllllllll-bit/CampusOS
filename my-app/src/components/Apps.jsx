import React, { useState } from 'react'
import logo from '../assets/imgs/s1.png';
import logo1 from '../assets/imgs/s2.png';
import logo2 from '../assets/imgs/s3.png';
import logo3 from '../assets/imgs/s4.png';
import logo4 from '../assets/imgs/s5.png';
import logo5 from '../assets/imgs/s6.png';
import logo6 from '../assets/imgs/s7.png';
import logo7 from '../assets/imgs/s8.png';
import logo8 from '../assets/imgs/s9.png';
import logo9 from '../assets/imgs/s10.png';
import logo10 from '../assets/imgs/s11.png';
import FloatingTimer from "./FloatingTimer.jsx"





const Apps = () => {
  const [openTimer, setOpenTimer] = useState(false);
      return (
        <div>
<FloatingTimer open={openTimer} onClose={() => setOpenTimer(false)}/>
  <div className='flex justify-center items-center w-full' >
        <div className='appbox z-7'>
           <div className="aps">
           <div className="imgs">
                  <img className='rounded-2xl' src={logo9} alt="" />
             </div>
             <div className="title">
                FlexBox
             </div>
         </div>
         <div className="aps">
             <div className="imgs">
               <img className='rounded-2xl' src={logo} alt="" />
             </div>
             <div className="title">
               To-Do
             </div>
         </div>
         <a href="https://onlinenotepad.org/notepad" target="_blank" >
         <div className="aps">
           <div className="imgs">
                 <img className='rounded-2xl' src={logo7} alt="" />
             </div>
             <div className="title">
                Create Notes
             </div>
         </div>
         </a>
       
         <div className="aps" onClick={() => setOpenTimer(true)}>
           <div className="imgs">
                  <img className='rounded-2xl' src={logo10} alt="" />
             </div>
             <div className="title">
                Timer
             </div>
         </div>
        
         <div className="aps">
           <div className="imgs">
                  <img className='rounded-2xl' src={logo4} alt="" />
             </div>
             <div className="title">
                Contests
             </div>
         </div>
          <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank">
         <div className="aps">
           <div className="imgs">
                 <img className='rounded-2xl' src={logo6} alt="" />
             </div>
             <div className="title">
                Compiler
             </div>
         </div>
         </a>
         <div className="aps">
           <div className="imgs">
                 <img className='rounded-2xl' src={logo7} alt="" />
             </div>
             <div className="title">
               Notes 
             </div>
         </div>
         <div className="aps">
           <div className="imgs">
                 <img className='rounded-2xl' src={logo5} alt="" />
             </div>
             <div className="title">
                Courses
             </div>
         </div>
         <div className="aps">
           <div className="imgs">
                <img className='rounded-2xl' src={logo8} alt="" />
             </div>
             <div className="title">
                Meeting
             </div>
         </div>
         <div className="aps">
           <div className="imgs">
                 <img className='rounded-2xl' src={logo1} alt="" />
             </div>
             <div className="title">
                StudyNewz
             </div>
         </div>
         <div className="aps">
           <div className="imgs">
                  <img className='rounded-2xl' src={logo2} alt="" />
             </div>
             <div className="title">
                Chat Now
             </div>
         </div>
         <div className="aps">
           <div className="imgs">
                 <img className='rounded-2xl' src={logo3} alt="" />
             </div>
             <div className="title">
                 AI Assistant
             </div>
         </div>
           <div className="aps">
             <div className="imgs">
               <img className='rounded-2xl' src={logo} alt="" />
             </div>
             <div className="title">
               To-Do
             </div>
         </div>
         <div className="aps">
           <div className="imgs">
                 <img className='rounded-2xl' src={logo} alt="" />
             </div>
             <div className="title">
                Notes
             </div>
         </div>
         <div className="aps">
           <div className="imgs">
                  <img className='rounded-2xl' src={logo} alt="" />
             </div>
             <div className="title">
                Timer
             </div>
         </div>
         <div className="aps">
           <div className="imgs">
                  <img className='rounded-2xl' src={logo} alt="" />
             </div>
             <div className="title">
                Contests
             </div>
         </div>
         <div className="aps">
           <div className="imgs">
                 <img className='rounded-2xl' src={logo} alt="" />
             </div>
             <div className="title">
                Compiler
             </div>
         </div>
         <div className="aps">
           <div className="imgs">
                 <img className='rounded-2xl' src={logo} alt="" />
             </div>
             <div className="title">
                Courses
             </div>
         </div>
         <div className="aps">
           <div className="imgs">
                <img className='rounded-2xl' src={logo} alt="" />
             </div>
             <div className="title">
                Meeting
             </div>
         </div>
         <div className="aps">
           <div className="imgs">
                 <img className='rounded-2xl' src={logo} alt="" />
             </div>
             <div className="title">
                StudyNewz
             </div>
         </div>
         <div className="aps">
           <div className="imgs">
                  <img className='rounded-2xl' src={logo} alt="" />
             </div>
             <div className="title">
                Chat Now
             </div>
         </div>
         <div className="aps">
           <div className="imgs">
                 <img className='rounded-2xl' src={logo} alt="" />
             </div>
             <div className="title">
                 AI Assistant
             </div>
         </div>
           <div className="aps">
             <div className="imgs">
               <img className='rounded-2xl' src={logo} alt="" />
             </div>
             <div className="title">
               To-Do
             </div>
         </div>
         <div className="aps">
           <div className="imgs">
                 <img className='rounded-2xl' src={logo} alt="" />
             </div>
             <div className="title">
                Notes
             </div>
         </div>
         <div className="aps">
           <div className="imgs">
                  <img className='rounded-2xl' src={logo} alt="" />
             </div>
             <div className="title">
                Timer
             </div>
         </div>
         <div className="aps">
           <div className="imgs">
                  <img className='rounded-2xl' src={logo} alt="" />
             </div>
             <div className="title">
                Contests
             </div>
         </div>
         <div className="aps">
           <div className="imgs">
                 <img className='rounded-2xl' src={logo} alt="" />
             </div>
             <div className="title">
                Compiler
             </div>
         </div>
         <div className="aps">
           <div className="imgs">
                 <img className='rounded-2xl' src={logo} alt="" />
             </div>
             <div className="title">
                Courses
             </div>
         </div>
         <div className="aps">
           <div className="imgs">
                <img className='rounded-2xl' src={logo} alt="" />
             </div>
             <div className="title">
                Meeting
             </div>
         </div>
         <div className="aps">
           <div className="imgs">
                 <img className='rounded-2xl' src={logo} alt="" />
             </div>
             <div className="title">
                StudyNewz
             </div>
         </div>
         <div className="aps">
           <div className="imgs">
                  <img className='rounded-2xl' src={logo} alt="" />
             </div>
             <div className="title">
                Chat Now
             </div>
         </div>
         <div className="aps">
           <div className="imgs">
                 <img className='rounded-2xl' src={logo} alt="" />
             </div>
             <div className="title">
                 AI Assistant
             </div>
         </div>
         
       
        </div>
    </div>
    </div>
  )
}

export default Apps