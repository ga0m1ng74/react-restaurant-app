import React from 'react'
import { footerSocials, footerContacts, mainMenu, explores, payements } from '../Data'
function Footer() {
  return (
    <div className="section" id="footer">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 mb-18">
        <div>
          <div className="text-xl font-semibold mb-3">Foodzone</div>
          <p className=" opacity-20 mb-3">
            Foodzone is an online food delivery platform, it would be beneficial to discuss the range of options available, such as different types of cuisine, dietary restrictions, and delivery fees or minimum order requirements.
          </p>
          <div className="flex items-center gap-4">
            <span>Follow Us</span>
            <div className="h-[2px] w-12 bg-black"></div>
            {footerSocials.map((items, index) => {
              return (
                <div key={index}>
                  <a href="#">{items}</a>
                </div>
              )
            })}
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <h3 className=' font-semibold text-[1rem] mb-4'>Main menu</h3>
            {mainMenu.map((items) => {
              return (
                <div className="mb-2" key={items.id}>
                  <a href={`#${items.href}`}>{items.text}</a>
                </div>
              )
            })}
          </div>
          <div>
            <h3 className='font-semibold text-[1rem] mb-4'>Explore</h3>
            {explores.map((items,index)=>{
              return(
                 <div className="mb-2" key={index}>
                  <a href="#">{items}</a>
                 </div>
              )
            })}
          </div>
        </div>
        <div>
          <h3 className=' font-semibold text-[1rem] mb-4'>Contact</h3>
          {footerContacts.map((items)=>{
            return(
              <div className="flex items-center gap-4 mb-4" key={items.id}>
                <div>
                  {items.icon }
                </div>
                <div>{items.text}</div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-4 pb-8">
        <div>Copyright &#169;</div>
        <div className="flex gap-2">
          {payements.map((items,index )=>{
            return(
              <div key={index}>
                <img src={items} className='w-10' alt="payment-img" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Footer