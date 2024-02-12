import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CartPage() {
  return (
    <div className="bg-gray-100 h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Keranjang Belanja</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4">
                      <div className="flex items-center">
                        <Image
                          className="h-16 w-16 mr-4"
                          src="/images/product_2.png"
                          alt="Product image"
                          height={500}
                          width={500}
                        />
                        <span className="font-semibold">Gelas Imut</span>
                      </div>
                    </td>
                    <td className="py-4">Rp.250.000</td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <button className="border rounded-md py-2 px-4 mr-2">
                          -
                        </button>
                        <span className="text-center w-8">1</span>
                        <button className="border rounded-md py-2 px-4 ml-2">
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4">Rp.250.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-peach rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-center mb-4">
                Summary
              </h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>Rp. 250.000</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Ongkir</span>
                <span>Rp 12.000</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">Rp. 262.000</span>
              </div>
              <Link href="/checkout">
                <button className="bg-primary text-white font-bold py-2 px-4 rounded-lg mt-4 w-full">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
