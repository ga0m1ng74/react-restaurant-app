import React from 'react'
import { recipes } from '../Data'
function Recipe() {
  return (
    <div className="section" id="recipe">
      <div className="flex flex-col items-center">
        <div className="text-3xl text-center font-bold mb-16">Hot Selling Recipes</div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {recipes.map((items) => {
            return (
              <div className="p-4 shadow-lg hover:shadow transition-all duration-300 cursor-pointer" key={items.id}>
                <img src={items.image} alt="recipe-img" className=' rounded-lg mb-4' />
                <div className="flex items-center justify-between mb-4">
                  <div className="md:text-xl text-[1rem] font-semibold">
                    {items.name}
                  </div>
                  <div className="flex items-center gap-3">
                    <button>-</button>
                    <span className='text-[0.85rem]'>2</span>
                    <button>+</button>
                  </div>
                </div>

                <p className='text-[0.85rem] opacity-50 mb-4'>
                  Following a recipe can help ensure that your dish turns out well and tastes great. It can also be a fun and creative process, as you make adjustments and experiment with different ingredients and techniques to put your own unique spin on a classic recipe.
                </p>
                <div className="flex items-center justify-between">
                  <span>{items.price}</span>
                  <span className='btn cursor-pointer p-3'>Add</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Recipe