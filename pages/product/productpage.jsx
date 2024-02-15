import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductDetail from '@/components/ProductDetail'
import ReviewSection from '@/components/ReviewSection'

export default function productdetail() {
  return (
    <>
      <main className="bg-white">
        <section>
          <div className="container">
            <Navbar></Navbar>
          </div>
        </section>
        <section>
          <div className="container flex space-x-3 mx-auto pt-[150px]">
            <ProductDetail></ProductDetail>
          </div>
        </section>
        <section>
          <div className="container flex space-x-3 mx-auto mb-20">
            <ReviewSection />
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  )
}
