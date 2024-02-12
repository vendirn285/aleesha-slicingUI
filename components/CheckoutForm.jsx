import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Checkbox,
} from '@material-tailwind/react'

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
                          <h1 className="font-bold text-lg">Vendi</h1>
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
                      <td className="">
                        <h1>Note</h1>
                      </td>
                      <td className="py-4">
                        <input
                          type="text"
                          className="w-[250px] h-[50px]  rounded-lg shadow-lg"
                          placeholder="Tulis Pesan Untuk Seller"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h1>Opsi Pengiriman</h1>
                      </td>
                      <td className="py-4">
                        <Menu
                          dismiss={{
                            itemPress: false,
                          }}
                        >
                          <MenuHandler>
                            <Button className="w-[250px] shadow-lg text-black text-left bg-bgSecondary">
                              Shipping
                            </Button>
                          </MenuHandler>
                          <MenuList>
                            <MenuItem className="p-10">
                              <label
                                htmlFor="item-1"
                                className="flex cursor-pointer items-center gap-2 p-2"
                              >
                                <Checkbox
                                  ripple={false}
                                  id="item-1"
                                  containerProps={{ className: 'p-0' }}
                                  className="hover:before:content-none"
                                />
                                Anteraja
                              </label>
                            </MenuItem>
                            <MenuItem className="p-0">
                              <label
                                htmlFor="item-2"
                                className="flex cursor-pointer items-center gap-2 p-2"
                              >
                                <Checkbox
                                  ripple={false}
                                  id="item-2"
                                  containerProps={{ className: 'p-0' }}
                                  className="hover:before:content-none"
                                />
                                JNE
                              </label>
                            </MenuItem>
                            <MenuItem className="p-0">
                              <label
                                htmlFor="item-3"
                                className="flex cursor-pointer items-center gap-2 p-2"
                              >
                                <Checkbox
                                  ripple={false}
                                  id="item-3"
                                  containerProps={{ className: 'p-0' }}
                                  className="hover:before:content-none"
                                />
                                Sicepat
                              </label>
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </td>
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
                <Link href="/paymentpage">
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
