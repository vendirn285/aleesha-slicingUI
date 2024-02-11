import React from 'react'
import Navbar from '@/components/Navbar'
import CartPage from '@/components/CartPage'

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
            <CartPage />
          </div>
        </section>
      </main>
    </>
  )
}
