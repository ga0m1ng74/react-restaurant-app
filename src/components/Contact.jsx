import React from 'react'

function Contact() {
  return (
    <div className="section" id="contact">
      <div className=" border-solid border-black border-b pb-8 flex justify-between items-end flex-wrap">
        <div>
          <div className=" text-xl font-semibold uppercase">Let's talk</div>
          <div className=" text-3xl font-bold">Want to reserve a table?</div>
        </div>
        <div className=" rounded-tr-[1rem] rounded-b-[1rem] bg-black text-white p-4 text-[0.85rem]">
          <a href="#">Contact us now</a>
        </div>
      </div>
    </div>
  )
}

export default Contact