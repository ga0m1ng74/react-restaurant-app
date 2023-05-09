import React, { useState } from 'react'
import {mainMenu} from '../Data'
import {RxDashboard} from 'react-icons/rx'
function Navlcon() {
  const [toggle,setToggle] =useState(false)
  return (
    <>
      <div className={`${toggle?'scale-[1.2]':'scale-0'} fixed w-full flex justify-center z-20 bottom-8 transition-all duration-300`}>
        <div className="flex sm:gap-8 gap-6 bg-black rounded-xl p-4">
          {mainMenu.map(main => {
            return(
              <div className="p-2 rounded-full bg-glass" key={main.id} onClick={()=>{setToggle(false)}}>
                <a href={`#${main.href}`} className='text-xl text-white'>
                  {main.icon}
                </a>
              </div>
            )
          })}  
        </div>
      </div>
      <div className="fixed right-0 top-[20%] z-20 cursor-pointer bg-black rounded" onClick={()=>{
        setToggle(!toggle)
      }}>
        <RxDashboard className='text-3xl text-white'/>
      </div>
    </>
  )
}

export default Navlcon