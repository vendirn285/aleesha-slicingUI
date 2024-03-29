import React, { useState, useEffect } from 'react'
import logo from '../public/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { GoSearch } from 'react-icons/go'
import NavbarBottom from './NavbarBottom'

export default function Navbar() {
  return (
    <div className="fixed z-10 w-full bg-primary">
      <header className="flex justify-between items-center mx-20 mt-5 space-x-10">
        <div>
          <Image src={logo} width={250} height={100} alt="/" />
        </div>
        <div className="flex w-3/4 items-center justify-center">
          <div className="flex w-full mx-10 rounded bg-white">
            <input
              className="w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none "
              type="search"
              name="search"
              placeholder="Search..."
            />
            <button type="submit" className="rounded px-4 py-2 text-black mx- ">
              <GoSearch />
            </button>
          </div>
        </div>
        <div>
          <ul className="flex items-center space-x-20">
            <li>
              <Link href="/cart">
                <MdOutlineShoppingBag color="white" size={30} />
              </Link>
            </li>
            <li>
              <Link href="/accountpage">
                <IoMdNotificationsOutline color="white" size={30} />
              </Link>
            </li>
            <li>
              <Link href="/login">
                <button className="bg-peach text-black text-sm font-bold rounded-full w-full px-8 py-2">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <NavbarBottom />
    </div>
  )
}
