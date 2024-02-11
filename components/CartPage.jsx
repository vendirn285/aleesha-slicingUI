import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CartPage() {
  return (
    <div class="bg-gray-100 h-screen py-8">
      <div class="container mx-auto px-4">
        <h1 class="text-2xl font-semibold mb-4">Keranjang Belanja</h1>
        <div class="flex flex-col md:flex-row gap-4">
          <div class="md:w-3/4">
            <div class="bg-white rounded-lg shadow-md p-6 mb-4">
              <table class="w-full">
                <thead>
                  <tr>
                    <th class="text-left font-semibold">Product</th>
                    <th class="text-left font-semibold">Price</th>
                    <th class="text-left font-semibold">Quantity</th>
                    <th class="text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="py-4">
                      <div class="flex items-center">
                        <Image
                          class="h-16 w-16 mr-4"
                          src="/images/product_2.png"
                          alt="Product image"
                          height={500}
                          width={500}
                        />
                        <span class="font-semibold">Gelas Imut</span>
                      </div>
                    </td>
                    <td class="py-4">Rp.250.000</td>
                    <td class="py-4">
                      <div class="flex items-center">
                        <button class="border rounded-md py-2 px-4 mr-2">
                          -
                        </button>
                        <span class="text-center w-8">1</span>
                        <button class="border rounded-md py-2 px-4 ml-2">
                          +
                        </button>
                      </div>
                    </td>
                    <td class="py-4">Rp.250.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="md:w-1/4">
            <div class="bg-peach rounded-lg shadow-md p-6">
              <h2 class="text-lg font-semibold mb-4">Summary</h2>
              <div class="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>Rp. 250.000</span>
              </div>
              <div class="flex justify-between mb-2">
                <span>Ongkir</span>
                <span>Rp 12.000</span>
              </div>
              <hr class="my-2" />
              <div class="flex justify-between mb-2">
                <span class="font-semibold">Total</span>
                <span class="font-semibold">Rp. 262.000</span>
              </div>
              <Link href="/checkout">
                <button class="bg-primary text-white font-bold py-2 px-4 rounded-lg mt-4 w-full">
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
