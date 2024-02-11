import React from 'react'
import Navbar from '@/components/Navbar'
import Payment from '@/components/Payment'

export default function cart() {
  return (
    <>
      <main className="bg-bgSecondary">
        <section>
          <div className="container">
            <Navbar></Navbar>
          </div>
        </section>
        <section>
          <div className="container mx-auto pt-[250px]">
            <Payment />
          </div>
        </section>
      </main>
    </>
  )
}
