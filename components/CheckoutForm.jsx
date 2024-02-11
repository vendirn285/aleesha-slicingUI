import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function CheckoutForm() {
  return (
    <section>
      <div className="bg-gray-100 h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4">Check Out</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">
                        Alamat Pengiriman
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-4">
                        <div className="flex items-center">
                          <h1 className="font-bold tx-lg">Vendi</h1>
                        </div>
                      </td>
                      <td className="py-4">
                        Jalan Gatot Subroto nomer 52, Adimulya kabupaten cilacap
                      </td>
                      <td className="py-4">
                        <div className="flex items-center bg-red-600">
                          <h2 className="text-center font-semibold text-white">
                            Utama
                          </h2>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <span className="font-semibold">0812586737283</span>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                          <span>1</span>
                        </div>
                      </td>
                      <td className="py-4">Rp 250.000</td>
                    </tr>
                    <tr>
                      <td className="py-4">
                        <h1></h1>
                      </td>
                      <td className="py-4">
                        <input
                          type="text"
                          className="w-[250px] h-[50px] ml-[10px]  rounded-lg shadow-lg"
                          placeholder="Tulis Pesan Untuk Seller"
                        />
                      </td>
                      <td className="py-4"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
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
                    Payment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
