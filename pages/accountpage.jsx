import React from 'react'
import Navbar from '@/components/Navbar'
import Account from '@/components/Account'
import Sidebar from '@/components/Sidebar'

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
            <Sidebar />
          </div>
        </section>
        <section>
          <div className="container mx-auto pt-[250px]">
            <Account />
          </div>
        </section>
      </main>
    </>
  )
}
