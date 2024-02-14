import React from 'react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Image from 'next/image'
import { HiMapPin } from 'react-icons/hi2'
import CheckoutForm from '@/components/CheckoutForm'

export default function checkout() {
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
            <CheckoutForm />
          </div>
        </section>
      </main>
    </>
  )
}
