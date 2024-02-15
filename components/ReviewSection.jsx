import React from 'react'
import { Rating } from '@material-tailwind/react'

export default function ReviewSection() {
  return (
    <section className="w-full bg-white ">
      <div className="bg-peach">
        <h className="text-xl font-bold">Reviews & Ratings</h>
        <div className="flex justify-between items-center">
          <div className="flex items-center pt-2">
            <Rating value={4} />
            <span className="text-lg">(4.0)</span>
          </div>
          <span className="flex flex-col text-sm pt-1">27 Costumer Review</span>
        </div>
      </div>
    </section>
  )
}
