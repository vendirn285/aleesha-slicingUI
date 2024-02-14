import React from 'react'
import Navbar from '@/components/Navbar'
import Payment from '@/components/Payment'

export default function paymentpage() {
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
